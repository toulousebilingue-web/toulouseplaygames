"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Search, ChevronsUpDown, Camera, ImageIcon, Building2, Star, RefreshCw, ShieldCheck, Loader2 } from "lucide-react";
import { MOCK_GAMES, MOCK_PROFILES, MOCK_EVENTS } from "@/lib/mock-data";
import { ALL_SPORTS } from "@/lib/sports-data";
import { ALL_BARS, Bar } from "@/lib/bars-data";
import { aiEventDescriptionGenerator } from "@/ai/flows/ai-event-description-generator";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const LocationMap = dynamic(() => import("@/components/LocationMap"), { 
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-2xl flex items-center justify-center text-muted-foreground">Chargement de la carte...</div>
});

function NewEventForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const user = MOCK_PROFILES[0];
  const isAdmin = user.role === 'administrateur';
  
  const editId = searchParams.get('edit');
  const duplicateId = searchParams.get('duplicate');
  const isEditing = !!editId;
  const isDuplicating = !!duplicateId;

  const [isGenerating, setIsGenerating] = useState(false);
  const [activityType, setActivityType] = useState<"jeu" | "sport">("jeu");
  const [venueChoice, setVenueChoice] = useState<"predefined" | "custom">("predefined");
  const [searchTerm, setSearchTerm] = useState("");
  const [barSearchTerm, setBarSearchTerm] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openBarSearch, setOpenBarSearch] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    game_id: "",
    sport_name: "",
    location_name: "",
    address: "",
    commune: "Toulouse",
    date: "",
    start_time: "",
    registration_deadline: "",
    meeting_details: "",
    public_transport: "",
    description: "",
    max_participants: "4",
    additionalDetails: "",
    cover_url: "",
    is_recurring: false,
    recurrence_type: "weekly",
    recurrence_end_date: "",
  });

  useEffect(() => {
    const targetId = editId || duplicateId;
    if (targetId) {
      const existing = MOCK_EVENTS.find(e => e.id === targetId);
      if (existing) {
        setFormData({
          title: isDuplicating ? `Copie de ${existing.title}` : existing.title,
          game_id: existing.game_id || "",
          sport_name: existing.sport_name || "",
          location_name: existing.location_name,
          address: existing.address,
          commune: "Toulouse",
          date: isDuplicating ? "" : existing.event_date,
          start_time: existing.start_time,
          registration_deadline: "",
          meeting_details: "",
          public_transport: "",
          description: existing.description,
          max_participants: existing.max_participants.toString(),
          additionalDetails: "",
          cover_url: existing.cover_url,
          is_recurring: false,
          recurrence_type: "weekly",
          recurrence_end_date: "",
        });
        if (existing.sport_name) setActivityType("sport");
      }
    }
  }, [editId, duplicateId, isDuplicating]);

const filteredItems = useMemo(() => {
    if (activityType === "jeu") {
      return MOCK_GAMES.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Sécurité : on s'assure que SPORTS_DATA existe bien avant de manipuler
      const sportsSource = ALL_SPORTS || [];
      const favs = user?.favorite_sports || [];
      const searchLower = searchTerm.toLowerCase();

      // 1. Filtrer les Favoris
      const mySports = sportsSource.flatMap(cat => cat.items || [])
        .filter(name => name.toLowerCase().includes(searchLower) && favs.includes(name))
        .map(name => ({ id: name.toLowerCase().replace(/\s+/g, '-'), title: name }));

      // 2. Filtrer l'arborescence complète (en excluant les favoris)
      const categorizedSports = sportsSource.map(cat => ({
        ...cat,
        filteredItems: (cat.items || []).filter(name => 
          name.toLowerCase().includes(searchLower) && !favs.includes(name)
        )
      })).filter(cat => cat.filteredItems.length > 0);

      return { mySports, categorizedSports };
    }
  }, [activityType, searchTerm, user?.favorite_sports]);

  const selectedItemTitle = useMemo(() => {
    if (activityType === "jeu") {
      return MOCK_GAMES.find(g => g.id === formData.game_id)?.title || "Choisir un jeu...";
    }
    return formData.sport_name || "Choisir un sport...";
  }, [activityType, formData.game_id, formData.sport_name]);

  const handleBarSelect = (bar: Bar) => {
    setFormData(prev => ({
      ...prev,
      location_name: bar.name,
      address: bar.address,
      commune: bar.city
    }));
    setOpenBarSearch(false);
  };

  const handleAiDescription = async () => {
    if (!formData.location_name || !formData.date) {
      toast({ title: "Informations manquantes", description: "Indiquez un lieu et une date.", variant: "destructive" });
      return;
    }
    setIsGenerating(true);
    try {
      const activityTitle = activityType === "jeu" 
        ? MOCK_GAMES.find(g => g.id === formData.game_id)?.title 
        : formData.sport_name;
      const result = await aiEventDescriptionGenerator({
        gameTitle: activityTitle,
        locationName: formData.location_name,
        date: formData.date,
        additionalDetails: formData.additionalDetails
      });
      setFormData(prev => ({ ...prev, description: result.description }));
    } catch (error) {
      toast({ title: "Erreur IA", description: "Échec de la génération.", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const validateRecurrence = () => {
    if (!formData.is_recurring) return true;
    if (!formData.recurrence_end_date) {
      toast({ title: "Fin de récurrence", description: "Veuillez choisir une date de fin.", variant: "destructive" });
      return false;
    }
    if (!isAdmin) {
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 1);
      const chosenEndDate = new Date(formData.recurrence_end_date);
      if (chosenEndDate > maxDate) {
        toast({ title: "Limite dépassée", description: "La récurrence est limitée à 1 an pour les membres.", variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateRecurrence()) return;
    toast({ 
      title: isEditing ? "Événement mis à jour" : "Événement créé", 
      description: formData.is_recurring ? "Les occurrences ont été planifiées." : "Votre sortie est en ligne !" 
    });
    router.push("/events");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card className="border-border/50 overflow-hidden">
        <div className="h-48 bg-muted relative flex items-center justify-center">
          {formData.cover_url ? (
            <img src={formData.cover_url} alt="Cover preview" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center space-y-2">
              <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">Photo de couverture</p>
            </div>
          )}
        </div>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <Input 
              placeholder="Lien de la photo..." 
              value={formData.cover_url}
              onChange={(e) => setFormData(prev => ({ ...prev, cover_url: e.target.value }))}
              className="rounded-xl"
            />
            <Button type="button" variant="outline" onClick={() => setFormData(prev => ({ ...prev, cover_url: `https://picsum.photos/seed/${Date.now()}/800/400` }))} className="rounded-xl gap-2">
              <Camera className="h-4 w-4" /> Aléatoire
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="font-headline">Activité</CardTitle></CardHeader>
        <CardContent>
          <RadioGroup value={activityType} onValueChange={(val) => setActivityType(val as "jeu" | "sport")} className="flex gap-8">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="jeu" id="type-jeu" />
              <Label htmlFor="type-jeu" className="font-bold cursor-pointer">Jeux</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sport" id="type-sport" />
              <Label htmlFor="type-sport" className="font-bold cursor-pointer">Sport</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label>Rechercher {activityType === "jeu" ? "un jeu" : "un sport"}</Label>
            <Popover open={openSearch} onOpenChange={setOpenSearch}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between h-12 rounded-xl">
                  {selectedItemTitle}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
<PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
  <div className="flex items-center border-b px-3 h-12">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      placeholder="Chercher..."
      className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <ScrollArea className="h-72">
    <div className="p-1">
      {activityType === "jeu" ? (
        Array.isArray(filteredItems) && filteredItems.map((item: any, index: number) => (
          <div 
            key={`game-${item.id}-${index}`} 
            className="p-2 hover:bg-muted cursor-pointer rounded-md text-sm" 
            onClick={() => { setFormData(prev => ({ ...prev, game_id: item.id })); setOpenSearch(false); }}
          >
            {item.title}
          </div>
        ))
) : (
      <>
        {/* SECTION FAVORIS */}
        {(filteredItems as any).mySports.length > 0 && (
          <div className="mb-4">
            <div className="px-2 py-1.5 text-[10px] font-black uppercase text-primary bg-primary/5 rounded flex items-center gap-2 mb-2">
              <Star className="h-3 w-3 fill-primary" /> Mes Sports Favoris
            </div>
            {(filteredItems as any).mySports.map((sport: any, idx: number) => (
              <div 
                key={`fav-${sport.id}-${idx}`} 
                className="p-2 ml-2 hover:bg-primary/10 cursor-pointer rounded-md text-sm font-bold text-primary" 
                onClick={() => { setFormData(prev => ({ ...prev, sport_name: sport.title })); setOpenSearch(false); }}
              >
                {sport.title}
              </div>
            ))}
          </div>
        )}

        {/* SECTION ARBORESCENCE */}
        {(filteredItems as any).categorizedSports.map((cat: any) => (
          <div key={cat.category} className="mb-4">
            {/* Header de la Catégorie */}
            <div className={cn(
              "px-2 py-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider opacity-70",
              cat.color
            )}>
              <cat.icon className="h-3.5 w-3.5" />
              {cat.category}
            </div>
            
            {/* Liste des sports dans cette catégorie */}
            <div className="ml-4 border-l border-muted mt-1 pl-1">
              {cat.filteredItems.map((name: string, idx: number) => (
                <div 
                  key={`${cat.category}-${idx}`} 
                  className="p-2 hover:bg-muted cursor-pointer rounded-md text-sm transition-colors" 
                  onClick={() => { 
                    setFormData(prev => ({ ...prev, sport_name: name })); 
                    setOpenSearch(false); 
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    )}
  </div>
</ScrollArea>
</PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Titre de l'événement</Label>
            <Input id="title" required value={formData.title} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} className="h-12 rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Participants max</Label>
              <Input type="number" min="1" value={formData.max_participants} onChange={(e) => setFormData(prev => ({ ...prev, max_participants: e.target.value }))} className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Input type="date" required value={formData.date} onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))} className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>Heure de début</Label>
              <Input type="time" required value={formData.start_time} onChange={(e) => setFormData(prev => ({ ...prev, start_time: e.target.value }))} className="h-12 rounded-xl" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-accent/5">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="font-headline flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-accent" /> Événement récurrent
            </CardTitle>
            <CardDescription>Planifiez automatiquement plusieurs sessions.</CardDescription>
          </div>
          <Switch 
            checked={formData.is_recurring} 
            onCheckedChange={(val) => setFormData(prev => ({ ...prev, is_recurring: val }))} 
          />
        </CardHeader>
        {formData.is_recurring && (
          <CardContent className="space-y-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Fréquence</Label>
                <Select value={formData.recurrence_type} onValueChange={(val) => setFormData(prev => ({ ...prev, recurrence_type: val }))}>
                  <SelectTrigger className="h-12 rounded-xl bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Chaque jour</SelectItem>
                    <SelectItem value="weekly">Chaque semaine</SelectItem>
                    <SelectItem value="monthly">Chaque mois</SelectItem>
                    <SelectItem value="yearly">Chaque année</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Répéter jusqu'au</Label>
                <Input 
                  type="date" 
                  required 
                  value={formData.recurrence_end_date} 
                  onChange={(e) => setFormData(prev => ({ ...prev, recurrence_end_date: e.target.value }))} 
                  className="h-12 rounded-xl bg-white" 
                />
                {isAdmin ? (
                  <div className="flex items-center gap-1 text-[10px] font-black text-primary uppercase">
                    <ShieldCheck className="h-3 w-3" /> Privilège Admin : Récurrence illimitée activée
                  </div>
                ) : (
                  <p className="text-[10px] font-bold text-accent uppercase">Max 1 an pour les membres</p>
                )}
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="font-headline">Lieu</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {activityType === "jeu" && (
            <RadioGroup value={venueChoice} onValueChange={(val) => setVenueChoice(val as "predefined" | "custom")} className="flex gap-4 mb-4">
              <div className="flex items-center space-x-2"><RadioGroupItem value="predefined" id="v1" /><Label htmlFor="v1">Bar partenaire</Label></div>
              <div className="flex items-center space-x-2"><RadioGroupItem value="custom" id="v2" /><Label htmlFor="v2">Lieu libre</Label></div>
            </RadioGroup>
          )}

          {activityType === "jeu" && venueChoice === "predefined" ? (
            <Popover open={openBarSearch} onOpenChange={setOpenBarSearch}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-primary/30">
                  {formData.location_name || "Sélectionner un bar..."}
                  <Building2 className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                <div className="p-3 border-b"><Input placeholder="Chercher un bar..." value={barSearchTerm} onChange={(e) => setBarSearchTerm(e.target.value)} /></div>
                <ScrollArea className="h-48">
                  <div className="p-1">
                    <div className="p-2 font-bold text-primary cursor-pointer border-b mb-1" onClick={() => { setVenueChoice("custom"); setOpenBarSearch(false); }}>+ Lieu personnalisé</div>
                    {ALL_BARS.filter(b => b.name.toLowerCase().includes(barSearchTerm.toLowerCase())).map(bar => (
                      <div key={bar.name} className="p-2 hover:bg-muted cursor-pointer rounded-md text-sm" onClick={() => handleBarSelect(bar)}>
                        <div className="font-bold">{bar.name}</div>
                        <div className="text-[10px] text-muted-foreground">{bar.address}, {bar.city}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="space-y-4">
              <Input placeholder="Nom du lieu..." required value={formData.location_name} onChange={(e) => setFormData(prev => ({ ...prev, location_name: e.target.value }))} className="h-12 rounded-xl" />
              <Input placeholder="Adresse..." required value={formData.address} onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} className="h-12 rounded-xl" />
            </div>
          )}
          <LocationMap address={`${formData.address}, ${formData.commune}`} />
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div><CardTitle className="font-headline flex items-center gap-2">Assistant IA <Sparkles className="h-4 w-4 text-primary" /></CardTitle></div>
          <Button type="button" variant="outline" size="sm" onClick={handleAiDescription} disabled={isGenerating} className="font-bold bg-white">
            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Générer
          </Button>
        </CardHeader>
        <CardContent><Textarea placeholder="Détails pour l'IA..." value={formData.additionalDetails} onChange={(e) => setFormData(prev => ({ ...prev, additionalDetails: e.target.value }))} className="rounded-xl" /></CardContent>
      </Card>

      <div className="space-y-2">
        <Label>Description finale</Label>
        <Textarea required rows={6} value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} className="rounded-xl" />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="ghost" type="button" onClick={() => router.back()}>Annuler</Button>
        <Button size="lg" type="submit" className="font-bold rounded-full h-14 px-10">
          {isEditing ? "Enregistrer" : "Créer la sortie"}
        </Button>
      </div>
    </form>
  );
}

export default function NewEventPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <Suspense fallback={<div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
          <div className="mb-12 space-y-2">
            <h1 className="text-4xl font-headline font-bold">
              Organiser une sortie
            </h1>
            <p className="text-muted-foreground">
              Laissez-vous guider pour organiser votre activité. Vous pouvez rendre cet événement récurrent (quotidien, hebdomadaire, mensuel ou annuel).
            </p>
          </div>
          <NewEventForm />
        </Suspense>
      </main>
    </div>
  );
}
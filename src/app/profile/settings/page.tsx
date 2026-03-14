
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Camera, User, Save, Loader2, Info, Heart, ShieldCheck, Gamepad2, Trophy, Bike, Sparkles, MapPin, Globe, AlertTriangle, Archive } from "lucide-react";
import { MOCK_PROFILES } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function AccountSettingsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const user = MOCK_PROFILES[0];
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    pseudo: user.username,
    nom: user.nom || '',
    prenom: user.prenom || '',
    description: user.bio || '',
    email: user.email || '',
    telephone: user.telephone || '',
    genre: user.genre || 'homme',
    ville: user.ville || 'Toulouse',
    departement: user.departement || '',
    region: user.region || '',
    pays: user.pays || 'France',
    langues_parlees: user.langues_parlees || 'Français',
    etudiant: user.etudiant || false,
    organisateur_opt: user.organisateur_opt || false,
    statut_social: user.statut_social || 'joueur',
    vegetarien: user.vegetarien || false,
    vegan: user.vegan || false,
    cherche_emploi: user.cherche_emploi || false,
    cherche_logement: user.cherche_logement || false,
    cherche_covoiturage: user.cherche_covoiturage || false,
    est_majeur: true,
    avatar_url: user.avatar_url,
    sport: user.sport_bio || '',
    musique: user.musique || '',
    jeux: user.jeux_bio || '',
    cuisine: user.cuisine || '',
    danse: user.danse || '',
    loisirs_divers: user.loisirs_divers || '',
    film: user.film || '',
    programmes_tele: user.programmes_tele || '',
    livres: user.livres || '',
    voyages: user.voyages || '',
    animaux: user.animaux || '',
    jaime: user.jaime || '',
    jenaimepas: user.jenaimepas || '',
    environnement: user.environnement || '',
    centres_interets: user.centres_interets || '',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({ title: "Profil mis à jour", description: "Vos modifications ont été enregistrées avec succès." });
      router.push("/profile");
    }, 1500);
  };

  const handleArchiveAccount = () => {
    toast({ title: "Compte archivé", description: "Votre profil a été désactivé. Vous pouvez contacter le support pour le réactiver.", variant: "destructive" });
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl font-headline font-black flex items-center gap-4">
            <Link href="/profile" className="hover:text-primary transition-colors">
              <ArrowLeft className="h-8 w-8" />
            </Link>
            Configuration du Profil
          </h1>
          <p className="text-muted-foreground text-lg">Personnalisez votre expérience et rejoignez la communauté.</p>
        </div>

        <form onSubmit={handleSave} className="space-y-12 pb-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1 rounded-[3rem] border-2 shadow-sm bg-white overflow-hidden">
              <div className="h-32 bg-primary flex items-center justify-center">
                 <div className="relative">
                   <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                     <AvatarImage src={formData.avatar_url} />
                     <AvatarFallback>U</AvatarFallback>
                   </Avatar>
                   <Button size="icon" className="absolute -bottom-2 -right-2 rounded-full h-10 w-10 border-2 border-white shadow-lg">
                     <Camera className="h-5 w-5" />
                   </Button>
                 </div>
              </div>
              <CardContent className="pt-12 space-y-6">
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Mon Statut Social</Label>
                  <Select value={formData.statut_social} onValueChange={(val) => setFormData(p => ({ ...p, statut_social: val as any }))}>
                    <SelectTrigger className="h-12 rounded-xl border-2">
                      <SelectValue placeholder="Choisir un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="joueur">Joueur</SelectItem>
                      <SelectItem value="organisateur">Organisateur</SelectItem>
                      <SelectItem value="membre">Membre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="majeur" checked={formData.est_majeur} onCheckedChange={(val) => setFormData(p => ({ ...p, est_majeur: !!val }))} />
                    <Label htmlFor="majeur" className="font-bold">Je certifie être majeur(e)</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="etudiant" checked={formData.etudiant} onCheckedChange={(val) => setFormData(p => ({ ...p, etudiant: !!val }))} />
                    <Label htmlFor="etudiant" className="font-bold">Je suis étudiant(e)</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="organisateur" checked={formData.organisateur_opt} onCheckedChange={(val) => setFormData(p => ({ ...p, organisateur_opt: !!val }))} />
                    <Label htmlFor="organisateur" className="font-bold">Je souhaite organiser des sorties</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 rounded-[3rem] border-2 shadow-sm bg-white">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-black flex items-center gap-2">
                  <User className="h-6 w-6 text-secondary" /> Identité & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Identifiant</Label>
                  <Input value={formData.pseudo} onChange={(e) => setFormData(p => ({ ...p, pseudo: e.target.value }))} className="h-12 rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Genre</Label>
                  <Select value={formData.genre} onValueChange={(val) => setFormData(p => ({ ...p, genre: val }))}>
                    <SelectTrigger className="h-12 rounded-xl border-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="homme">Homme</SelectItem>
                      <SelectItem value="femme">Femme</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Prénom</Label>
                  <Input value={formData.prenom} onChange={(e) => setFormData(p => ({ ...p, prenom: e.target.value }))} className="h-12 rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Nom</Label>
                  <Input value={formData.nom} onChange={(e) => setFormData(p => ({ ...p, nom: e.target.value }))} className="h-12 rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Email</Label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="h-12 rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label className="font-black text-xs uppercase text-muted-foreground">Téléphone</Label>
                  <Input value={formData.telephone} onChange={(e) => setFormData(p => ({ ...p, telephone: e.target.value }))} className="h-12 rounded-xl border-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-[3rem] border-2 shadow-sm bg-white">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-2xl font-black flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent" /> Localisation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label className="font-black text-xs uppercase text-muted-foreground">Ville</Label>
                <Input value={formData.ville} onChange={(e) => setFormData(p => ({ ...p, ville: e.target.value }))} className="h-12 rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <Label className="font-black text-xs uppercase text-muted-foreground">Département</Label>
                <Input value={formData.departement} onChange={(e) => setFormData(p => ({ ...p, departement: e.target.value }))} className="h-12 rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <Label className="font-black text-xs uppercase text-muted-foreground">Région</Label>
                <Input value={formData.region} onChange={(e) => setFormData(p => ({ ...p, region: e.target.value }))} className="h-12 rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <Label className="font-black text-xs uppercase text-muted-foreground">Pays</Label>
                <Input value={formData.pays} onChange={(e) => setFormData(p => ({ ...p, pays: e.target.value }))} className="h-12 rounded-xl border-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[3rem] border-2 shadow-sm bg-white">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-2xl font-black flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" /> Présentation & Goûts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-8">
              <div className="space-y-2">
                <Label className="font-black text-xs uppercase text-muted-foreground">Description personnelle</Label>
                <Textarea value={formData.description} onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))} className="min-h-[120px] rounded-2xl border-2 p-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProfileField label="Sport" icon={Bike} value={formData.sport} onChange={(v) => setFormData(p => ({ ...p, sport: v }))} />
                <ProfileField label="Musique" icon={Sparkles} value={formData.musique} onChange={(v) => setFormData(p => ({ ...p, musique: v }))} />
                <ProfileField label="Jeux" icon={Gamepad2} value={formData.jeux} onChange={(v) => setFormData(p => ({ ...p, jeux: v }))} />
                <ProfileField label="Cuisine" icon={Heart} value={formData.cuisine} onChange={(v) => setFormData(p => ({ ...p, cuisine: v }))} />
                <ProfileField label="Danse" icon={Sparkles} value={formData.danse} onChange={(v) => setFormData(p => ({ ...p, danse: v }))} />
                <ProfileField label="Voyages" icon={Globe} value={formData.voyages} onChange={(v) => setFormData(p => ({ ...p, voyages: v }))} />
                <ProfileField label="J'aime" icon={Heart} value={formData.jaime} onChange={(v) => setFormData(p => ({ ...p, jaime: v }))} />
                <ProfileField label="Je n'aime pas" icon={Heart} value={formData.jenaimepas} onChange={(v) => setFormData(p => ({ ...p, jenaimepas: v }))} />
                <ProfileField label="Centres d'intérêts" icon={Globe} value={formData.centres_interets} onChange={(v) => setFormData(p => ({ ...p, centres_interets: v }))} />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[3rem] border-2 shadow-sm bg-white">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-2xl font-black flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600" /> Je recherche...
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-2xl">
                 <Checkbox id="emploi" checked={formData.cherche_emploi} onCheckedChange={(val) => setFormData(p => ({ ...p, cherche_emploi: !!val }))} />
                 <Label htmlFor="emploi" className="font-bold">Cherche Emploi</Label>
               </div>
               <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-2xl">
                 <Checkbox id="logement" checked={formData.cherche_logement} onCheckedChange={(val) => setFormData(p => ({ ...p, cherche_logement: !!val }))} />
                 <Label htmlFor="logement" className="font-bold">Cherche Logement</Label>
               </div>
               <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-2xl">
                 <Checkbox id="covoit" checked={formData.cherche_covoiturage} onCheckedChange={(val) => setFormData(p => ({ ...p, cherche_covoiturage: !!val }))} />
                 <Label htmlFor="covoit" className="font-bold">Cherche Covoiturage</Label>
               </div>
            </CardContent>
          </Card>

          {/* Zone Danger : Archivage */}
          <Card className="rounded-[3rem] border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-2xl font-black flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-6 w-6" /> Zone de danger
              </CardTitle>
              <CardDescription>Actions irréversibles sur votre compte.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-bold">Archiver mon compte</p>
                <p className="text-sm text-muted-foreground">Désactive votre profil et le rend invisible pour la communauté.</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="rounded-full gap-2">
                    <Archive className="h-4 w-4" /> Archiver mon profil
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="rounded-[2.5rem] p-8">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-black">Êtes-vous absolument sûr ?</AlertDialogTitle>
                    <AlertDialogDescription className="text-lg">
                      Cette action désactivera votre compte. Vous ne pourrez plus vous connecter ni participer aux sorties. Vos données resteront archivées conformément à la charte.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="mt-6">
                    <AlertDialogCancel className="rounded-full font-bold h-12">Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={handleArchiveAccount} className="rounded-full font-black bg-destructive h-12">
                      Oui, archiver mon compte
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-4 pt-12">
            <Button variant="ghost" type="button" asChild className="rounded-full font-bold h-14 px-8">
              <Link href="/profile">Annuler</Link>
            </Button>
            <Button type="submit" disabled={isSaving} className="rounded-full h-16 px-12 font-black text-xl shadow-xl shadow-primary/20 gap-3">
              {isSaving ? <Loader2 className="h-6 w-6 animate-spin" /> : <Save className="h-6 w-6" />}
              Enregistrer mon profil
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

function ProfileField({ label, icon: Icon, value, onChange }: { label: string, icon: any, value: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <Label className="font-black text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
        <Icon className="h-3 w-3" /> {label}
      </Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={`Ex: ${label}...`} className="h-12 rounded-xl border-2" />
    </div>
  );
}


"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, Clock, ArrowLeft, MessageSquare, Star, Send, ShieldCheck, AlertTriangle, Trash2, Camera, MoreVertical, Edit2, Copy, RefreshCw, Settings2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { MOCK_EVENTS, MOCK_GAMES, MOCK_PROFILES } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { isBefore, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const [isJoined, setIsJoined] = useState(false);
  const [comment, setComment] = useState("");
  const [isPast, setIsPast] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const currentUser = MOCK_PROFILES[0]; // Simulation Lucas_Admin
  const event = MOCK_EVENTS.find(e => e.id === id);
  const game = MOCK_GAMES.find(g => g.id === event?.game_id);
  const creator = MOCK_PROFILES.find(p => p.id === event?.creator_id);
  
  const isOwner = event?.creator_id === currentUser.id;

  useEffect(() => {
    if (event) {
      const eventDateTime = parseISO(`${event.event_date}T${event.start_time}`);
      setIsPast(!isBefore(new Date(), eventDateTime));
    }
  }, [event]);

  if (!event) return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-20 space-y-4">
        <AlertTriangle className="h-12 w-12 text-muted-foreground opacity-20" />
        <h2 className="text-2xl font-black">Événement introuvable</h2>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/events">Retour aux sorties</Link>
        </Button>
      </div>
    </div>
  );

  const handleJoin = () => {
    if (isPast) {
      toast({ title: "Événement terminé", description: "Vous ne pouvez plus rejoindre cette sortie.", variant: "destructive" });
      return;
    }
    setIsJoined(!isJoined);
    toast({
      title: isJoined ? "Désinscription" : "Inscription réussie !",
      description: isJoined ? "Vous avez quitté la session." : "Préparez-vous à jouer !",
    });
  };

  const handlePostComment = () => {
    if (!comment.trim()) return;
    toast({
      title: "Commentaire posté",
      description: "Merci pour votre participation !",
    });
    setComment("");
  };

  const handleReport = (type: string) => {
    toast({
      title: "Signalement envoyé",
      description: `Ce ${type} a été signalé aux modérateurs.`,
    });
  };

  const handleDuplicate = () => {
    toast({ title: "Duplication", description: "Pré-remplissage du formulaire..." });
    router.push(`/events/new?duplicate=${event.id}`);
  };

  const handleEdit = () => {
    router.push(`/events/new?edit=${event.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Cover Hero */}
        <div className="relative h-[400px] w-full bg-muted">
          <Image
            src={event.cover_url}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
          
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <Button variant="secondary" size="icon" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 border-none shadow-lg" onClick={() => handleReport('événement')}>
              <AlertTriangle className="h-5 w-5 text-white" />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <Button variant="outline" size="sm" asChild className="rounded-full bg-background/50 backdrop-blur-md text-foreground border-none">
                  <Link href="/events"><ArrowLeft className="mr-2 h-4 w-4" /> Retour à la liste</Link>
                </Button>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-white border-none shadow-lg">{game?.category || "Session"}</Badge>
                    {isPast && <Badge variant="destructive" className="animate-pulse shadow-lg">SORTIE PASSÉE</Badge>}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-headline font-black text-white drop-shadow-xl">{event.title}</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button 
                  size="lg" 
                  onClick={handleJoin} 
                  variant={isJoined ? "outline" : "default"}
                  disabled={isPast}
                  className="rounded-full font-black h-16 px-10 shadow-2xl text-lg hover:scale-105 transition-transform"
                >
                  {isPast ? "Sortie terminée" : (isJoined ? "Se désinscrire" : "Rejoindre la table")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-headline font-black">Description</h2>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white border-2 border-muted/50 shadow-sm">
                  <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-wrap font-medium">
                    {event.description}
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-headline font-black">L'Activité</h2>
                {game ? (
                  <div className="flex flex-col md:flex-row gap-8 p-8 rounded-[3rem] bg-secondary/5 border-2 border-secondary/20 shadow-inner">
                    <div className="h-32 w-32 shrink-0 bg-white rounded-[2rem] flex items-center justify-center border-2 border-secondary/20 shadow-md">
                      <Users className="h-12 w-12 text-secondary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-3xl font-black text-foreground">{game.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-medium italic">"{game.description}"</p>
                      <div className="flex flex-wrap items-center gap-3 pt-4">
                        <Badge variant="outline" className="gap-2 h-10 px-5 rounded-2xl border-secondary/40 bg-white font-bold text-base">
                          <Users className="h-5 w-5 text-secondary" /> {game.min_players}-{game.max_players} Joueurs
                        </Badge>
                        <Badge variant="outline" className="h-10 px-5 rounded-2xl border-secondary/40 bg-white font-bold text-base">{game.category}</Badge>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 rounded-[3rem] bg-muted/10 border-2 border-dashed border-muted flex flex-col items-center justify-center text-center space-y-4">
                    <div className="p-4 bg-white rounded-full shadow-sm">
                      <Users className="h-10 w-10 text-muted-foreground/40" />
                    </div>
                    <p className="text-xl font-bold text-muted-foreground">Le choix de l'activité se fera directement sur place !</p>
                  </div>
                )}
              </section>

              <Separator className="my-12" />

              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-headline font-black flex items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    Discussion
                  </h2>
                </div>
                
                <div className="flex gap-4 p-8 bg-muted/5 rounded-[2.5rem] border-2 border-muted/50">
                  <Avatar className="h-14 w-14 border-4 border-white shadow-md shrink-0">
                    <AvatarImage src={currentUser.avatar_url} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <Textarea 
                      placeholder="Une question ? Un message pour les participants ?" 
                      className="min-h-[120px] rounded-3xl border-2 p-6 bg-white text-lg focus:ring-primary shadow-inner"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="rounded-full gap-2 border-2 border-dashed h-10 px-6 font-bold">
                        <Camera className="h-4 w-4" /> Photo
                      </Button>
                      <Button onClick={handlePostComment} className="rounded-full gap-2 font-black px-10 h-12 shadow-lg">
                        <Send className="h-5 w-5" /> Envoyer
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex gap-4 p-6 rounded-[2.5rem] bg-white border-2 border-transparent hover:border-primary/10 hover:shadow-md transition-all group relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarImage src="https://picsum.photos/seed/user3/100/100" />
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-lg">ToulouseMeeple</span>
                          <span className="text-xs text-muted-foreground font-black uppercase tracking-widest opacity-60">Il y a 2 jours</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleReport('commentaire')}>
                          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">J'ai trop hâte ! Ça fait des années que je n'ai pas joué à Catan.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Sidebar Info */}
            <div className="space-y-8">
              
              {/* BOUTONS DE GESTION (Propriétaire) */}
              {isOwner && (
                <Card className="rounded-[3rem] border-4 border-primary/20 shadow-xl overflow-hidden bg-primary/5">
                  <CardHeader className="bg-primary/10 border-b-2 border-primary/10">
                    <CardTitle className="text-xl font-black flex items-center gap-2">
                      <Settings2 className="h-5 w-5 text-primary" />
                      Gestion de ma sortie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <Button 
                      onClick={handleEdit} 
                      disabled={isPast}
                      className="w-full h-14 rounded-2xl font-black text-lg gap-3 shadow-lg shadow-primary/20"
                    >
                      <Edit2 className="h-6 w-6" />
                      Modifier
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleDuplicate}
                      className="w-full h-14 rounded-2xl font-black text-lg gap-3 border-2 border-primary text-primary bg-white hover:bg-primary/5"
                    >
                      <Copy className="h-6 w-6" />
                      Dupliquer
                    </Button>
                    <div className="p-4 bg-white/50 rounded-2xl border-2 border-dashed border-primary/20">
                      <p className="text-xs font-bold text-primary flex items-center gap-2 uppercase tracking-widest">
                        <RefreshCw className="h-3 w-3" /> Info Récurrence
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium italic">
                        Utilisez le bouton "Modifier" pour rendre cette sortie hebdomadaire, quotidienne ou mensuelle.
                      </p>
                    </div>
                    <Button variant="ghost" className="w-full text-destructive font-bold gap-2 hover:bg-red-50 mt-2">
                      <Trash2 className="h-4 w-4" /> Supprimer la sortie
                    </Button>
                  </CardContent>
                </Card>
              )}

              <div className="p-10 rounded-[3rem] bg-white border-2 border-muted/50 shadow-sm space-y-10">
                <h3 className="font-headline font-black text-3xl">Détails logistiques</h3>
                <div className="space-y-8">
                  <DetailItem icon={Calendar} label="Date" value={event.event_date} />
                  <DetailItem icon={Clock} label="Horaire" value={`${event.start_time} - ${event.end_time}`} />
                  <DetailItem icon={MapPin} label="Lieu" value={event.location_name} subValue={event.address} />
                  <DetailItem icon={Users} label="Capacité" value={`1 / ${event.max_participants} places`} progress={(1 / event.max_participants) * 100} />
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-white border-2 border-muted/50 shadow-sm space-y-8 text-center">
                <h3 className="font-headline font-black text-2xl">L'Organisateur</h3>
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24 border-8 border-primary/5 shadow-inner">
                    <AvatarImage src={creator?.avatar_url} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-black text-2xl flex items-center justify-center gap-2">
                      {creator?.username}
                      <ShieldCheck className="h-6 w-6 text-blue-500 fill-blue-500/10" />
                    </p>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground rounded-full px-4 font-black text-[10px] uppercase tracking-widest">Hôte Vérifié</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-primary/5 rounded-[2rem] border border-primary/10">
                  <Star className="h-6 w-6 text-primary fill-primary" />
                  <span className="font-black text-2xl">4.9</span>
                  <span className="text-muted-foreground text-sm font-bold">(24 évals)</span>
                </div>
                <Button variant="outline" className="w-full rounded-full font-black border-2 h-12 hover:bg-primary/5 transition-colors" onClick={() => handleReport('membre')}>
                  Voir le profil complet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DetailItem({ icon: Icon, label, value, subValue, progress }: { icon: any, label: string, value: string, subValue?: string, progress?: number }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
        <Icon className="h-7 w-7" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">{label}</p>
        <p className="font-black text-xl leading-tight text-foreground truncate">{value}</p>
        {subValue && <p className="text-sm text-muted-foreground font-medium mt-1 leading-snug">{subValue}</p>}
        {progress !== undefined && (
          <div className="mt-3 h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}

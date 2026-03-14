
import Link from "next/link";
import Image from "next/image";
import { Dice6, Calendar, Users, ArrowRight, Puzzle, Sparkles, Gamepad2, Package, Camera, Trophy, Activity, Heart, Zap, Bike, Beer, ShoppingBag, Library, PartyPopper, GlassWater, MessageSquare, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import EventCard from "@/components/EventCard";
import { MOCK_EVENTS, MOCK_GAMES } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const SPORTS_LIST = [
  { name: "Football / Futsal", icon: Trophy, color: "text-primary" },
  { name: "Basketball", icon: DribbbleIcon, color: "text-secondary" },
  { name: "Tennis / Padel", icon: Activity, color: "text-accent" },
  { name: "Running / Trail", icon: Zap, color: "text-primary" },
  { name: "Natation", icon: Heart, color: "text-accent" },
  { name: "Yoga / Fitness", icon: Sparkles, color: "text-secondary" },
  { name: "Cyclisme", icon: Bike, color: "text-chart-2" },
  { name: "Sports de Combat", icon: Zap, color: "text-destructive" },
];

const RESOURCE_LINKS = [
  { name: "Magasins de Jeux", href: "/magasins-de-jeux", icon: ShoppingBag, color: "bg-accent/10 text-accent" },
  { name: "Magasins de jouets", href: "/magasins-de-jouets", icon: Package, color: "bg-orange-100 text-orange-600" },
  { name: "Bars à jeux", href: "/bars-a-jeux", icon: Beer, color: "bg-primary/10 text-primary" },
  { name: "Bars avec jeux", href: "/bars-avec-jeux", icon: GlassWater, color: "bg-indigo-100 text-indigo-600" },
  { name: "Associations", href: "/associations-de-jeux", icon: Users, color: "bg-primary/10 text-primary" },
  { name: "Ludothèques", href: "/ludotheques", icon: Library, color: "bg-secondary/20 text-secondary" },
  { name: "Festivals", href: "/festivals", icon: PartyPopper, color: "bg-primary/10 text-primary" },
];

function DribbbleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.83c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 13.5 4.27 20.42" />
    </svg>
  );
}

export default function Home() {
  const featuredEvents = MOCK_EVENTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-[#FFF9F2]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 rotate-12 text-primary">
            <Dice6 size={120} />
          </div>
          <div className="absolute bottom-20 right-10 -rotate-12 text-accent">
            <Puzzle size={120} />
          </div>
          <div className="absolute top-40 right-20 rotate-45 text-secondary">
            <Gamepad2 size={100} />
          </div>
          <div className="absolute bottom-40 left-20 -rotate-6 text-destructive/40">
            <svg width="160" height="100" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="10" y="20" width="140" height="60" rx="8" />
              <path d="M10 50h140" />
              <path d="M80 20v60" />
            </svg>
          </div>
        </div>
        
        <div className="container relative z-10 px-4 text-center space-y-8">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary text-foreground font-bold text-sm animate-bounce">
              <Sparkles className="h-4 w-4 text-secondary" />
              La Ville Rose joue et bouge ensemble !
            </div>
            <Badge className="bg-primary text-white font-black px-6 py-2 rounded-full text-md shadow-lg shadow-primary/20">
              GRATUIT ET SANS LIMITE !
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tight max-w-5xl mx-auto leading-[1]">
            Lancez les dés, <span className="text-primary">jouez</span>, rencontrez !
          </h1>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground font-body font-medium leading-relaxed">
              Découvrez les meilleures sorties jeux de société, vidéo ou en réseau à Toulouse. Du JdR épique au petit jeu d'ambiance, trouvez votre table en un clic.
            </p>
            <p className="text-lg md:text-xl text-primary font-bold">
              Trouve des partenaires pour faire du sport ou monter une équipe.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button size="lg" className="rounded-full h-16 px-10 text-xl font-bold shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/events">Explorer les Sorties</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-xl font-bold bg-white/50 backdrop-blur hover:bg-white transition-all" asChild>
              <Link href="/events/new">Créer une sortie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Ludique Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="px-4 py-1 rounded-full text-primary border-primary">Guide Ludique & Social</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-black">Découvrir Toulouse</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Trouvez les meilleures adresses de la ville rose pour jouer, acheter ou faire du sport.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {RESOURCE_LINKS.map((link, i) => (
              <Link key={i} href={link.href} className="group">
                <div className="flex flex-col items-center gap-4 p-6 rounded-[2rem] border-2 border-muted hover:border-primary/30 transition-all hover:bg-primary/5 text-center h-full">
                  <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110", link.color)}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-sm leading-tight">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-muted/5 rounded-t-[3rem] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 text-center md:text-left">
              <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full">Prochaines sorties</Badge>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold">Les sorties du moment</h2>
              <p className="text-lg text-muted-foreground">Il reste encore quelques places, ne soyez pas en retard !</p>
            </div>
            <Button variant="ghost" asChild className="group text-primary hover:text-primary/80">
              <Link href="/events" className="flex items-center gap-2 font-bold text-lg">
                Voir toutes mes sorties
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredEvents.map((event) => {
              const game = MOCK_GAMES.find(g => g.id === event.game_id);
              return <EventCard key={event.id} event={event} gameTitle={game?.title} />;
            })}
          </div>
        </div>
      </section>

      {/* Sports Partners Section */}
      <section className="py-24 bg-[#F8FAF2] border-y border-chart-2/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-chart-2/20 text-chart-2 hover:bg-chart-2/30 border-chart-2/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Nouveau : Sport & Équipes
                </Badge>
                <h2 className="text-4xl md:text-5xl font-headline font-black leading-tight">
                  Trouvez vos partenaires de <span className="text-chart-2">sport</span> à Toulouse
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Envie de faire un Five, un basket au bord du canal, ou une session running à la Prairie des Filtres ? Ne restez plus seul pour vos activités physiques.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SPORTS_LIST.map((sport, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3 group">
                    <div className={cn("p-3 rounded-xl bg-muted/50 group-hover:scale-110 transition-transform", sport.color)}>
                      <sport.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold">{sport.name}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full bg-chart-2 hover:bg-chart-2/90 font-black px-10 h-16 shadow-xl shadow-chart-2/20" asChild>
                <Link href="/events/new?category=sport">Proposer une séance de sport</Link>
              </Button>
            </div>
            
            <div className="flex-1 relative">
               <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                  <Image 
                    src="https://picsum.photos/seed/toulouse-sport/800/800" 
                    alt="Sport à Toulouse" 
                    fill 
                    className="object-cover"
                    data-ai-hint="people sports"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-xl">Rejoins la team Happy People 31 !</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t bg-muted/5 py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-primary p-2 rounded-xl text-primary-foreground">
              <Dice6 className="h-6 w-6" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight">
              Toulouse<span className="text-primary">Play</span><span className="text-accent">Games</span>
            </span>
          </div>
          
          <div className="flex justify-center gap-12">
             <div className="text-center">
                <div className="text-2xl font-bold">1.2k+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Joueurs</div>
             </div>
             <div className="text-center">
                <div className="text-2xl font-bold">450+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Jeux</div>
             </div>
             <div className="text-center">
                <div className="text-2xl font-bold">85+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Sorties/mois</div>
             </div>
          </div>
          <Separator className="max-w-xs mx-auto" />
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors font-bold">À propos</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
            <Link href="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="/charte" className="hover:text-primary transition-colors">Charte d'utilisation</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Nous contacter</Link>
          </div>

          <p className="text-muted-foreground text-sm font-medium">
            © 2026 Happy People 31. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

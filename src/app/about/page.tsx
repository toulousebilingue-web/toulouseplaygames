
"use client";

import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dice6, MessageSquare, Users, Zap, Heart, ShieldAlert, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div className="flex flex-col items-center gap-4">
              <Badge className="bg-primary/20 text-primary border-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                La Ville Rose joue ensemble
              </Badge>
              <Badge className="bg-primary text-white font-black px-8 py-3 rounded-full text-xl shadow-2xl animate-pulse">
                GRATUIT ET SANS LIMITE !
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tight">
              À Propos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Bienvenue sur votre application de sorties à Toulouse !
            </p>
          </div>
        </section>

        {/* Mission Content */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl space-y-20">
            
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-secondary/20 rounded-[2rem] text-secondary">
                  <Zap className="h-10 w-10" />
                </div>
                <h2 className="text-4xl font-headline font-extrabold tracking-tight">Notre Objectif</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 text-xl leading-relaxed text-muted-foreground font-medium">
                  <p>
                    Notre mission est simple : vous permettre de faire des <span className="text-foreground font-bold">sorties jeux à Toulouse</span>, 
                    d'échanger, de vous informer, mais aussi de pouvoir créer vos propres sorties et de vous y inscrire.
                  </p>
                  <p>
                    Trouve des idées de jeux, trouve des joueurs pour jouer à tes jeux préférés, crée tes sorties. 
                    Trouve des personnes pour faire du <span className="text-accent font-bold">sport</span> ou monter des <span className="text-accent font-bold">équipes</span>.
                  </p>
                </div>
                
                <Card className="bg-primary/5 border-primary/20 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-6 shadow-sm border-2">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <Sparkles className="h-12 w-12 text-primary fill-current" />
                  </div>
                  <p className="text-2xl font-black text-primary leading-tight">
                    Tout est entièrement gratuit et sans aucune limite !
                  </p>
                </Card>
              </div>
            </div>

            {/* Discord Section */}
            <Card className="bg-destructive/5 border-destructive/20 rounded-[3rem] overflow-hidden border-2 shadow-sm">
              <div className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="p-8 bg-white rounded-full text-destructive shrink-0 shadow-lg ring-8 ring-destructive/5">
                  <ShieldAlert className="h-14 w-14" />
                </div>
                <div className="space-y-6 text-center md:text-left">
                  <h3 className="text-3xl font-headline font-black text-destructive uppercase tracking-tight">Attention !</h3>
                  <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                    Pour discuter, échanger et organiser vos sorties, nous utilisons <span className="text-foreground font-bold">Discord</span>. 
                    C'est le cœur de notre communauté. Rejoignez-nous pour ne rien manquer !
                  </p>
                  <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 font-black px-10 h-16 text-lg shadow-xl shadow-indigo-200 gap-3 group">
                    <Link href="https://discord.com" target="_blank">
                      <MessageSquare className="h-6 w-6" />
                      Rejoindre le Discord
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex justify-center pt-8">
               <Button variant="ghost" asChild className="rounded-full font-bold text-muted-foreground hover:text-primary">
                  <Link href="/">Retour à l'accueil</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Mini Footer duplication for UX */}
      <footer className="py-12 bg-muted/10 border-t">
         <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm font-medium">
               © 2026 Happy People 31. Tous droits réservés.
            </p>
         </div>
      </footer>
    </div>
  );
}

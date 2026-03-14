
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lightbulb, Send, MessageSquare, ThumbsUp, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SuggestionsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm border border-yellow-200">
            <Lightbulb className="h-4 w-4" />
            Espace Créatif
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">Vos Suggestions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Une idée pour améliorer l'application ? Une nouvelle fonctionnalité ? Dites-nous tout, nous construisons la plateforme ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          
          {/* Formulaire */}
          {!submitted ? (
            <Card className="rounded-[3rem] border-2 shadow-sm overflow-hidden bg-white">
              <CardHeader className="p-8 md:p-12 bg-muted/5 border-b">
                <CardTitle className="text-2xl font-black">Proposer une idée</CardTitle>
                <CardDescription>Décrivez votre suggestion le plus précisément possible.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-black uppercase text-xs tracking-widest text-muted-foreground">Titre de la suggestion</Label>
                  <Input id="title" placeholder="Ex: Ajouter une rubrique Retrogaming" className="h-12 rounded-xl border-2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content" className="font-black uppercase text-xs tracking-widest text-muted-foreground">Description détaillée</Label>
                  <Textarea id="content" placeholder="Expliquez votre idée et pourquoi elle serait utile..." className="min-h-[200px] rounded-2xl border-2 p-6" />
                </div>
                <Button onClick={() => setSubmitted(true)} className="w-full rounded-full h-16 text-lg font-black shadow-xl shadow-primary/20 gap-3">
                  <Send className="h-5 w-5" /> Envoyer ma suggestion
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-[3rem] border-2 shadow-sm bg-white p-12 text-center space-y-6">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle2 className="h-10 w-10" />
               </div>
               <h2 className="text-3xl font-black">Merci pour votre idée !</h2>
               <p className="text-muted-foreground font-medium max-w-md mx-auto">
                 Votre suggestion a été transmise aux administrateurs. Elle sera examinée et peut-être mise au vote de la communauté.
               </p>
               <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full px-10 h-14 font-black border-2">
                 Envoyer une autre suggestion
               </Button>
            </Card>
          )}

          {/* Suggestions en cours */}
          <div className="space-y-8 pt-8">
            <h2 className="text-2xl font-headline font-black px-2 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              Dernières suggestions
            </h2>
            <div className="space-y-4">
              {[
                { title: "Mode sombre automatique", author: "Lucas_Admin", votes: 45, status: "En cours" },
                { title: "Filtre par quartier pour les sports", author: "Mickael_31", votes: 32, status: "Accepté" },
                { title: "Intégration d'un calendrier Google", author: "Sophie_Modo", votes: 12, status: "En attente" },
              ].map((sug, i) => (
                <Card key={i} className="rounded-[2rem] border-2 bg-white">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">{sug.status}</Badge>
                        <h3 className="text-lg font-bold">{sug.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">Par {sug.author}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-black text-lg leading-none">{sug.votes}</div>
                        <div className="text-[9px] uppercase font-black text-muted-foreground">Votes</div>
                      </div>
                      <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

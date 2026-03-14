"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous reviendrons vers vous dans les plus brefs délais, merci.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm">
              <Mail className="h-4 w-4" />
              Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
              Dites-nous <span className="text-accent">bonjour !</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Une question, une suggestion ou juste envie de discuter ? L'équipe de Happy People 31 est là pour vous.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Info Column */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <h2 className="text-3xl font-headline font-black">Nos Coordonnées</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 rounded-3xl bg-muted/20 border border-border/50 group hover:border-accent/50 transition-colors">
                      <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Email</p>
                        <a href="mailto:appli-tolosa31@free.fr" className="text-muted-foreground hover:text-accent transition-colors">appli-tolosa31@free.fr</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-3xl bg-muted/20 border border-border/50 group hover:border-primary/50 transition-colors">
                      <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Adresse</p>
                        <p className="text-muted-foreground">Association Happy People 31<br />13, Bd. Lascrosses<br />31000 Toulouse, France</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-3xl bg-muted/20 border border-border/50 group hover:border-secondary/50 transition-colors">
                      <div className="p-3 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 transition-transform">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Réactivité</p>
                        <p className="text-muted-foreground">Nous répondons généralement sous 24h à 48h (hors week-end).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="rounded-[2.5rem] bg-indigo-600 text-white overflow-hidden border-none shadow-2xl shadow-indigo-100">
                  <CardContent className="p-10 space-y-6">
                    <MessageCircle className="h-12 w-12" />
                    <h3 className="text-2xl font-black leading-tight">Vous êtes déjà sur Discord ?</h3>
                    <p className="font-medium opacity-90 leading-relaxed">
                      C'est souvent le moyen le plus rapide de nous contacter pour des questions sur l'organisation des sorties.
                    </p>
                    <Button variant="secondary" className="rounded-full w-full font-black h-14" asChild>
                      <a href="https://discord.com" target="_blank">Rejoindre le serveur</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Form Column */}
              <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-muted shadow-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <h2 className="text-3xl font-headline font-black mb-8">Envoyer un message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-bold">Nom Complet</Label>
                        <Input id="name" placeholder="Jean Dupont" required className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold">Email</Label>
                        <Input id="email" type="email" placeholder="jean@exemple.com" required className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-bold">Sujet</Label>
                      <Input id="subject" placeholder="Question sur une sortie, suggestion..." required className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-bold">Votre Message</Label>
                      <Textarea id="message" placeholder="Dites-nous tout..." required className="min-h-[200px] rounded-2xl p-4" />
                    </div>

                    <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full h-16 text-lg font-black gap-3 shadow-xl shadow-primary/20">
                      {loading ? "Envoi en cours..." : (
                        <>
                          Envoyer le message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-20 space-y-6">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h2 className="text-3xl font-headline font-black">Message Reçu !</h2>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                      Merci de nous avoir contactés. Notre équipe va examiner votre demande et reviendra vers vous très vite.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full px-10 h-14 font-bold border-2">
                      Envoyer un autre message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

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

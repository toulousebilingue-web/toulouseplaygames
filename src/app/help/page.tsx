
"use client";

import Navbar from "@/components/navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, BookOpen, Users, MessageSquare, Trophy, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const faqs = [
    {
      question: "Comment rejoindre une sortie ?",
      answer: "C'est très simple ! Parcourez la liste des évènements, cliquez sur celui qui vous intéresse, puis sur le bouton 'S'inscrire' ou 'Rejoindre'. Assurez-vous d'être bien disponible à la date et l'heure indiquées."
    },
    {
      question: "Comment créer ma propre sortie ?",
      answer: "Cliquez sur 'Créer une sortie' dans le menu. Remplissez les détails (titre, jeu, lieu, date). Vous pouvez utiliser notre Assistant AI pour générer une description entraînante si vous manquez d'inspiration !"
    },
    {
      question: "Est-ce vraiment gratuit ?",
      answer: "Oui, l'utilisation de la plateforme Toulouse Play Games est entièrement gratuite pour tous les membres de la communauté Happy People 31."
    },
    {
      question: "Pourquoi utilisez-vous Discord ?",
      answer: "Discord est l'outil parfait pour discuter en temps réel, organiser les détails logistiques de dernière minute et créer des liens durables entre les membres. C'est le centre névralgique de notre communication."
    },
    {
      question: "Puis-je proposer une sortie sport ?",
      answer: "Absolument ! Bien que nous soyons passionnés de jeux, l'esprit de notre association est de faire bouger Toulouse. Vous pouvez créer une sortie et choisir la catégorie 'Sport' ou l'indiquer dans le titre."
    },
    {
      question: "Que faire en cas de problème lors d'une sortie ?",
      answer: "Nous prônons le respect et la bienveillance. Si un incident survient, vous pouvez nous contacter via le formulaire de contact ou le signaler aux modérateurs sur Discord."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
              <HelpCircle className="h-4 w-4" />
              Centre d'aide
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
              Comment pouvons-nous <span className="text-primary">vous aider ?</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour profiter pleinement des sorties à Toulouse.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-headline font-black">Questions Fréquentes</h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4 border-none">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-[2rem] px-6 bg-muted/10 overflow-hidden hover:bg-muted/20 transition-colors">
                    <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Call to action boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white space-y-4 shadow-xl shadow-indigo-200">
                  <MessageSquare className="h-10 w-10" />
                  <h3 className="text-2xl font-black">Besoin d'échanger ?</h3>
                  <p className="opacity-90 font-medium">Rejoignez notre serveur Discord pour discuter directement avec la communauté.</p>
                  <Button variant="secondary" className="w-full rounded-full font-bold group" asChild>
                    <Link href="https://discord.com" target="_blank">
                      Aller sur Discord <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-primary text-white space-y-4 shadow-xl shadow-primary/20">
                  <ShieldCheck className="h-10 w-10" />
                  <h3 className="text-2xl font-black">Contactez-nous</h3>
                  <p className="opacity-90 font-medium">Une question spécifique ? Notre équipe est à votre écoute via le formulaire.</p>
                  <Button variant="secondary" className="w-full rounded-full font-bold group" asChild>
                    <Link href="/contact">
                      Envoyer un message <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
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

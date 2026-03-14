"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Handshake, ShieldAlert, Heart, MessageCircle, Ban, BadgeCheck, Info } from "lucide-react";
import Link from "next/link";

export default function ChartePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
              <Handshake className="h-4 w-4" />
              Règles de vie
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
              Charte d'utilisation
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Règles de bonne conduite et conditions d'utilisation de notre service.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-neutral prose-headings:font-headline prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-relaxed">
            <div className="space-y-12">
              <div className="p-8 bg-primary/5 rounded-[2rem] border-2 border-primary/10">
                <h2 className="text-2xl font-black text-primary mb-4 flex items-center gap-2">
                  <BadgeCheck className="h-6 w-6" /> Bienvenue sur Fais ta sortie à Toulouse !
                </h2>
                <p className="font-medium text-foreground">
                  Pour que notre communauté reste un espace convivial, sûr et respectueux, nous vous demandons de lire et d'accepter les règles suivantes.
                </p>
              </div>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4 flex items-center gap-3">
                  <Heart className="h-7 w-7 text-primary" /> 1. Respect et bienveillance
                </h2>
                <p>
                  Chaque membre s'engage à faire preuve de courtoisie, de respect et de tolérance envers les autres utilisateurs. Les propos haineux, discriminatoires, injurieux, ou toute forme de harcèlement sont strictement interdits et entraîneront une suspension immédiate du compte.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-secondary pl-4 flex items-center gap-3">
                  <ShieldAlert className="h-7 w-7 text-secondary" /> 2. Sécurité et données personnelles
                </h2>
                <p>
                  Ne partagez jamais d'informations personnelles sensibles (numéro de téléphone, adresse exacte, informations bancaires) dans les espaces publics de l'application. Utilisez la messagerie privée pour des échanges plus personnels, mais restez vigilant.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4 flex items-center gap-3">
                  <MessageCircle className="h-7 w-7 text-accent" /> 3. Contenu des publications
                </h2>
                <p>
                  Toute publication (annonces, discussions, événements) doit être légale et conforme aux bonnes mœurs. Les contenus à caractère pornographique, violent, illégal ou faisant l'apologie d'activités illicites sont proscrits.
                </p>
              </section>

              <section className="p-8 bg-destructive/5 rounded-[2rem] border-2 border-destructive/20 space-y-4">
                <h2 className="text-2xl font-black text-destructive uppercase tracking-tight flex items-center gap-2">
                  <Ban className="h-6 w-6" /> 4. Interdiction des rencontres amoureuses
                </h2>
                <p className="font-medium">
                  Étant donné les problèmes provoqués par les évènements de rencontre, les sorties de rencontre sont prohibées sur notre application.
                </p>
                <p className="text-muted-foreground text-sm">
                  Fais ta sortie à Toulouse est une plateforme dédiée aux sorties amicales et à l'entraide. Les événements organisés dans le but explicite de faire des rencontres amoureuses ou "dating" ne sont pas autorisés. Toute publication de ce type sera supprimée. Tout contrevenant pourra faire l'objet d'une suspension de son compte.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4 flex items-center gap-3">
                  <ShieldAlert className="h-7 w-7 text-primary" /> 5. Signalements
                </h2>
                <p>
                  Si vous constatez un comportement ou un contenu qui enfreint cette charte, utilisez les outils de signalement mis à votre disposition. Notre équipe de modération examinera chaque signalement avec attention.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-secondary pl-4 flex items-center gap-3">
                  <Info className="h-7 w-7 text-secondary" /> 6. Responsabilité
                </h2>
                <p>
                  Les organisateurs de sorties sont responsables du bon déroulement de leurs événements. Fais ta sortie à Toulouse agit comme une plateforme de mise en relation et ne peut être tenu responsable des incidents survenant lors des activités organisées par ses membres.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4 flex items-center gap-3">
                  <BadgeCheck className="h-7 w-7 text-accent" /> 7. Sorties payantes
                </h2>
                <p>
                  En ce qui concerne les sorties payantes ou qui contiennent des activités payantes ou vente de produits à côté, elles doivent être signalées au moins dans la description de la sortie. La transparence est essentielle pour que les membres puissent participer en toute connaissance de cause.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-destructive pl-4 flex items-center gap-3">
                  <Ban className="h-7 w-7 text-destructive" /> 8. Concurrence
                </h2>
                <p>
                  L'utilisation de cette application ne doit pas donner lieu à la promotion d'une autre application de même type que celle-ci.
                </p>
              </section>

              <div className="p-8 bg-muted/20 rounded-[2rem] text-center space-y-4">
                <h3 className="text-xl font-bold">Acceptation</h3>
                <p className="text-muted-foreground">
                  En vous inscrivant, vous confirmez avoir lu et accepté l'ensemble de cette charte. Merci de contribuer à faire de Fais ta sortie à Toulouse un espace positif et accueillant pour tous !
                </p>
              </div>

              <div className="flex justify-center pt-12">
                <Button variant="outline" asChild className="rounded-full font-bold gap-2">
                  <Link href="/"><ArrowLeft className="h-4 w-4" /> Retour à l'accueil</Link>
                </Button>
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

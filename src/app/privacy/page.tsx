"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm">
              <ShieldCheck className="h-4 w-4" />
              Protection des données
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Informations sur la collecte et l'utilisation de vos données.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-neutral prose-headings:font-headline prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-relaxed">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4">1. Introduction</h2>
                <p>
                  Fais ta sortie à Toulouse (ci-après « l'Application » ou « Nous »), éditée par l'association <strong>Happy People 31</strong>, basée au 13, Bd. Lascrosses à Toulouse, s'engage à protéger la confidentialité des utilisateurs. Cette politique de confidentialité détaille les types d'informations que nous collectons via l'Application, la manière dont nous les utilisons et les droits des utilisateurs concernant ces informations.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl border-l-4 border-secondary pl-4">2. Données Collectées</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">2.1. Informations Fournies par l'Utilisateur</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Données d'identité et de contact</strong> : Nom d'utilisateur, adresse e-mail, mot de passe chiffré.</li>
                    <li><strong>Contenu Utilisateur</strong> : Textes, photos, ou autres contenus que vous téléchargez ou créez dans l'Application (messages, commentaires, descriptions).</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">2.2. Informations Collectées Automatiquement</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Données d'utilisation</strong> : Pages vues, fonctionnalités utilisées, fréquence d'accès.</li>
                    <li><strong>Données techniques</strong> : Adresse IP, type d'appareil, système d'exploitation.</li>
                    <li><strong>Données de localisation</strong> : Localisation géographique (avec votre consentement).</li>
                    <li><strong>Cookies</strong> : Utilisés pour améliorer l'expérience utilisateur.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4">3. Utilisation des Données</h2>
                <p>Nous utilisons les données collectées pour :</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fourniture de Services (exploiter, maintenir et améliorer l'Application).</li>
                  <li>Communication (support, notifications, marketing avec consentement).</li>
                  <li>Analyse et Amélioration des performances.</li>
                  <li>Sécurité et Conformité Légale.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-destructive pl-4">4. Partage des Données</h2>
                <p>
                  Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations avec nos prestataires tiers (hébergement, analyse) ou si nous y sommes contraints par la loi.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4">5. Durée de Conservation</h2>
                <p>
                  Nous conservons vos informations personnelles aussi longtemps que nécessaire pour vous fournir le service et pour nous conformer à nos obligations légales.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-secondary pl-4">6. Vos Droits d'Utilisateur</h2>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Droit d'accès et de rectification.</li>
                  <li>Droit à l'effacement.</li>
                  <li>Droit d'opposition au traitement.</li>
                </ul>
                <p>Pour exercer ces droits, veuillez nous contacter via les coordonnées ci-dessous.</p>
              </section>

              <section className="p-8 bg-muted/20 rounded-[2rem] space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4">7. Nous Contacter</h2>
                <p className="font-medium">
                  Si vous avez des questions, contactez-nous à : <a href="mailto:appli-tolosa31@free.fr" className="text-primary font-bold hover:underline">appli-tolosa31@free.fr</a>
                </p>
              </section>

              <section className="pt-8 border-t text-sm text-muted-foreground">
                <p><strong>8. Modifications de la Politique de Confidentialité</strong></p>
                <p>Dernière mise à jour : 12 novembre 2025</p>
              </section>

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

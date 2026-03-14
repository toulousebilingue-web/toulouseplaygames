"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="py-20 bg-[#FFF9F2] border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm">
              <Scale className="h-4 w-4" />
              Informations Légales
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Informations légales concernant Tolosa.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl prose prose-neutral prose-headings:font-headline prose-headings:font-black prose-p:text-muted-foreground prose-p:leading-relaxed">
            <div className="space-y-12">
              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4">Éditeur du site</h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-bold text-foreground">Association Happy People 31</p>
                  <p>13, Bd. Lascrosses</p>
                  <p>31000 Toulouse</p>
                  <p>France</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-secondary pl-4">Directeur de la publication</h2>
                <p>Le représentant légal de l'association Happy People 31.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4">Contact</h2>
                <p>
                  Pour toute question, veuillez utiliser le formulaire de contact afin de nous contacter ou envoyez un mail à <a href="mailto:appli-tolosa31@free.fr" className="text-primary font-bold hover:underline">appli-tolosa31@free.fr</a>.
                </p>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl border-l-4 border-destructive pl-4">Hébergeur et Infrastructure</h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Hébergement Principal et Déploiement</h3>
                  <p className="text-muted-foreground">
                    L'hébergement et le déploiement du site (Frontend et API Routes) sont assurés par :<br />
                    <strong className="text-foreground">Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, États-Unis
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Services d'Infrastructure Complémentaires</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-bold text-foreground">Code Source (GitHub)</p>
                      <p>GitHub, Inc. 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Services Cloud & API (Google/Firebase)</p>
                      <p>Google LLC / Firebase 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="p-8 bg-destructive/5 rounded-[2rem] border-2 border-destructive/10 space-y-4">
                <h2 className="text-2xl font-black text-destructive uppercase tracking-tight">Note sur le Service et la Communauté</h2>
                <p className="font-medium text-muted-foreground">
                  <strong>IMPORTANT :</strong> Le site sert de portail d'accès et de tableau de bord pour la communauté. 
                  L'organisation des sorties, les discussions en temps réel et la modération de la communauté sont gérées exclusivement sur notre serveur Discord. 
                  Les utilisateurs sont soumis aux conditions générales d'utilisation et à la politique de confidentialité de Discord pour toutes les activités menées sur ce serveur.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-primary pl-4">Propriété intellectuelle</h2>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-secondary pl-4">Données personnelles</h2>
                <p>
                  Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des comptes utilisateurs et à la mise en relation des membres. Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en nous contactant à l'adresse email mentionnée ci-dessus.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl border-l-4 border-accent pl-4">Responsabilité</h2>
                <p>
                  Tolosa Amical met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés mais ne saurait être tenu pour responsable des erreurs, d'une absence de disponibilité des fonctionnalités ou de la présence de virus sur son site. Les événements et annonces sont publiés sous la seule responsabilité de leurs auteurs.
                </p>
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

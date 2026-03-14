
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, TrendingUp, Plus, Search, ChevronRight, Hash, Clock, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = [
  { name: "Général", icon: Users, count: 45, color: "text-blue-500" },
  { name: "Jeux de Plateau", icon: Hash, count: 128, color: "text-orange-500" },
  { name: "Jeux Vidéo", icon: Hash, count: 86, color: "text-purple-500" },
  { name: "Sports & Équipes", icon: TrendingUp, count: 32, color: "text-green-500" },
  { name: "Bons plans", icon: Hash, count: 19, color: "text-yellow-500" },
];

const TOPICS = [
  { id: 1, title: "Cherche joueurs pour Gloomhaven campagne longue", author: "Lucas_Admin", replies: 12, views: 245, category: "Jeux de Plateau", date: "Il y a 2h" },
  { id: 2, title: "Meilleurs bars pour jouer à Toulouse ?", author: "Sophie_Modo", replies: 56, views: 1200, category: "Général", date: "Il y a 5h" },
  { id: 3, title: "On monte une équipe de Foot à 5 ?", author: "Mickael_31", replies: 8, views: 98, category: "Sports & Équipes", date: "Hier" },
];

export default function ForumPage() {
  const { toast } = useToast();

  const handleReportTopic = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Signalement envoyé",
      description: "Ce sujet a été transmis à l'équipe de modération.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/10">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">Forum de Discussion</h1>
            <p className="text-xl text-muted-foreground font-medium">L'espace communautaire pour échanger et s'organiser.</p>
          </div>
          <Button size="lg" className="rounded-full font-black h-16 px-10 shadow-xl shadow-primary/20 gap-3">
            <Plus className="h-6 w-6" /> Nouveau Sujet
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Rubriques */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-headline font-black px-2">Rubriques</h2>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <Button key={cat.name} variant="ghost" className="w-full justify-between h-14 rounded-2xl hover:bg-white group" asChild>
                    <Link href={`/forum/${cat.name.toLowerCase()}`}>
                      <div className="flex items-center gap-3">
                        <cat.icon className={cn("h-5 w-5", cat.color)} />
                        <span className="font-bold">{cat.name}</span>
                      </div>
                      <Badge variant="secondary" className="rounded-full bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {cat.count}
                      </Badge>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <Card className="rounded-[2.5rem] bg-indigo-600 text-white border-none shadow-xl overflow-hidden">
               <CardContent className="p-8 space-y-4">
                 <h3 className="text-xl font-black">Besoin d'aide ?</h3>
                 <p className="text-sm opacity-90 font-medium">Consultez notre FAQ pour les questions courantes.</p>
                 <Button variant="secondary" className="w-full rounded-full font-bold" asChild>
                   <Link href="/help">Accéder à la FAQ</Link>
                 </Button>
               </CardContent>
            </Card>
          </div>

          {/* Liste des Sujets */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Rechercher une discussion..." className="h-16 pl-12 rounded-[2rem] border-2 bg-white text-lg shadow-sm" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-headline font-black px-2">Sujets récents</h2>
              {TOPICS.map((topic) => (
                <Card key={topic.id} className="rounded-[2rem] border-2 hover:border-primary/50 transition-all cursor-pointer group bg-white relative">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-primary/30 text-primary">
                            {topic.category}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" onClick={handleReportTopic}>
                          <AlertTriangle className="h-4 w-4" />
                        </Button>
                      </div>
                      <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {topic.author}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {topic.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-8 items-center shrink-0 border-l pl-8 h-12">
                       <div className="text-center">
                         <div className="font-black text-lg leading-none">{topic.replies}</div>
                         <div className="text-[9px] uppercase font-black text-muted-foreground mt-1">Réponses</div>
                       </div>
                       <div className="text-center">
                         <div className="font-black text-lg leading-none opacity-40">{topic.views}</div>
                         <div className="text-[9px] uppercase font-black text-muted-foreground mt-1">Vues</div>
                       </div>
                       <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <Button variant="outline" className="rounded-full px-10 h-14 font-black border-2">Voir plus de sujets</Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

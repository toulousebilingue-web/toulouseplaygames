
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Lightbulb, Star, ShieldAlert, Archive, Trash2, Edit2, CheckCircle2, XCircle, AlertTriangle, Eye, Settings, Save, Lock, MessageSquare, Search, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_PROFILES, MOCK_EVENTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function AdminDashboard() {
  const { toast } = useToast();
  const [activeModTab, setActiveModTab] = useState("reports");
  const [users, setUsers] = useState(MOCK_PROFILES);
  const [events, setEvents] = useState(MOCK_EVENTS);
  const [memberSearch, setMemberSearch] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleRoleChange = (userId: string, newRole: string) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole as any } : u));
    toast({ title: "Rôle mis à jour", description: `L'utilisateur est maintenant ${newRole}.` });
  };

  const handleArchive = (userId: string) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, est_actif: false } : u));
    toast({ title: "Compte archivé", description: "Le compte a été déplacé vers les archives." });
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(e => e.id !== eventId));
    toast({ title: "Sortie supprimée", description: "L'événement a été retiré de la plateforme.", variant: "destructive" });
  };

  const filteredMembers = users.filter(u => 
    u.est_actif && 
    (u.username.toLowerCase().includes(memberSearch.toLowerCase()) || 
     u.email?.toLowerCase().includes(memberSearch.toLowerCase()))
  );

  const modStats = [
    { id: "members_stat", label: "Membres", value: users.filter(u => u.est_actif).length, color: "bg-blue-500", icon: Users },
    { id: "reports", label: "Signalements", value: "5", color: "bg-red-500", icon: AlertTriangle },
    { id: "events", label: "Sorties", value: events.length, color: "bg-orange-500", icon: Calendar },
    { id: "suggestions", label: "Suggestions", value: "12", color: "bg-yellow-500", icon: Lightbulb },
    { id: "ratings", label: "Notes/Évals", value: "8", color: "bg-purple-500", icon: Star },
    { id: "forum", label: "Forum/FAQ", value: "App", color: "bg-emerald-500", icon: MessageSquare },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        
        {/* SECTION 1: ADMINISTRATION DES MEMBRES */}
        <div className="mb-16 space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-headline font-black text-foreground">Panneau d'Administration</h1>
            <p className="text-muted-foreground text-lg font-medium">Gestion globale des membres et de l'accès aux archives.</p>
          </div>

          <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
            <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-4 p-8">
              <div className="space-y-1">
                <CardTitle className="text-3xl font-black flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  Liste des Membres
                </CardTitle>
                <CardDescription className="text-base">Gérez les rôles, consultez les connexions et archivez les comptes.</CardDescription>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-[350px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Chercher un membre par pseudo ou email..." 
                    className="pl-11 h-12 rounded-full border-2 focus:ring-primary"
                    value={memberSearch}
                    onChange={(e) => setMemberSearch(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="rounded-full h-12 px-6 gap-2 border-2 border-primary text-primary hover:bg-primary/5 shrink-0 font-bold" asChild>
                  <Link href="/admin/archived"><Archive className="h-5 w-5" /> Comptes Archivés</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="rounded-2xl border overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="font-black">Utilisateur</TableHead>
                      <TableHead className="font-black">Rôle</TableHead>
                      <TableHead className="font-black">Statut Social</TableHead>
                      <TableHead className="font-black">Dernière Connexion</TableHead>
                      <TableHead className="text-right font-black">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/10 transition-colors">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="font-bold text-lg">{user.username}</div>
                            {user.role === 'administrateur' && <Badge className="bg-red-100 text-red-600 border-none text-[10px] font-black">ADMIN</Badge>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Select defaultValue={user.role} onValueChange={(val) => handleRoleChange(user.id, val)}>
                            <SelectTrigger className="w-[180px] h-10 rounded-xl font-bold border-2 bg-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="membre">Membre</SelectItem>
                              <SelectItem value="organisateur">Organisateur</SelectItem>
                              <SelectItem value="moderateur">Modérateur</SelectItem>
                              <SelectItem value="administrateur">Administrateur</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="capitalize px-4 py-1.5 rounded-lg font-bold bg-muted text-muted-foreground">{user.statut_social}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                            <Clock className="h-4 w-4 text-accent" />
                            {hasMounted && user.derniere_connexion ? format(new Date(user.derniere_connexion), "dd MMM yyyy HH:mm", { locale: fr }) : (!hasMounted ? "" : "Inconnue")}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="rounded-full h-10 px-5 gap-2 border-2 hover:bg-orange-50 hover:text-orange-600 font-bold" 
                            onClick={() => handleArchive(user.id)}
                          >
                            <Archive className="h-4 w-4" /> Archiver
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 2: PANNEAU DE MODÉRATION */}
        <div className="space-y-8 pt-8 border-t-4 border-dashed border-muted">
          <div className="space-y-2">
            <h2 className="text-4xl font-headline font-black text-foreground">Panneau de Modération</h2>
            <p className="text-muted-foreground text-lg font-medium">Contrôlez les contenus signalés et surveillez l'activité de la plateforme.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {modStats.map((stat) => (
              <button
                key={stat.id}
                onClick={() => stat.id !== 'members_stat' && setActiveModTab(stat.id)}
                className={cn(
                  "text-left transition-all active:scale-95 focus:outline-none h-full",
                  stat.id === 'members_stat' ? "cursor-default" : "cursor-pointer"
                )}
              >
                <StatCard 
                  label={stat.label} 
                  value={stat.value} 
                  color={stat.color} 
                  icon={stat.icon}
                  isActive={activeModTab === stat.id}
                />
              </button>
            ))}
          </div>

          <Tabs value={activeModTab} onValueChange={setActiveModTab} className="space-y-8">
            <TabsList className="hidden">
              <TabsTrigger value="reports">Signalements</TabsTrigger>
              <TabsTrigger value="events">Sorties</TabsTrigger>
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              <TabsTrigger value="ratings">Évals</TabsTrigger>
              <TabsTrigger value="forum">Forum/FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="reports" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black">Contenus Signalés</CardTitle>
                  <CardDescription className="text-base">Alertes envoyées par les membres nécessitant une action rapide.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="rounded-2xl border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/30">
                        <TableRow>
                          <TableHead className="font-black">Type</TableHead>
                          <TableHead className="font-black">Cible</TableHead>
                          <TableHead className="font-black">Raison</TableHead>
                          <TableHead className="font-black">Par</TableHead>
                          <TableHead className="text-right font-black">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: 1, type: "Message", target: "u2 (Sophie_Modo)", reason: "Propos inappropriés", from: "ToulouseMeeple" },
                          { id: 2, type: "Sortie", target: "Five entre amis", reason: "Fausse description", from: "Lucas_Admin" },
                          { id: 3, type: "Commentaire", target: "Sortie Catan...", reason: "Spam", from: "Sophie_Modo" },
                          { id: 4, type: "Membre", target: "Inconnu_31", reason: "Harcèlement", from: "ToulouseMeeple" },
                        ].map((report) => (
                          <TableRow key={report.id}>
                            <TableCell><Badge variant="outline" className="font-bold border-primary/20 text-primary">{report.type}</Badge></TableCell>
                            <TableCell className="font-bold text-lg">{report.target}</TableCell>
                            <TableCell className="text-sm italic font-medium">"{report.reason}"</TableCell>
                            <TableCell className="font-semibold text-muted-foreground">{report.from}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted"><Eye className="h-5 w-5" /></Button>
                              <Button size="icon" variant="ghost" className="rounded-full text-green-600 hover:bg-green-50"><CheckCircle2 className="h-5 w-5" /></Button>
                              <Button size="icon" variant="ghost" className="rounded-full text-destructive hover:bg-red-50"><Trash2 className="h-5 w-5" /></Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
                 <CardHeader className="p-8">
                   <CardTitle className="text-2xl font-black">Modération des Sorties</CardTitle>
                   <CardDescription className="text-base">Supprimez ou modifiez les événements qui ne respectent pas la charte.</CardDescription>
                 </CardHeader>
                 <CardContent className="px-8 pb-8">
                   <div className="rounded-2xl border overflow-hidden">
                     <Table>
                       <TableHeader className="bg-muted/30">
                         <TableRow>
                           <TableHead className="font-black">Titre</TableHead>
                           <TableHead className="font-black">Organisateur</TableHead>
                           <TableHead className="font-black">Date</TableHead>
                           <TableHead className="text-right font-black">Actions</TableHead>
                         </TableRow>
                       </TableHeader>
                       <TableBody>
                         {events.map((event) => (
                           <TableRow key={event.id}>
                             <TableCell className="font-bold text-lg">{event.title}</TableCell>
                             <TableCell className="font-semibold text-muted-foreground">{users.find(u => u.id === event.creator_id)?.username}</TableCell>
                             <TableCell className="font-medium">{event.event_date}</TableCell>
                             <TableCell className="text-right space-x-2">
                               <Button size="sm" variant="ghost" className="rounded-full h-10 px-5 gap-2 hover:bg-blue-50 hover:text-blue-600 font-bold">
                                 <Edit2 className="h-4 w-4" /> Modifier
                               </Button>
                               <Button size="sm" variant="ghost" className="rounded-full h-10 px-5 gap-2 text-destructive hover:bg-red-50 font-bold" onClick={() => handleDeleteEvent(event.id)}>
                                 <Trash2 className="h-4 w-4" /> Supprimer
                               </Button>
                             </TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </div>
                 </CardContent>
               </Card>
            </TabsContent>

            <TabsContent value="suggestions" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black">Gestion des Suggestions</CardTitle>
                  <CardDescription className="text-base">Validez ou rejetez les idées proposées par la communauté.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="rounded-2xl border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/30">
                        <TableRow>
                          <TableHead className="font-black">Titre</TableHead>
                          <TableHead className="font-black">Auteur</TableHead>
                          <TableHead className="font-black">Status</TableHead>
                          <TableHead className="text-right font-black">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: 1, title: "Mode sombre automatique", author: "Lucas_Admin", status: "en_attente" },
                          { id: 2, title: "Filtre par quartier pour les sports", author: "Mickael_31", status: "en_attente" },
                          { id: 3, title: "Intégration d'un calendrier Google", author: "Sophie_Modo", status: "accepte" }
                        ].map((sug) => (
                          <TableRow key={sug.id}>
                            <TableCell className="font-bold text-lg">{sug.title}</TableCell>
                            <TableCell className="font-semibold text-muted-foreground">{sug.author}</TableCell>
                            <TableCell>
                              <Badge variant={sug.status === 'accepte' ? 'default' : 'secondary'} className="font-bold">
                                {sug.status.replace('_', ' ')}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button size="icon" variant="ghost" className="rounded-full text-green-600 hover:bg-green-50"><CheckCircle2 className="h-5 w-5" /></Button>
                              <Button size="icon" variant="ghost" className="rounded-full text-destructive hover:bg-red-50"><XCircle className="h-5 w-5" /></Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ratings" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black">Modération des Notes & Avis</CardTitle>
                  <CardDescription className="text-base">Surveillez les commentaires sur les activités, sports ou jeux.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="rounded-2xl border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/30">
                        <TableRow>
                          <TableHead className="font-black">Cible</TableHead>
                          <TableHead className="font-black">Membre</TableHead>
                          <TableHead className="font-black">Note</TableHead>
                          <TableHead className="font-black">Commentaire</TableHead>
                          <TableHead className="text-right font-black">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { id: 1, target: "Sortie Catan", user: "ToulouseMeeple", score: 5, comment: "Super ambiance !" },
                          { id: 2, target: "Football", user: "Lucas_Admin", score: 4, comment: "Bon match." },
                          { id: 3, target: "7 Wonders", user: "Sophie_Modo", score: 5, comment: "Jeu génial." }
                        ].map((rating) => (
                          <TableRow key={rating.id}>
                            <TableCell className="font-bold text-lg">{rating.target}</TableCell>
                            <TableCell className="font-semibold text-muted-foreground">{rating.user}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="font-black text-lg">{rating.score}</span>
                              </div>
                            </TableCell>
                            <TableCell className="max-w-xs truncate font-medium text-muted-foreground">{rating.comment}</TableCell>
                            <TableCell className="text-right">
                              <Button size="icon" variant="ghost" className="rounded-full text-destructive hover:bg-red-50"><Trash2 className="h-5 w-5" /></Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="rounded-[2.5rem] border-2 shadow-sm bg-white overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-black">Administration Forum & FAQ</CardTitle>
                  <CardDescription className="text-base">Gérez les rubriques du forum et les paramètres critiques de l'application.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="font-black text-xl border-b-2 border-primary/20 pb-2 flex items-center gap-3">
                        <MessageSquare className="h-6 w-6 text-primary" /> Rubriques Forum
                      </h3>
                      <div className="space-y-3">
                        {['Général', 'Jeux de Plateau', 'Jeux Vidéo', 'Sports', 'Bons plans'].map(cat => (
                          <div key={cat} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl border-2 border-transparent hover:border-primary/10 transition-all">
                            <span className="font-bold text-lg">{cat}</span>
                            <Button size="icon" variant="ghost" className="h-9 w-9 text-destructive hover:bg-destructive/10"><Trash2 className="h-5 w-5" /></Button>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full h-12 rounded-2xl border-dashed border-2 font-bold text-primary hover:bg-primary/5">+ Ajouter une rubrique</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="font-black text-xl border-b-2 border-accent/20 pb-2 flex items-center gap-3">
                        <Lock className="h-6 w-6 text-accent" /> Paramètres App
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-white border-2 rounded-2xl">
                          <div className="space-y-0.5">
                            <Label className="text-lg font-bold">Mode Maintenance</Label>
                            <p className="text-sm text-muted-foreground">Désactive l'accès aux membres pour maintenance.</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white border-2 rounded-2xl">
                          <div className="space-y-0.5">
                            <Label className="text-lg font-bold">Inscriptions</Label>
                            <p className="text-sm text-muted-foreground">Autoriser la création de nouveaux comptes.</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="space-y-3">
                          <Label className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Email Support Global</Label>
                          <Input defaultValue="appli-tolosa31@free.fr" className="h-12 rounded-xl border-2 px-4 text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t flex justify-end">
                    <Button className="rounded-full h-14 px-10 font-black text-lg gap-3 shadow-xl shadow-primary/20">
                      <Save className="h-6 w-6" /> Enregistrer les paramètres
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

function StatCard({ 
  label, 
  value, 
  color, 
  icon: Icon,
  isActive 
}: { 
  label: string, 
  value: string | number, 
  color: string,
  icon: any,
  isActive: boolean
}) {
  return (
    <Card className={cn(
      "rounded-[2rem] border-2 shadow-sm overflow-hidden bg-white hover:shadow-md transition-all h-full cursor-pointer flex flex-col",
      isActive ? "border-primary ring-4 ring-primary/5 scale-105 z-10" : "border-transparent"
    )}>
      <div className={cn("h-1.5", isActive ? "bg-primary" : color)} />
      <CardContent className="p-6 text-center space-y-2 flex-1 flex flex-col justify-center">
        <div className="text-[11px] uppercase font-black text-muted-foreground tracking-[0.15em] leading-none mb-1">
          {label}
        </div>
        <div className={cn("text-4xl font-black transition-colors", isActive && "text-primary")}>
          {value}
        </div>
        <div className={cn(
          "p-2.5 rounded-xl mx-auto w-fit mt-3", 
          isActive ? "bg-primary/10 text-primary" : color.replace('bg-', 'bg-').concat('/10').concat(' ').concat(color.replace('bg-', 'text-'))
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </CardContent>
    </Card>
  );
}

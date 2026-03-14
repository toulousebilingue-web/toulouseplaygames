
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Archive, Trash2, RefreshCcw, ShieldAlert, Search } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_PROFILES } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export default function ArchivedMembersPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [archivedUsers, setArchivedUsers] = useState(
    MOCK_PROFILES.slice(1).map(u => ({ ...u, est_actif: false, username: u.username + "_archived" }))
  );

  const handleRestore = (userId: string) => {
    setArchivedUsers(prev => prev.filter(u => u.id !== userId));
    toast({ title: "Compte restauré", description: "L'utilisateur a été réactivé avec succès." });
  };

  const handlePermanentDelete = (userId: string) => {
    setArchivedUsers(prev => prev.filter(u => u.id !== userId));
    toast({ title: "Suppression définitive", description: "Le compte a été supprimé de la base de données.", variant: "destructive" });
  };

  const filteredUsers = archivedUsers.filter(u => 
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-4xl font-headline font-black flex items-center justify-center md:justify-start gap-3">
              <Archive className="h-8 w-8 text-primary" />
              Comptes Archivés
            </h1>
            <p className="text-muted-foreground">Gestion des membres inactifs ou bannis.</p>
          </div>
          <Button variant="outline" className="rounded-full font-bold gap-2 border-2" asChild>
            <Link href="/admin"><ArrowLeft className="h-4 w-4" /> Retour au Panel</Link>
          </Button>
        </div>

        <Card className="rounded-[2.5rem] overflow-hidden border-2 shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-black">Archive des membres</CardTitle>
              <CardDescription>
                Les comptes listés ici n'ont plus accès à la plateforme mais peuvent être restaurés.
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Chercher dans l'archive..." 
                className="pl-9 h-10 w-[250px] rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            {filteredUsers.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Ancien Rôle</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-bold text-muted-foreground">{user.username}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="opacity-50 px-3">{user.role}</Badge>
                      </TableCell>
                      <TableCell><Badge variant="outline" className="text-destructive border-destructive">Inactif</Badge></TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button size="sm" variant="outline" className="rounded-full h-9 px-4 gap-2 hover:bg-green-50 hover:text-green-600 border-2" onClick={() => handleRestore(user.id)}>
                          <RefreshCcw className="h-4 w-4" /> Restaurer
                        </Button>
                        <Button size="sm" variant="ghost" className="rounded-full h-9 px-4 gap-2 text-destructive hover:bg-red-50" onClick={() => handlePermanentDelete(user.id)}>
                          <Trash2 className="h-4 w-4" /> Supprimer
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-20 bg-muted/10 rounded-[2rem] border-2 border-dashed">
                <ShieldAlert className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-bold text-lg">Aucun compte trouvé.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

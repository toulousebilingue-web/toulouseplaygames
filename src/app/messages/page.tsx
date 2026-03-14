
"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, Plus, User, MoreVertical, Trash2, AlertTriangle, MessageSquare } from "lucide-react";
import { MOCK_PROFILES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function MessagesPage() {
  const { toast } = useToast();
  const [activeChat, setActiveChat] = useState(MOCK_PROFILES[1].id);
  const user = MOCK_PROFILES[0];
  const chats = MOCK_PROFILES.filter(p => p.id !== user.id);

  const handleDeleteMessage = () => {
    toast({
      title: "Message supprimé",
      description: "Le message a été retiré de votre conversation.",
    });
  };

  const handleReportMessage = () => {
    toast({
      title: "Signalement envoyé",
      description: "L'équipe de modération va examiner ce message.",
    });
  };

  return (
    <div className="flex flex-col h-screen bg-muted/10">
      <Navbar />
      
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto h-full py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full gap-6">
            
            {/* Sidebar : Liste des conversations */}
            <Card className="md:col-span-1 rounded-[2.5rem] border-2 shadow-sm flex flex-col overflow-hidden bg-white">
              <CardHeader className="border-b bg-muted/5">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-black">Inbox</CardTitle>
                  <Button size="icon" variant="ghost" className="rounded-full bg-primary/10 text-primary">
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Rechercher un membre..." className="pl-10 h-10 rounded-xl" />
                </div>
              </CardHeader>
              <ScrollArea className="flex-1">
                <div className="p-2 space-y-1">
                  {chats.map((chat) => (
                    <div 
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all",
                        activeChat === chat.id ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                      )}
                    >
                      <div className="relative">
<Avatar className="h-12 w-12 border-2 border-white shadow-sm">
  {/* On utilise 'chat' au lieu de 'member' */}
  <AvatarImage src={chat.avatar_url || chat.avatar} />
  <AvatarFallback className="bg-secondary text-secondary-foreground font-black">
    {/* Sécurité : si chat.name n'existe pas, on met '??' */}
    {chat.name?.substring(0, 2).toUpperCase() || "??"}
  </AvatarFallback>
</Avatar>
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold truncate">{chat.name}</p>
                        <p className="text-xs text-muted-foreground truncate">Dernier message...</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>

            {/* Zone de Chat */}
            <Card className="md:col-span-2 lg:col-span-3 rounded-[2.5rem] border-2 shadow-sm flex flex-col overflow-hidden bg-white">
              {activeChat ? (
                <>
                  <CardHeader className="border-b bg-muted/5 py-4 px-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={chats.find(c => c.id === activeChat)?.avatar_url} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-black text-lg leading-none">{chats.find(c => c.id === activeChat)?.name}</p>
                          <p className="text-xs text-green-600 font-bold mt-1 uppercase tracking-widest">En ligne</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost" className="rounded-full">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl">
                          <DropdownMenuItem className="text-destructive font-bold gap-2 cursor-pointer" onClick={handleReportMessage}>
                            <AlertTriangle className="h-4 w-4" /> Signaler ce membre
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <ScrollArea className="flex-1 p-8">
                    <div className="space-y-6">
                      <div className="flex justify-start group">
                        <div className="relative max-w-[80%]">
                          <div className="bg-muted p-4 rounded-2xl rounded-tl-none shadow-sm">
                            <p className="text-sm font-medium">Salut ! On se retrouve à quelle heure pour la session Catan samedi ?</p>
                            <span className="text-[10px] text-muted-foreground font-bold mt-1 block">14:02</span>
                          </div>
                          <div className="absolute top-0 -right-12 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-muted-foreground hover:text-destructive" onClick={handleDeleteMessage}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-muted-foreground hover:text-red-500" onClick={handleReportMessage}>
                              <AlertTriangle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end group">
                        <div className="relative max-w-[80%]">
                          <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-none shadow-lg">
                            <p className="text-sm font-medium">Salut ! 14h au Café de la Concorde ça te va ? Je ramène l'extension.</p>
                            <span className="text-[10px] opacity-70 font-bold mt-1 block">14:05</span>
                          </div>
                          <div className="absolute top-0 -left-12 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1">
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-muted-foreground hover:text-destructive" onClick={handleDeleteMessage}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                  <div className="p-6 border-t bg-muted/5">
                    <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                      <Input placeholder="Écrire votre message..." className="flex-1 h-12 rounded-2xl border-2 px-6" />
                      <Button className="h-12 w-12 rounded-2xl shadow-lg shadow-primary/20 p-0">
                        <Send className="h-5 w-5" />
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-12 space-y-4">
                  <div className="p-6 bg-muted/30 rounded-full">
                    <MessageSquare className="h-12 w-12 opacity-20" />
                  </div>
                  <h3 className="text-xl font-bold">Sélectionnez une conversation</h3>
                  <p className="text-center max-w-xs">Commencez à échanger avec les autres membres pour organiser vos sorties !</p>
                </div>
              )}
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}

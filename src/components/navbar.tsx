
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dice6, Calendar, PlusCircle, Gamepad2, HelpCircle, Trophy, MoreHorizontal, Beer, ShoppingBag, Users, Library, PartyPopper, GlassWater, Menu, ShieldAlert, MessageSquare, MessageCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MOCK_PROFILES } from "@/lib/mock-data";

const MAIN_NAV = [
  { name: "Évènements", href: "/events", icon: Calendar },
  { name: "Jeux", href: "/games", icon: Gamepad2 },
  { name: "Membres", href: "/members", icon: Users },
];

const RESOURCE_LINKS = [
  { name: "Magasins de Jeux", href: "/magasins-de-jeux", icon: ShoppingBag },
  { name: "Magasins de jouets", href: "/magasins-de-jouets", icon: Package },
  { name: "Bars à jeux", href: "/bars-a-jeux", icon: Beer },
  { name: "Bars avec jeux", href: "/bars-avec-jeux", icon: GlassWater },
  { name: "Associations", href: "/associations-de-jeux", icon: Users },
  { name: "Ludothèques", href: "/ludotheques", icon: Library },
  { name: "Festivals", href: "/festivals", icon: PartyPopper },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const user = MOCK_PROFILES[0]; // Lucas_Admin
  const isAdmin = user.role === 'administrateur' || user.role === 'moderateur';

  // Fix hydration issues by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary p-2 rounded-[14px] group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Dice6 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight hidden sm:inline-block">
              Toulouse<span className="text-primary">Play</span><span className="text-accent">Games</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-bold transition-all hover:text-primary flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-primary/5 whitespace-nowrap",
                  pathname === item.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {mounted && (
              <>
                <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-muted" asChild title="Messages">
                  <Link href="/messages">
                    <MessageSquare className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                  </Link>
                </Button>

                {isAdmin && (
                  <Button variant="ghost" size="sm" asChild className="hidden lg:flex font-bold gap-2 text-destructive hover:bg-destructive/5">
                    <Link href="/admin">
                      <ShieldAlert className="h-5 w-5" />
                      Admin
                    </Link>
                  </Button>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-9 w-9 border-2 border-primary/20 cursor-pointer hover:ring-4 ring-primary/10 transition-all shadow-sm">
                      <AvatarImage src={user.avatar_url} />
                      <AvatarFallback className="bg-secondary text-secondary-foreground font-bold">L</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="p-3 font-bold rounded-xl cursor-pointer">Mon Profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/messages" className="p-3 font-bold rounded-xl cursor-pointer">Mes Messages</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile/settings" className="p-3 font-bold rounded-xl cursor-pointer">Paramètres</Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href="/admin" className="p-3 font-bold rounded-xl cursor-pointer text-destructive">Panel Admin</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-3 font-bold rounded-xl cursor-pointer text-muted-foreground">Déconnexion</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden border rounded-xl h-8 w-8">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="rounded-l-[2rem] overflow-y-auto">
                    <div className="flex flex-col gap-6 mt-12 pb-12">
                      <div className="font-headline font-black text-2xl px-2">Menu</div>
                      {MAIN_NAV.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-xl font-bold transition-colors hover:text-primary flex items-center gap-4 p-3 rounded-2xl",
                            pathname === item.href ? "text-primary bg-primary/5 shadow-sm" : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-7 w-7" />
                          {item.name}
                        </Link>
                      ))}

                      <Link
                        href="/forum"
                        className={cn(
                          "text-xl font-bold transition-colors hover:text-primary flex items-center gap-4 p-3 rounded-2xl",
                          pathname === "/forum" ? "text-primary bg-primary/5 shadow-sm" : "text-muted-foreground"
                        )}
                      >
                        <MessageCircle className="h-7 w-7" />
                        Forum
                      </Link>
                      
                      {isAdmin && (
                        <Link
                          href="/admin"
                          className="text-xl font-bold text-destructive flex items-center gap-4 p-3 rounded-2xl"
                        >
                          <ShieldAlert className="h-7 w-7" />
                          Administration
                        </Link>
                      )}

                      <div className="h-px bg-muted mx-4 my-2" />
                      {RESOURCE_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-bold text-muted-foreground hover:text-primary flex items-center gap-4 p-3 px-6"
                        >
                          <link.icon className="h-6 w-6 text-primary/60" />
                          {link.name}
                        </Link>
                      ))}
                      <Link
                        href="/help"
                        className="text-lg font-bold text-muted-foreground hover:text-primary flex items-center gap-4 p-3 px-6"
                      >
                        <HelpCircle className="h-6 w-6 text-primary/60" />
                        Centre d'aide
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:flex h-12 items-center justify-center border-t gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-base font-bold gap-1.5 text-muted-foreground hover:text-primary h-9">
                <MoreHorizontal className="h-5 w-5" />
                Découvrir
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 rounded-2xl p-2">
              {RESOURCE_LINKS.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center gap-2 p-3 cursor-pointer rounded-xl font-bold text-base">
                    <link.icon className="h-5 w-5 text-primary" />
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/events/new"
            className={cn(
              "text-base font-bold transition-all hover:text-primary flex items-center gap-1.5 px-6 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 whitespace-nowrap",
              pathname === "/events/new" && "bg-primary text-white hover:bg-primary/90"
            )}
          >
            <PlusCircle className="h-5 w-5" />
            Créer une sortie
          </Link>

          <Link
            href="/forum"
            className={cn(
              "text-base font-bold transition-all hover:text-primary flex items-center gap-1.5 px-6 py-2 rounded-full border-2 border-transparent hover:bg-muted/50 whitespace-nowrap",
              pathname === "/forum" && "text-primary border-primary/20 bg-primary/5"
            )}
          >
            <MessageCircle className="h-5 w-5" />
            Forum
          </Link>

          <Link
            href="/help"
            className={cn(
              "text-base font-bold transition-all hover:text-primary flex items-center gap-1.5 px-6 py-2 rounded-full border-2 border-transparent hover:bg-muted/50 whitespace-nowrap",
              pathname === "/help" && "text-primary border-primary/20 bg-primary/5"
            )}
          >
            <HelpCircle className="h-5 w-5" />
            Aide
          </Link>

          <Link
            href="/members"
            className={cn(
              "text-base font-bold transition-all hover:text-primary flex items-center gap-1.5 px-6 py-2 rounded-full border-2 border-transparent hover:bg-muted/50 whitespace-nowrap",
              pathname === "/members" && "text-primary border-primary/20 bg-primary/5"
            )}
          >
            <Users className="h-5 w-5" />
            Membres
          </Link>
        </div>
      </div>
    </header>
  );
}


"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { EventCard } from "@/components/event-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_EVENTS, MOCK_GAMES } from "@/lib/mock-data";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = MOCK_EVENTS.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-bold">Discover Events</h1>
            <p className="text-muted-foreground">Join a table or host your own session.</p>
          </div>
          <Button asChild className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
            <Link href="/events/new">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by title, location or game..." 
              className="pl-10 h-12 rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12 rounded-xl gap-2 font-bold">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const game = MOCK_GAMES.find(g => g.id === event.game_id);
              return <EventCard key={event.id} event={event} gameTitle={game?.title} />;
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/10 rounded-3xl border-2 border-dashed border-border">
            <Dice6 className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-headline font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or create a new event yourself!</p>
            <Button asChild>
              <Link href="/events/new">Create First Event</Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

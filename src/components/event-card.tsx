
"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/mock-data";

interface EventCardProps {
  event: Event;
  gameTitle?: string;
}

export function EventCard({ event, gameTitle }: EventCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.cover_url}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint="board game"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {gameTitle || "General"}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">
          {event.title}
        </h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>{event.event_date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <span>{event.start_time}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
            <span className="truncate">{event.location_name}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between border-t bg-muted/30">
        <div className="flex items-center gap-1 text-xs font-medium">
          <Users className="h-3.5 w-3.5" />
          <span>{event.max_participants} places max</span>
        </div>
        <Button size="sm" asChild variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 font-bold">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

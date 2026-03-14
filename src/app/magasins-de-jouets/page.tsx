"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, MapPin, Baby, Star, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MagasinsJouetsPage() {
  const toyShops = [
    { 
      name: "La Grande Récré", 
      rating: "3.9", 
      reviews: "582", 
      address: "55 Rue Saint-Rome", 
      phone: "05 61 29 07 15",
      desc: "Jeux & jouets multimarques au cœur du centre-ville." 
    },
    { 
      name: "LIBERTY Toys", 
      rating: "4.8", 
      reviews: "52", 
      address: "14 Rue du Taur", 
      phone: "05 62 27 06 69",
      desc: "Boutique de jouets passionnée proche de Saint-Sernin." 
    },
    { 
      name: "FNAC Toulouse - Jeanne-d'Arc", 
      rating: "3.9", 
      reviews: "3 446", 
      address: "77 Rue d'Alsace Lorraine", 
      phone: "0 825 02 00 20",
      desc: "Grand rayon culture, jeux de société et jouets éducatifs." 
    },
    { 
      name: "FNAC Toulouse - Wilson", 
      rating: "4.0", 
      reviews: "11 328", 
      address: "16 All. du Président Franklin Roosevelt", 
      phone: "0 825 02 00 20",
      desc: "Une référence pour les produits culturels et ludiques à Toulouse." 
    },
    { 
      name: "Cash Express", 
      rating: "4.4", 
      reviews: "153", 
      address: "22 Rue des Changes", 
      phone: "05 61 57 22 76",
      desc: "Achat et vente de jeux vidéo et jouets d'occasion." 
    },
    { 
      name: "Cash Converters", 
      address: "26 Rue Sainte-Ursule", 
      desc: "Large sélection de jeux d'occasion à petits prix." 
    },
    { 
      name: "Figurine collector Toulouse", 
      rating: "4.7", 
      reviews: "82", 
      address: "12 Rue Temponières", 
      phone: "09 50 24 53 76",
      desc: "Boutique spécialisée dans les figurines et objets de collection." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pb-24">
        <section className="py-20 bg-[#FFF9F2] border-b text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
            <Baby className="h-4 w-4" />
            Univers Enfant
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight px-4">
            Magasins de Jouets et jeux
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Pour les petits et les grands enfants, découvrez les meilleures adresses de jouets à Toulouse.
          </p>
        </section>

        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toyShops.map((shop, i) => (
              <Card key={i} className="rounded-[2rem] border-2 hover:border-primary/50 transition-all group flex flex-col h-full overflow-hidden shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-headline font-bold group-hover:text-primary transition-colors">
                      {shop.name}
                    </CardTitle>
                    {shop.rating && (
                      <Badge variant="secondary" className="bg-secondary/20 text-foreground flex items-center gap-1 shrink-0">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        {shop.rating}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-2">
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm italic">{shop.desc}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{shop.address}</span>
                      </div>
                      {shop.phone && (
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Phone className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-muted-foreground">{shop.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t mt-4">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                      {shop.reviews ? `${shop.reviews} avis` : "Occasion"}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-green-600">
                      <Clock className="h-3 w-3" />
                      OUVERT
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white">
      {/* Logo avec margin-top (mt-3) pour le descendre un peu 
          et une hauteur définie pour ne pas casser la barre de navigation
      */}
      <Link href="/" className="mt-3 block">
        <Image 
          src="/icons/ToulousePlayGames.png" 
          alt="Toulouse Play Games" 
          width={150}   // Ajuste la largeur selon tes envies
          height={50}   // Ajuste la hauteur
          className="object-contain"
        />
      </Link>

      {/* On a supprimé "À propos" et "Archives" 
          On peut laisser la div vide ou ajouter d'autres liens plus tard
      */}
      <div className="space-x-4 text-sm font-medium">
        {/* Liens supprimés comme demandé */}
      </div>
    </nav>
  )
}
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Toulouse Play Games
      </Link>
      <div className="space-x-4 text-sm font-medium">
        <Link href="/about" className="hover:text-blue-500">À propos</Link>
        <Link href="/admin/archived" className="hover:text-blue-500">Archives</Link>
      </div>
    </nav>
  )
}

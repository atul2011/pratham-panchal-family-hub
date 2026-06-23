import Link from "next/link";

export default function Navbar() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Videos", href: "/videos" },
    { name: "Gallery", href: "/gallery" },
    { name: "Memories", href: "/memories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div>
          <h1 className="font-bold text-xl">
            Pratham Panchal Family Hub
          </h1>
        </div>

        <nav className="hidden md:flex gap-6">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="hover:text-blue-600 transition"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
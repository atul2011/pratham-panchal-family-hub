"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {

  const pathname = usePathname();

  const menus = [

    {
      title: "Dashboard",
      href: "/admin/dashboard",
    },

    {
      title: "Gallery",
      href: "/admin/gallery",
    },

    {
      title: "Videos",
      href: "/admin/videos",
    },

    {
      title: "Memories",
      href: "/admin/memories",
    },

    {
      title: "Settings",
      href: "/admin/settings",
    },

  ];

  return (

    <aside className="w-64 bg-black text-white p-6">

      <h2 className="text-2xl font-bold mb-10">

        Family Hub Admin

      </h2>

      <nav className="space-y-3">

        {menus.map((menu) => (

          <Link

            key={menu.href}

            href={menu.href}

            className={`block p-3 rounded-lg transition ${
              pathname === menu.href
                ? "bg-white text-black"
                : "hover:bg-gray-800"
            }`}

          >

            {menu.title}

          </Link>

        ))}

      </nav>

    </aside>

  );

}
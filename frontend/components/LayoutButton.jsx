"use client";

import { useRouter }
from "next/navigation";

import { logout }
from "@/lib/auth";

export default function LogoutButton() {

  const router = useRouter();

  function handleLogout() {

    logout();

    router.push(
      "/admin/login"
    );

  }

  return (

    <button

      onClick={handleLogout}

      className="bg-red-600 text-white px-4 py-2 rounded"

    >

      Logout

    </button>

  );

}
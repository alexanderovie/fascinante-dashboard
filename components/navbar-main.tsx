"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export function NavbarMain() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="fixed z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              width={140}
              height={32}
              alt="Fascinante Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden space-x-8 sm:flex">
            {["Inicio", "Equipo", "Precios", "Contacto"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÓN LOGIN */}
          <div className="flex items-center">
            <a
              href="#"
              className="hidden items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 sm:inline-flex dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              <HiX className="-ml-1 mr-2 h-5 w-5" />
              Login / Registro
            </a>

            {/* BOTÓN TOGGLE MÓVIL */}
            <button
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              className="ml-3 inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-200 sm:hidden dark:border-gray-700"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            {["Dashboard", "Equipo", "Proyectos", "Calendario"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
            <li>
              <a
                href="#"
                className="mt-2 inline-flex w-full items-center rounded bg-primary-700 px-3 py-2 text-base font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <HiX className="mr-2 h-5 w-5" />
                Login / Registro
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

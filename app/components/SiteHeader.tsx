"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type NavigationItem = {
  label: string;
  href: string;
  pathname?: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Início",
    href: "/",
    pathname: "/",
  },
  {
    label: "A Escola",
    href: "/a-escola",
    pathname: "/a-escola",
  },
  {
    label: "Oferta Educativa",
    href: "/oferta-educativa",
    pathname: "/oferta-educativa",
  },
  {
    label: "Preços e Condições",
    href: "/precos-e-condicoes",
    pathname: "/precos-e-condicoes",
  },
  {
    label: "Contactos",
    href: "#contactos",
  },
];

export default function SiteHeader() {
  const currentPathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  useEffect(() => {
    closeMobileMenu();
  }, [currentPathname]);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      const menu = mobileMenuRef.current;

      if (
        menu &&
        menu.open &&
        !menu.contains(event.target as Node)
      ) {
        menu.open = false;
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const getLinkClassName = (pathname?: string) =>
    pathname === currentPathname ? "active" : undefined;

  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        aria-label="EMAO — página inicial"
      >
        <img
          src="/portfolio-logo.svg"
          alt="Escola de Música dos Antigos Orfeonistas"
          width={350}
          height={180}
        />
      </Link>

      <nav
        className="desktop-nav"
        aria-label="Navegação principal"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            className={getLinkClassName(item.pathname)}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        className="header-cta"
        href="/#aula-experimental"
      >
        Aula experimental
      </Link>

      <details
        className="mobile-menu"
        ref={mobileMenuRef}
      >
        <summary aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </summary>

        <nav aria-label="Navegação móvel">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={getLinkClassName(item.pathname)}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#aula-experimental"
            onClick={closeMobileMenu}
          >
            Aula experimental
          </Link>
        </nav>
      </details>
    </header>
  );
}
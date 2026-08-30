import type { Metadata } from "next";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";



export const metadata: Metadata = {
  title: "EMAO | Escola de Música dos Antigos Orfeonistas",
  description:
    "Ensino personalizado de música para crianças, jovens e adultos em Coimbra.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className="antialiased"
      >
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";

import HeaderMock from "@/__mocks__/header.json";
import { getServerSession } from "next-auth";
import FooterMock from "@/__mocks__/footer.json";
import HeroMock from "@/__mocks__/hero.json";

import { Header } from "@/components/sections/header";
import logo from "@/public/icons/logo_header.svg";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import SectionCarousel from "@/components/sections/section-carousel";

export const metadata: Metadata = {
  title: "Poc - Shadcn + Next Auth",
  description:
    "This is a front end poc for studying",
  keywords: ["nextjs", "typescript", "tailwindcss"],
  authors: [
    { name: "Davi Augusto Vissotto", url: "https://github.com/daviacct" },
  ],
};

export default async function Home() {
  const session = await getServerSession();

  const logoExample = {
    src: logo,
    alt: "logo",
    width: 200,
    height: 150,
  };

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen">
      <Header logo={logoExample} links={HeaderMock.links as any} />
      <Hero {...HeroMock} />
      <SectionCarousel />
      <Footer logo={logoExample} data={FooterMock} />
    </main>
  );
}

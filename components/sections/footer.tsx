"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { CH3 } from "../ui/typography";
import Link from "next/link";
import Image from "next/image";
import useDevice from "@/hooks/useDevice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface Link {
  title: string;
  url: string;
}

interface SocialMedia {
  name: string;
  url: string;
}

interface FooterData {
  sections: {
    title: string;
    links: Link[];
  }[];
  socialMedia: SocialMedia[];
  copyright: string;
}

interface IFooter {
  logo: {
    src: any;
    alt: string;
    width: number | `${number}`;
    height: number | `${number}`;
  };
  data: FooterData;
}

interface IFooterMenu {
  data: FooterData;
}

function FooterMenu({ data }: IFooterMenu) {
  const { isDesktop } = useDevice();

  if (isDesktop)
    return data.sections.map((section, sectionIndex) => (
      <div className="footer-section" key={sectionIndex}>
        <CH3 text={section.title} />
        <ul className="footer-links flex flex-col space-y-4 mt-2">
          {section.links.map((link, linkIndex) => (
            <Link key={linkIndex} className="hover:underline" href={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    ));

  return data.sections.map((section, sectionIndex) => (
    <Accordion key={sectionIndex} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <CH3 align={"left"} text={section.title} />
        </AccordionTrigger>
        <AccordionContent>
          <ul className="footer-links flex flex-col space-y-4 mt-2">
            {section.links.map((link, linkIndex) => (
              <Link key={linkIndex} className="hover:underline" href={link.url}>
                {link.title}
              </Link>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));
}

export default function Footer({ logo, data }: IFooter) {
  const { isDesktop } = useDevice();

  return (
    <footer className="footer mt-12">
      <div className="footer-container container flex flex-col items-center justify-center">
        <div className="footer-content flex flex-col w-full lg:flex-row lg:justify-between lg:items-start lg:gap-12 lg:py-12">
          <FooterMenu data={data} />
          {isDesktop && <Image {...logo} priority className="header-logo" />}
          <div className="social-media mt-4 lg:m-0">
            <CH3 text="Siga-nos" />
            <ul className="social-media-icons flex items-center mt-2 space-x-4">
              {data.socialMedia.map((media, index) => (
                <Link key={index} href={media.url}>
                  {getSocialMediaIcon(media.name)}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright border-t border-t-[#2d2d2d] w-full mt-8 ">
          <p className="w-full text-center py-2">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

// Function to get the corresponding Lucide icon component based on the social media name
function getSocialMediaIcon(name: string) {
  switch (name.toLowerCase()) {
    case "facebook":
      return <Facebook className="w-10 h-10" />;
    case "instagram":
      return <Instagram className="w-10 h-10" />;
    case "twitter":
      return <Twitter className="w-10 h-10" />;
    case "linkedin":
      return <Linkedin className="w-10 h-10" />;
    default:
      return null;
  }
}

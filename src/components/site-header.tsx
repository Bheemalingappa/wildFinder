"use client";

import Link from "next/link";
import { Leaf, Camera, BookOpen, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
    { href: "/", label: "Identify", icon: Camera },
    { href: "/browse", label: "Browse", icon: BookOpen },
    { href: "/sightings", label: "My Sightings", icon: Heart },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl font-headline">WildFinder</span>
        </Link>
        <nav className="flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant={isActive ? "secondary" : "ghost"}
                asChild
              >
                <Link href={link.href} className="flex items-center">
                   <link.icon className="mr-2 h-4 w-4" />
                   {link.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

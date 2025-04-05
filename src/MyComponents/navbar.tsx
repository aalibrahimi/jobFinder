// src/components/Navbar.tsx
"use client"
import React, { useEffect, useState } from "react";
import { Link, usePathname } from '@/i18n/navigation';
import { ModeToggle } from "@/components/ui/modetoggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react"; // Added LogIn icon
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface RouteItem {
  title: string;
  href?: string;
  content?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export function Navbar(): React.ReactElement {
  const defaultRoute = { href: "/" }
  const t = useTranslations('NavBar');

  // Updated routes for a job board
  const routes: RouteItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Find Jobs",
      href: "/jobs",
    },
    {
      title: "For Employers",
      content: [
        {
          title: "Post a Job",
          href: "/post-job",
          description: "Reach thousands of qualified candidates with your job posting.",
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "View our simple and transparent pricing options.",
        },
        {
          title: "Success Stories",
          href: "/testimonials",
          description: "See how employers are finding great talent on our platform.",
        },
      ],
    },
    {
      title: "Resources",
      content: [
        {
          title: "Career Advice",
          href: "/blog",
          description: "Tips and guidance for your job search and career advancement.",
        },
        {
          title: "Resume Builder",
          href: "/resume-builder",
          description: "Create a professional resume that stands out to employers.",
        },
        {
          title: "Help Center",
          href: "/help",
          description: "Find answers to your questions and get support.",
        },
      ],
    },
    {
      title: "About Us",
      href: "/about",
    },
  ];

  interface Language {
    code: string;
    name: string;
    flag?: string;
  }

  // Country Flags: https://emojiterra.com/country-flags/
  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇮🇶" },
  ];

  const locale = useLocale();
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if user is logged in
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const changeLanguage = (language: Language) => {
    if (language.code === locale) return;

    window.location.href  = `/${language.code}${pathname === '/' ? '' : pathname} `;
  };

  useEffect(() => {
    const matchedLanguage = languages.find(lang => lang.code === locale) || languages[0];
    setCurrentLanguage(matchedLanguage);
    
    // Example: Check if user is authenticated (could be replaced with your auth logic)
    const userToken = localStorage.getItem('userToken');
    setIsAuthenticated(!!userToken);
  }, [locale]);


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <Code className="h-5 w-5" />
            <span>DevJobs</span>
          </motion.div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              For Companies
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              For Developers
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="sm">
                  <Link href="/signin">Sign In</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </motion.div>
            </div>
          </nav>
        </div>
      </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-300 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
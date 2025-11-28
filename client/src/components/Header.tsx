import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "#services", label: "خدماتنا" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  // Add admin link if user is admin
  if (isAuthenticated && user?.role === "admin") {
    navLinks.push({ href: "/admin", label: "لوحة التحكم" });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">الخدمات الرقمية</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full">
                ابدأ الآن
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

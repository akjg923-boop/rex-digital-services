import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 border-2 border-primary rounded">
                <span className="text-primary font-bold text-xl">DS</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              نقدم لك أفضل الخدمات الرقمية الاحترافية لتحقيق أهدافك التسويقية والإبداعية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/models" className="text-muted-foreground hover:text-primary transition-colors">
                  توفير المودل
                </Link>
              </li>
              <li>
                <Link href="/content-creators" className="text-muted-foreground hover:text-primary transition-colors">
                  صناع المحتوى
                </Link>
              </li>
              <li>
                <Link href="/video-production" className="text-muted-foreground hover:text-primary transition-colors">
                  إنتاج الفيديو
                </Link>
              </li>
              <li>
                <Link href="/voice-artists" className="text-muted-foreground hover:text-primary transition-colors">
                  التعليق الصوتي
                </Link>
              </li>
              <li>
                <Link href="/content-writing" className="text-muted-foreground hover:text-primary transition-colors">
                  كتابة المحتوى
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="text-sm">info@digitalservices.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span className="text-sm" dir="ltr">+966 55 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} الخدمات الرقمية. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

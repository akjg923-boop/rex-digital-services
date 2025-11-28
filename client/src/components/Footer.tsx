import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <span className="font-bold text-lg">الخدمات الرقمية</span>
            </div>
            <p className="text-muted-foreground text-sm">
              نقدم لك أفضل الخدمات الرقمية الاحترافية لتحقيق أهدافك التسويقية والإبداعية
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">توفير المودل</li>
              <li className="text-muted-foreground text-sm">صناع المحتوى</li>
              <li className="text-muted-foreground text-sm">إنتاج الفيديو</li>
              <li className="text-muted-foreground text-sm">التعليق الصوتي</li>
              <li className="text-muted-foreground text-sm">كتابة المحتوى</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} />
                <span>info@digitalservices.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} الخدمات الرقمية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

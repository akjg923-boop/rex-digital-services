import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { services } from "@/../../shared/services";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Clean */}
      <section className="relative h-[40vh] overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        </div>
      </section>

      {/* Services Section - Clean Boxes */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
              
              return (
                <Link
                  key={service.id}
                  href={
                    service.id === "models" ? "/models" :
                    service.id === "content-creators" ? "/content-creators" :
                    service.id === "video-production" ? "/video-production" :
                    service.id === "voice-over" ? "/voice-artists" :
                    service.id === "content-writing" ? "/content-writing" :
                    "#contact"
                  }
                >
                  <Card className="service-card-rex group hover:shadow-2xl transition-all duration-300 h-full cursor-pointer hover:scale-105">
                    <CardContent className="p-8 flex flex-col items-center text-center h-full">
                      {/* Icon */}
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        {IconComponent && (
                          <IconComponent className="w-10 h-10 text-primary" />
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Arrow Icon */}
                      <div className="mt-auto pt-6">
                        <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all">
                          <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">لماذا تختارنا؟</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نتميز بالجودة العالية والاحترافية في تقديم خدماتنا الرقمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-muted-foreground text-sm">
                نلتزم بأعلى معايير الجودة في جميع خدماتنا
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">فريق محترف</h3>
              <p className="text-muted-foreground text-sm">
                فريق من الخبراء والمحترفين في مجالاتهم
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">تسليم سريع</h3>
              <p className="text-muted-foreground text-sm">
                نلتزم بالمواعيد ونسلم المشاريع في الوقت المحدد
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
              <p className="text-muted-foreground text-sm">
                أفضل الأسعار مقابل جودة الخدمات المقدمة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">مشروع ناجح</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">آراء عملائنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نفخر بثقة عملائنا ورضاهم عن خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "خدمة احترافية ممتازة، فريق العمل متعاون جداً والنتائج فاقت التوقعات"
                </p>
                <div>
                  <div className="font-bold">أحمد محمد</div>
                  <div className="text-sm text-muted-foreground">مدير تسويق</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "تعاملت معهم في عدة مشاريع، دائماً يقدمون الأفضل ويلتزمون بالمواعيد"
                </p>
                <div>
                  <div className="font-bold">سارة علي</div>
                  <div className="text-sm text-muted-foreground">صاحبة مشروع</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "جودة الإنتاج عالية جداً، أنصح بالتعامل معهم لكل من يبحث عن الاحترافية"
                </p>
                <div>
                  <div className="font-bold">خالد عبدالله</div>
                  <div className="text-sm text-muted-foreground">مؤثر رقمي</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا الآن واحصل على استشارة مجانية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">اطلب خدمتك الآن</CardTitle>
                  <CardDescription>
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <p className="text-muted-foreground mb-6">
                  يمكنك التواصل معنا عبر القنوات التالية
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">info@digitalservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">رقم الهاتف</h4>
                    <p className="text-muted-foreground" dir="ltr">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">الموقع</h4>
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    size="lg"
                  >
                    <MessageCircle className="ml-2" />
                    تواصل عبر WhatsApp
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-bold mb-3">ساعات العمل</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة - السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

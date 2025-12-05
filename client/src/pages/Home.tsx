import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { services } from "@/../../shared/services";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Star, Video, Mic, Users, FileText, Camera } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Horizontal Slider with 5 Images (9:16) */}
      <section className="relative overflow-x-auto bg-background py-8 pt-24">
        <div className="flex gap-4 px-4">
          {/* Image 1 */}
          <div className="flex-shrink-0">
            <img 
              src="/banner-1.jpg" 
              alt="يحقق حلمك" 
              className="h-[600px] w-auto object-contain rounded-lg"
            />
          </div>
          
          {/* Image 2 */}
          <div className="flex-shrink-0">
            <img 
              src="/banner-2.jpg" 
              alt="نصورك" 
              className="h-[600px] w-auto object-contain rounded-lg"
            />
          </div>
          
          {/* Placeholder 3 */}
          <div className="flex-shrink-0 w-[340px] h-[600px] bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm">صورة 3</p>
            </div>
          </div>
          
          {/* Placeholder 4 */}
          <div className="flex-shrink-0 w-[340px] h-[600px] bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm">صورة 4</p>
            </div>
          </div>
          
          {/* Placeholder 5 */}
          <div className="flex-shrink-0 w-[340px] h-[600px] bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm">صورة 5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
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
                    service.id === "editing-montage" ? "/editing-montage" :
                    "#contact"
                  }
                >
                  <Card className="service-card-rex group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {IconComponent && <IconComponent className="text-primary" size={40} />}
                      </div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا الآن واحصل على استشارة مجانية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ContactForm />

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">معلومات التواصل</CardTitle>
                  <CardDescription>
                    يمكنك التواصل معنا عبر القنوات التالية
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@rex.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">رقم الهاتف</h3>
                      <p className="text-muted-foreground">+966 50 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">الموقع</h3>
                      <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                      onClick={() => window.open('https://wa.me/966501234567', '_blank')}
                    >
                      <MessageCircle className="ml-2" size={20} />
                      تواصل عبر WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

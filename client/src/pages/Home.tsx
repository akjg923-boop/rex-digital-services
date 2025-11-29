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

      {/* Hero Section - Tayseer Style */}
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600">
        <div className="container relative z-10 h-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Right Side - Text Content */}
            <div className="text-right order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                تحويل...
                <span className="block text-primary mt-2">
                  يحقق حلمك
                </span>
              </h1>
              
              {/* White Illustrations - Service Icons */}
              <div className="flex justify-end gap-8 mb-8 opacity-40">
                <Video className="w-16 h-16 text-white" strokeWidth={1} />
                <Mic className="w-16 h-16 text-white" strokeWidth={1} />
                <Camera className="w-16 h-16 text-white" strokeWidth={1} />
                <Users className="w-16 h-16 text-white" strokeWidth={1} />
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                قدم طلبك الآن...
              </p>
              
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-2xl mr-auto">
                نحول نظام الموقع للموظفين الأفراد، العمر بشكل أقل 19 عام. هذه التمويل للسعوديين من 12 حتى 60 شهر. هذا الاشتراك رفع السعودية من 12 شهر إلى 60 شهر. مبلغ التمويل لغير السعوديين من 10 أشهر حتى 60 ألف ريال. مبلغ التمويل لغير السعوديين من 10 أشهر حتى 200 ألف ريال
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-gray-900 font-bold text-lg px-12 py-6"
              >
                استكشف خدماتنا
                <ArrowRight className="mr-2" size={24} />
              </Button>
            </div>
            
            {/* Left Side - Phone Mockup */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-md mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-800 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-700">
                  <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    <img 
                      src="/hero-banner.png" 
                      alt="Rex App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* White Illustrations Behind */}
                <div className="absolute -right-20 top-1/4 opacity-20">
                  <FileText className="w-32 h-32 text-white" strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                      className="w-full bg-green-500 hover:bg-green-600 text-white text-lg"
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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { services } from "@/../../shared/services";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import * as Icons from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-800/90 to-pink-900/95"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              نحول أفكارك الإبداعية
              <span className="block mt-2 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                إلى واقع رقمي مميز
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              نقدم لك مجموعة متكاملة من الخدمات الرقمية الاحترافية لتحقيق أهدافك التسويقية والإبداعية بأعلى جودة وأفضل النتائج
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 text-lg px-8"
              >
                استكشف خدماتنا
                <ArrowRight className="mr-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              >
                تواصل معنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-purple-200 text-sm md:text-base">مشروع ناجح</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-purple-200 text-sm md:text-base">عميل راضٍ</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-purple-200 text-sm md:text-base">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا الاحترافية</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الرقمية المتخصصة لتلبية جميع احتياجاتك الإبداعية والتسويقية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
              
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-purple-200"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`}></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {IconComponent && <IconComponent className="text-purple-600" size={24} />}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      اطلب الخدمة
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">لماذا تختارنا؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نتميز بالجودة العالية والاحترافية في تقديم خدماتنا الرقمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "جودة عالية",
                description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا",
                icon: "Award",
              },
              {
                title: "فريق محترف",
                description: "فريق من الخبراء والمحترفين في مجالاتهم",
                icon: "Users",
              },
              {
                title: "تسليم سريع",
                description: "نلتزم بالمواعيد ونسلم المشاريع في الوقت المحدد",
                icon: "Clock",
              },
              {
                title: "أسعار تنافسية",
                description: "أفضل الأسعار مقابل جودة الخدمات المقدمة",
                icon: "DollarSign",
              },
            ].map((item, index) => {
              const IconComponent = Icons[item.icon as keyof typeof Icons] as any;
              
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    {IconComponent && <IconComponent className="text-white" size={28} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">آراء عملائنا</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نفخر بثقة عملائنا ورضاهم عن خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                role: "مدير تسويق",
                comment: "خدمة احترافية ممتازة، فريق العمل متعاون جداً والنتائج فاقت التوقعات",
                rating: 5,
              },
              {
                name: "سارة علي",
                role: "صاحبة مشروع",
                comment: "تعاملت معهم في عدة مشاريع، دائماً يقدمون الأفضل ويلتزمون بالمواعيد",
                rating: 5,
              },
              {
                name: "خالد عبدالله",
                role: "مؤثر رقمي",
                comment: "جودة الإنتاج عالية جداً، أنصح بالتعامل معهم لكل من يبحث عن الاحترافية",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية لمشروعك القادم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 text-lg px-8"
            >
              تواصل معنا الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              اطلب عرض سعر
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

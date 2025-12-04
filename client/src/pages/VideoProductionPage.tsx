import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Zap, Package, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VideoProductionPage() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<string>("");

  // الخدمات التي تتطلب حضور في الموقع فقط (لا تدعم الاستلام والتصوير)
  const onLocationOnlyServices = useMemo(() => [
    "event",        // تغطية فعاليات
    "live",         // بث مباشر
    "portrait",     // تصوير بورتريه
    "architectural",// تصوير معماري
    "music",        // تصوير موسيقى
  ], []);

  // تحديد ما إذا كان يجب إظهار خيار "الاستلام والتصوير"
  const showPickupOption = useMemo(() => {
    if (selectedType === "all") return true;
    return !onLocationOnlyServices.includes(selectedType);
  }, [selectedType, onLocationOnlyServices]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">REX</h1>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            خدمات التصوير والإنتاج المرئي
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            اختر نوع التصوير المناسب لاحتياجاتك واحصل على خدمة احترافية متكاملة
          </p>

          {/* Quick Service Button */}
          <Button className="bg-card hover:bg-card/80 text-foreground border border-border mb-12">
            <Zap className="w-5 h-5 ml-2" />
            تفعيل الخدمة السريعة
          </Button>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="bg-card border-border h-14">
                <SelectValue placeholder="جميع المدن" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المدن</SelectItem>
                <SelectItem value="riyadh">الرياض</SelectItem>
                <SelectItem value="jeddah">جدة</SelectItem>
                <SelectItem value="makkah">مكة</SelectItem>
                <SelectItem value="dammam">الدمام</SelectItem>
                <SelectItem value="madinah">المدينة</SelectItem>
                <SelectItem value="taif">الطائف</SelectItem>
                <SelectItem value="abha">أبها</SelectItem>
                <SelectItem value="tabuk">تبوك</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-card border-border h-14">
                <SelectValue placeholder="جميع الأنواع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأنواع</SelectItem>
                <SelectItem value="reel">فيديو ريلز</SelectItem>
                <SelectItem value="commercial">فيديو إعلاني</SelectItem>
                <SelectItem value="promo">فيديو بروموو</SelectItem>
                <SelectItem value="event">تغطية فعاليات</SelectItem>
                <SelectItem value="live">بث مباشر</SelectItem>
                <SelectItem value="product">تصوير منتجات (فوتوغرافي)</SelectItem>
                <SelectItem value="portrait">تصوير بورتريه</SelectItem>
                <SelectItem value="architectural">تصوير معماري</SelectItem>
                <SelectItem value="music">تصوير موسيقى</SelectItem>
                <SelectItem value="documentary">فيديو وثائقي</SelectItem>
                <SelectItem value="motion">موشن جرافيكس</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full h-14 bg-card border border-border rounded-md px-10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Execution Method Title */}
          <h3 className="text-3xl font-bold mb-8">اختر طريقة التنفيذ</h3>

          {/* Service Cards */}
          <div className={`grid grid-cols-1 ${showPickupOption ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6 max-w-5xl mx-auto mb-16`}>
            {/* On-Location Service */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">خدمة التصوير في الموقع</h4>
              <p className="text-muted-foreground mb-6">
                فريق مجهز بكامل المعدات اللازمة يأتي إلى موقعك
              </p>
              <ul className="text-right space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>فريق متكامل مع المعدات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>تصوير في موقعك الخاص</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>مرونة في التصوير</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>نتائج احترافية فورية</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12">
                اختر هذه الخدمة →
              </Button>
            </div>

            {/* Pickup & Shoot Service - يظهر فقط للخدمات المناسبة */}
            {showPickupOption && (
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">خدمة الاستلام والتصوير</h4>
                <p className="text-muted-foreground mb-6">
                  نرسل المندوب يستلم المنتجات ونرجعها لك بعد التصوير
                </p>
                <ul className="text-right space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>استلام المنتجات من موقعك</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>تصوير احترافي في الاستوديو</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>إرجاع المنتجات بعد التصوير</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>توفير الوقت والجهد</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12">
                  اختر هذه الخدمة →
                </Button>
              </div>
            )}
          </div>

          {/* Consultation Section */}
          <div className="bg-card border border-border rounded-lg p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج إلى استشارة؟</h3>
            <p className="text-xl text-muted-foreground mb-8">
              فريقنا جاهز لمساعدتك في اختيار الخيار الأنسب لاحتياجاتك
            </p>
            <Button className="bg-card-foreground hover:bg-card-foreground/90 text-card font-bold h-14 px-8">
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

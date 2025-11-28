import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/../../shared/services";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // عرض رسالة نجاح
    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سنتواصل معك في أقرب وقت ممكن",
      duration: 5000,
    });

    // إعادة تعيين النموذج
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto border-2 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">اطلب خدمتك الآن</CardTitle>
        <CardDescription className="text-base">
          املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* الاسم */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              الاسم الكامل <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="أدخل اسمك الكامل"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="text-base"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              البريد الإلكتروني <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="text-base"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              رقم الهاتف <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+966 50 123 4567"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="text-base"
            />
          </div>

          {/* اختيار الخدمة */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-base">
              الخدمة المطلوبة <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
              required
            >
              <SelectTrigger id="service" className="text-base">
                <SelectValue placeholder="اختر الخدمة" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* الرسالة */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">
              تفاصيل الطلب
            </Label>
            <Textarea
              id="message"
              placeholder="أخبرنا المزيد عن احتياجاتك وتفاصيل المشروع..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
              className="text-base resize-none"
            />
          </div>

          {/* زر الإرسال */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg"
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

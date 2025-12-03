import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, Play, User } from "lucide-react";
import { trpc } from "@/lib/trpc";
import type { Model } from "@/../../drizzle/schema";

export default function ModelsPage() {
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  // TODO: سيتم استبدال هذا بالبيانات من قاعدة البيانات لاحقاً
  const { data: models, isLoading } = trpc.models.list.useQuery({
    gender: selectedGender === "all" ? undefined : selectedGender,
    minAge: ageRange[0],
    maxAge: ageRange[1],
    specialty: selectedSpecialty === "all" ? undefined : selectedSpecialty,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">توفير المودل</h1>
            <p className="text-lg text-muted-foreground">
              نوفر لك أفضل المودلز المحترفين لمشاريعك التجارية والإعلانية بمختلف الأعمار والأنماط
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 sticky top-16 z-10 border-b">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} />
            <h2 className="text-lg font-semibold">تصفية النتائج</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Gender Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">الجنس</label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الجنس" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="male">ذكر</SelectItem>
                  <SelectItem value="female">أنثى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age Range Filter */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-2 block">
                العمر: {ageRange[0]} - {ageRange[1]} سنة
              </label>
              <Slider
                value={ageRange}
                onValueChange={setAgeRange}
                min={18}
                max={60}
                step={1}
                className="mt-2"
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">التخصص</label>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر التخصص" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="fashion">أزياء</SelectItem>
                  <SelectItem value="commercial">إعلانات تجارية</SelectItem>
                  <SelectItem value="fitness">لياقة بدنية</SelectItem>
                  <SelectItem value="beauty">جمال</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">جاري تحميل المودلز...</p>
            </div>
          ) : !models || models.length === 0 ? (
            <div className="text-center py-12">
              <User className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على مودلز تطابق معايير البحث. جرب تغيير الفلاتر.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model: Model) => (
                <Card key={model.id} className="overflow-hidden group hover:shadow-xl transition-all">
                  {/* Model Video/Image */}
                  <div className="relative h-80 bg-muted overflow-hidden">
                    {model.videoUrl ? (
                      <div className="relative w-full h-full">
                        <video
                          className="w-full h-full object-cover"
                          poster={model.profileImage || undefined}
                          controls
                        >
                          <source src={model.videoUrl} type="video/mp4" />
                          متصفحك لا يدعم تشغيل الفيديو
                        </video>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="text-purple-600" size={28} />
                          </div>
                        </div>
                      </div>
                    ) : model.profileImage ? (
                      <img
                        src={model.profileImage}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <User size={64} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{model.name}</CardTitle>
                        <CardDescription>
                          {model.age} سنة • {model.gender === "male" ? "ذكر" : "أنثى"}
                          {model.height && ` • ${model.height} سم`}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {model.bio && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {model.bio}
                      </p>
                    )}

                    {model.specialties && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {JSON.parse(model.specialties).map((specialty: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      احجز الآن
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

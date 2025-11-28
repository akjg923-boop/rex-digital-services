import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, FileText, Eye } from "lucide-react";
import { trpc } from "@/lib/trpc";
import type { ContentWriting } from "@/../../drizzle/schema";

export default function ContentWritingPage() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const { data: samples, isLoading } = trpc.contentWriting.list.useQuery({
    contentType: selectedType === "all" ? undefined : selectedType,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">كتابة المحتوى</h1>
            <p className="text-lg text-indigo-100">
              كتابة محتوى إبداعي وتسويقي احترافي يناسب علامتك التجارية ويحقق أهدافك التسويقية
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

          <div className="max-w-md">
            <label className="text-sm font-medium mb-2 block">نوع المحتوى</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع المحتوى" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="blog">مقالات المدونة</SelectItem>
                <SelectItem value="social_media">محتوى تواصل اجتماعي</SelectItem>
                <SelectItem value="technical">كتابة تقنية</SelectItem>
                <SelectItem value="marketing">محتوى تسويقي</SelectItem>
                <SelectItem value="creative">كتابة إبداعية</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Content Samples Grid */}
      <section className="py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">جاري تحميل النماذج...</p>
            </div>
          ) : !samples || samples.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على نماذج تطابق معايير البحث. جرب تغيير الفلاتر.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {samples.map((sample: ContentWriting) => (
                <Card key={sample.id} className="overflow-hidden group hover:shadow-xl transition-all">
                  {/* Content Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 overflow-hidden">
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <FileText className="text-indigo-600" size={24} />
                    </div>
                    {sample.sampleText && (
                      <p className="text-sm text-muted-foreground line-clamp-6 mt-12">
                        {sample.sampleText}
                      </p>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{sample.title}</CardTitle>
                    {sample.description && (
                      <CardDescription className="line-clamp-2">{sample.description}</CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      {sample.contentType && (
                        <Badge variant="secondary">{sample.contentType}</Badge>
                      )}
                      {sample.wordCount && (
                        <span className="text-muted-foreground">{sample.wordCount} كلمة</span>
                      )}
                    </div>

                    {sample.clientName && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">العميل: </span>
                        <span className="font-medium">{sample.clientName}</span>
                      </div>
                    )}

                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                      <Eye className="ml-2" size={16} />
                      اقرأ المزيد
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

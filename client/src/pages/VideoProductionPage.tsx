import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, Play, Video } from "lucide-react";
import { trpc } from "@/lib/trpc";
import type { VideoProduction } from "@/../../drizzle/schema";

export default function VideoProductionPage() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const { data: videos, isLoading } = trpc.videoProductions.list.useQuery({
    productionType: selectedType === "all" ? undefined : selectedType,
  });

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return "";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">إنتاج الفيديو</h1>
            <p className="text-lg text-blue-100">
              خدمات إنتاج فيديو احترافية من التخطيط والتصوير حتى المونتاج والإخراج النهائي
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
            <label className="text-sm font-medium mb-2 block">نوع الإنتاج</label>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الإنتاج" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="commercial">إعلان تجاري</SelectItem>
                <SelectItem value="promotional">فيديو ترويجي</SelectItem>
                <SelectItem value="documentary">وثائقي</SelectItem>
                <SelectItem value="corporate">فيديو مؤسسي</SelectItem>
                <SelectItem value="event">تغطية فعاليات</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">جاري تحميل الأعمال...</p>
            </div>
          ) : !videos || videos.length === 0 ? (
            <div className="text-center py-12">
              <Video className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على أعمال تطابق معايير البحث. جرب تغيير الفلاتر.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video: VideoProduction) => (
                <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all">
                  {/* Video Thumbnail */}
                  <div className="relative h-56 bg-muted overflow-hidden">
                    {video.thumbnailUrl ? (
                      <div className="relative w-full h-full">
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="text-blue-600" size={28} />
                          </div>
                        </div>
                        {video.duration && (
                          <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                            {formatDuration(video.duration)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                        <Video size={64} className="text-blue-300" />
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{video.title}</CardTitle>
                    {video.description && (
                      <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      {video.productionType && (
                        <Badge variant="secondary">{video.productionType}</Badge>
                      )}
                      {video.clientName && (
                        <span className="text-muted-foreground">{video.clientName}</span>
                      )}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                      شاهد الفيديو
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

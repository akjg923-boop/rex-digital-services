import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, User, ExternalLink } from "lucide-react";
import { trpc } from "@/lib/trpc";
import type { ContentCreator } from "@/../../drizzle/schema";

export default function ContentCreatorsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedContentType, setSelectedContentType] = useState<string>("all");

  const { data: creators, isLoading } = trpc.contentCreators.list.useQuery({
    platform: selectedPlatform === "all" ? undefined : selectedPlatform,
    contentType: selectedContentType === "all" ? undefined : selectedContentType,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">صناع المحتوى</h1>
            <p className="text-lg text-orange-100">
              فريق من صناع المحتوى المبدعين لإنشاء محتوى جذاب ومؤثر على مختلف منصات التواصل الاجتماعي
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Platform Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">المنصة</label>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المنصة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="snapchat">Snapchat</SelectItem>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Content Type Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">نوع المحتوى</label>
              <Select value={selectedContentType} onValueChange={setSelectedContentType}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع المحتوى" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="video">فيديو</SelectItem>
                  <SelectItem value="photo">صور</SelectItem>
                  <SelectItem value="reels">Reels</SelectItem>
                  <SelectItem value="stories">Stories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creators Grid */}
      <section className="py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">جاري تحميل صناع المحتوى...</p>
            </div>
          ) : !creators || creators.length === 0 ? (
            <div className="text-center py-12">
              <User className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على صناع محتوى تطابق معايير البحث. جرب تغيير الفلاتر.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creators.map((creator: ContentCreator) => (
                <Card key={creator.id} className="overflow-hidden group hover:shadow-xl transition-all">
                  {/* Creator Image */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    {creator.profileImage ? (
                      <img
                        src={creator.profileImage}
                        alt={creator.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
                        <User size={64} className="text-orange-300" />
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{creator.name}</CardTitle>
                    {creator.bio && (
                      <CardDescription className="line-clamp-2">{creator.bio}</CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Platforms */}
                    {creator.platforms && (
                      <div>
                        <p className="text-sm font-medium mb-2">المنصات:</p>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(creator.platforms).map((platform: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content Types */}
                    {creator.contentTypes && (
                      <div>
                        <p className="text-sm font-medium mb-2">أنواع المحتوى:</p>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(creator.contentTypes).map((type: string, index: number) => (
                            <Badge key={index} variant="secondary">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Portfolio Link */}
                    {creator.portfolioUrl && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(creator.portfolioUrl || "", "_blank")}
                      >
                        <ExternalLink className="ml-2" size={16} />
                        معرض الأعمال
                      </Button>
                    )}

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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

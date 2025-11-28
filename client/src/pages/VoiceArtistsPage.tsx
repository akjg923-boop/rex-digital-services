import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Filter, Mic, User } from "lucide-react";
import { trpc } from "@/lib/trpc";
import type { VoiceArtist } from "@/../../drizzle/schema";

export default function VoiceArtistsPage() {
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedVoiceType, setSelectedVoiceType] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  const { data: artists, isLoading } = trpc.voiceArtists.list.useQuery({
    gender: selectedGender === "all" ? undefined : selectedGender,
    voiceType: selectedVoiceType === "all" ? undefined : selectedVoiceType,
    language: selectedLanguage === "all" ? undefined : selectedLanguage,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-green-600 via-green-700 to-teal-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">التعليق الصوتي</h1>
            <p className="text-lg text-green-100">
              أصوات احترافية متنوعة للتعليق الصوتي على الفيديوهات والإعلانات والمحتوى التعليمي
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Voice Type Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">نوع الصوت</label>
              <Select value={selectedVoiceType} onValueChange={setSelectedVoiceType}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الصوت" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="deep">عميق</SelectItem>
                  <SelectItem value="soft">ناعم</SelectItem>
                  <SelectItem value="energetic">حماسي</SelectItem>
                  <SelectItem value="calm">هادئ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">اللغة</label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="العربية">العربية</SelectItem>
                  <SelectItem value="الإنجليزية">الإنجليزية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Artists Grid */}
      <section className="py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">جاري تحميل المعلقين الصوتيين...</p>
            </div>
          ) : !artists || artists.length === 0 ? (
            <div className="text-center py-12">
              <Mic className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">
                لم يتم العثور على معلقين صوتيين تطابق معايير البحث. جرب تغيير الفلاتر.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist: VoiceArtist) => (
                <Card key={artist.id} className="overflow-hidden group hover:shadow-xl transition-all">
                  {/* Artist Image */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    {artist.profileImage ? (
                      <img
                        src={artist.profileImage}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-100">
                        <User size={64} className="text-green-300" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Mic className="text-green-600" size={24} />
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{artist.name}</CardTitle>
                        <CardDescription>
                          {artist.gender === "male" ? "ذكر" : "أنثى"}
                          {artist.voiceType && ` • ${artist.voiceType}`}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {artist.bio && (
                      <p className="text-sm text-muted-foreground line-clamp-2">{artist.bio}</p>
                    )}

                    {/* Languages */}
                    {artist.languages && (
                      <div>
                        <p className="text-sm font-medium mb-2">اللغات:</p>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(artist.languages).map((lang: string, index: number) => (
                            <Badge key={index} variant="secondary">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Accents */}
                    {artist.accents && (
                      <div>
                        <p className="text-sm font-medium mb-2">اللهجات:</p>
                        <div className="flex flex-wrap gap-2">
                          {JSON.parse(artist.accents).map((accent: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {accent}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                      استمع للعينات
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

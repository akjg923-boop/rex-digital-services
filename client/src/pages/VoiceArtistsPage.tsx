import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Volume2 } from "lucide-react";

// بيانات وهمية للمعلقين الصوتيين
const voiceArtists = [
  {
    id: 1,
    name: "أحمد عبدالرحيم",
    rating: 5,
    region: "السعودية",
    gender: "ذكر",
    category: "إعلانات",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    name: "أسماء بكر",
    rating: 5,
    region: "مصر",
    gender: "أنثى",
    category: "دوبلاج",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    name: "إبراهيم محمد",
    rating: 5,
    region: "الإمارات",
    gender: "ذكر",
    category: "وثائقي",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    name: "أمجاد - الطائف",
    rating: 5,
    region: "السعودية",
    gender: "ذكر",
    category: "إعلانات",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    name: "أمجد عبدالرزاق",
    rating: 5,
    region: "الأردن",
    gender: "ذكر",
    category: "تعليقات",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    name: "سكينة صلاح",
    rating: 5,
    region: "المغرب",
    gender: "أنثى",
    category: "دوبلاج",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];

export default function VoiceArtistsPage() {
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredArtists = voiceArtists.filter((artist) => {
    if (regionFilter !== "all" && artist.region !== regionFilter) return false;
    if (genderFilter !== "all" && artist.gender !== genderFilter) return false;
    if (categoryFilter !== "all" && artist.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="container relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">التعليق الصوتي</h1>
            <p className="text-lg md:text-xl text-gray-300">
              أصوات احترافية لجميع أنواع المشاريع
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="كل المناطق" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل المناطق</SelectItem>
                <SelectItem value="السعودية">السعودية</SelectItem>
                <SelectItem value="مصر">مصر</SelectItem>
                <SelectItem value="الإمارات">الإمارات</SelectItem>
                <SelectItem value="الأردن">الأردن</SelectItem>
                <SelectItem value="المغرب">المغرب</SelectItem>
              </SelectContent>
            </Select>

            <Select value={genderFilter} onValueChange={setGenderFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="كل الفئات" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الفئات</SelectItem>
                <SelectItem value="ذكر">ذكر</SelectItem>
                <SelectItem value="أنثى">أنثى</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="كل الأحباس" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الأحباس</SelectItem>
                <SelectItem value="إعلانات">إعلانات</SelectItem>
                <SelectItem value="دوبلاج">دوبلاج</SelectItem>
                <SelectItem value="وثائقي">وثائقي</SelectItem>
                <SelectItem value="تعليقات">تعليقات</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Voice Artists Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredArtists.map((artist) => (
              <Card key={artist.id} className="border-2 border-border bg-card hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  {/* Header with name and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(artist.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                      <span className="text-sm text-muted-foreground mr-2">({artist.rating})</span>
                    </div>
                  </div>

                  {/* Audio Player */}
                  <div className="mb-4 bg-card-foreground/5 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Volume2 className="w-5 h-5 text-primary" />
                      </div>
                      <audio 
                        controls 
                        className="w-full h-10"
                        style={{
                          filter: 'invert(0.9) hue-rotate(180deg)',
                        }}
                      >
                        <source src={artist.audioUrl} type="audio/mpeg" />
                        المتصفح لا يدعم تشغيل الصوت
                      </audio>
                    </div>
                  </div>

                  {/* Request Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    اطلب الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لا توجد نتائج مطابقة للفلاتر المحددة
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

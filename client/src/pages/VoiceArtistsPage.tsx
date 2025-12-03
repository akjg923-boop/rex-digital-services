import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Volume2, Zap } from "lucide-react";
import { toast } from "sonner";

// بيانات المعلقين الصوتيين الوهمية
const voiceArtists = [
  {
    id: 1,
    name: "أحمد عبدالرحيم",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    region: "الرياض",
    category: "إعلانات",
    gender: "ذكر"
  },
  {
    id: 2,
    name: "أسماء بكر",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    region: "جدة",
    category: "دوبلاج",
    gender: "أنثى"
  },
  {
    id: 3,
    name: "إبراهيم محمد",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    region: "الدمام",
    category: "وثائقي",
    gender: "ذكر"
  },
  {
    id: 4,
    name: "امجاد - الطائف",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    region: "الطائف",
    category: "إعلانات",
    gender: "أنثى"
  },
  {
    id: 5,
    name: "امجد عبدالرزاق",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    region: "الرياض",
    category: "تعليمي",
    gender: "ذكر"
  },
  {
    id: 6,
    name: "تركي حلاق",
    rating: 5,
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    region: "جدة",
    category: "إعلانات",
    gender: "ذكر"
  }
];

export default function VoiceArtistsPage() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");

  const handleInstantMode = () => {
    toast.success("تم تفعيل الوضع الفوري");
  };

  const handleRequestNow = (artistName: string) => {
    toast.success(`تم إرسال طلبك للمعلق: ${artistName}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Instant Mode Button */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleInstantMode}
              size="lg"
              className="bg-card hover:bg-card/80 text-foreground border-2 border-border px-8 py-6 text-lg"
            >
              <Zap className="ml-2" size={24} />
              تفعيل الوضع الفوري
            </Button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-card border-2 border-border rounded-lg px-6 py-4 text-foreground text-lg focus:outline-none focus:border-primary"
            >
              <option value="all">كل المناطق</option>
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="الدمام">الدمام</option>
              <option value="الطائف">الطائف</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-card border-2 border-border rounded-lg px-6 py-4 text-foreground text-lg focus:outline-none focus:border-primary"
            >
              <option value="all">كل الفئات</option>
              <option value="إعلانات">إعلانات</option>
              <option value="دوبلاج">دوبلاج</option>
              <option value="وثائقي">وثائقي</option>
              <option value="تعليمي">تعليمي</option>
            </select>

            {/* Gender Filter */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full bg-card border-2 border-border rounded-lg px-6 py-4 text-foreground text-lg focus:outline-none focus:border-primary"
            >
              <option value="all">كل الأحباس</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
          </div>

          {/* Voice Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {voiceArtists.map((artist) => (
              <Card key={artist.id} className="bg-card border-2 border-border overflow-hidden">
                <CardContent className="p-6">
                  {/* Name and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{artist.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(artist.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                      <span className="text-muted-foreground mr-2">({artist.rating})</span>
                    </div>
                  </div>

                  {/* Custom Audio Player */}
                  <div className="bg-primary/10 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Volume2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <audio 
                          controls 
                          className="w-full"
                          style={{
                            height: '40px',
                          }}
                        >
                          <source src={artist.audioUrl} type="audio/mpeg" />
                        </audio>
                      </div>
                    </div>
                  </div>

                  {/* Request Button */}
                  <Button
                    onClick={() => handleRequestNow(artist.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-lg"
                  >
                    اطلب الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

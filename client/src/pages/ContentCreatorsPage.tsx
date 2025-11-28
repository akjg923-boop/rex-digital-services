import { useState } from "react";
import { Link } from "wouter";
import { Home, Play } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// بيانات تجريبية للفيديوهات
const contentCreators = [
  {
    id: 1,
    name: "أحمد المبدع",
    platform: "تيك توك",
    category: "ترفيه",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "/content-creators.jpg",
    views: "2.5M",
    likes: "150K",
  },
  {
    id: 2,
    name: "سارة الإبداعية",
    platform: "إنستغرام",
    category: "موضة",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "/content-creators.jpg",
    views: "1.8M",
    likes: "95K",
  },
  {
    id: 3,
    name: "محمد التقني",
    platform: "يوتيوب",
    category: "تقنية",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "/content-creators.jpg",
    views: "3.2M",
    likes: "200K",
  },
  {
    id: 4,
    name: "فاطمة الطبخ",
    platform: "تيك توك",
    category: "طبخ",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "/content-creators.jpg",
    views: "4.1M",
    likes: "280K",
  },
  {
    id: 5,
    name: "خالد الرياضي",
    platform: "إنستغرام",
    category: "رياضة",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "/content-creators.jpg",
    views: "1.5M",
    likes: "85K",
  },
  {
    id: 6,
    name: "نورة التعليمية",
    platform: "يوتيوب",
    category: "تعليم",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "/content-creators.jpg",
    views: "2.9M",
    likes: "175K",
  },
];

export default function ContentCreatorsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredCreators = contentCreators.filter((creator) => {
    const platformMatch = selectedPlatform === "all" || creator.platform === selectedPlatform;
    const categoryMatch = selectedCategory === "all" || creator.category === selectedCategory;
    return platformMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
              <Home className="w-5 h-5" />
              <span>العودة للرئيسية</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">صناع المحتوى</h1>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger className="w-[200px] bg-zinc-900 border-zinc-800 text-white">
              <SelectValue placeholder="كل المنصات" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800">
              <SelectItem value="all" className="text-white">كل المنصات</SelectItem>
              <SelectItem value="تيك توك" className="text-white">تيك توك</SelectItem>
              <SelectItem value="إنستغرام" className="text-white">إنستغرام</SelectItem>
              <SelectItem value="يوتيوب" className="text-white">يوتيوب</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px] bg-zinc-900 border-zinc-800 text-white">
              <SelectValue placeholder="كل الفئات" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800">
              <SelectItem value="all" className="text-white">كل الفئات</SelectItem>
              <SelectItem value="ترفيه" className="text-white">ترفيه</SelectItem>
              <SelectItem value="موضة" className="text-white">موضة</SelectItem>
              <SelectItem value="تقنية" className="text-white">تقنية</SelectItem>
              <SelectItem value="طبخ" className="text-white">طبخ</SelectItem>
              <SelectItem value="رياضة" className="text-white">رياضة</SelectItem>
              <SelectItem value="تعليم" className="text-white">تعليم</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="relative group cursor-pointer"
              style={{ aspectRatio: "9/16" }}
              onClick={() => setPlayingVideo(playingVideo === creator.id ? null : creator.id)}
            >
              {/* Video Container */}
              <div className="absolute inset-0 bg-zinc-900 rounded-lg overflow-hidden">
                {playingVideo === creator.id ? (
                  <video
                    src={creator.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${creator.thumbnail})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white font-bold text-lg mb-1">{creator.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <span className="bg-red-600/80 px-2 py-0.5 rounded text-xs">{creator.platform}</span>
                  <span>{creator.category}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>👁️ {creator.views}</span>
                  <span>❤️ {creator.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">لا توجد نتائج مطابقة للفلاتر المحددة</p>
          </div>
        )}
      </div>
    </div>
  );
}

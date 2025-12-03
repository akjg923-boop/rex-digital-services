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
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// بيانات الفيديوهات من Vimeo
const contentCreators = [
  {
    id: 1,
    name: "فيديو 1",
    platform: "تيك توك",
    category: "ترفيه",
    vimeoId: "1140984385?h=e98363ac91",
    views: "2.5M",
    likes: "150K",
  },
  {
    id: 2,
    name: "فيديو 2",
    platform: "إنستغرام",
    category: "موضة",
    vimeoId: "1140984229?h=0409b87f38",
    views: "1.8M",
    likes: "95K",
  },
  {
    id: 3,
    name: "فيديو 3",
    platform: "يوتيوب",
    category: "تقنية",
    vimeoId: "1140983546?h=2542d0143f",
    views: "3.2M",
    likes: "200K",
  },
];

export default function ContentCreatorsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<typeof contentCreators[0] | null>(null);

  const filteredCreators = contentCreators.filter((creator) => {
    const platformMatch = selectedPlatform === "all" || creator.platform === selectedPlatform;
    const categoryMatch = selectedCategory === "all" || creator.category === selectedCategory;
    return platformMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
              <span>العودة للرئيسية</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">صناع المحتوى</h1>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="كل المنصات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل المنصات</SelectItem>
              <SelectItem value="تيك توك">تيك توك</SelectItem>
              <SelectItem value="إنستغرام">إنستغرام</SelectItem>
              <SelectItem value="يوتيوب">يوتيوب</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="كل الفئات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل الفئات</SelectItem>
              <SelectItem value="ترفيه">ترفيه</SelectItem>
              <SelectItem value="موضة">موضة</SelectItem>
              <SelectItem value="تقنية">تقنية</SelectItem>
              <SelectItem value="طبخ">طبخ</SelectItem>
              <SelectItem value="رياضة">رياضة</SelectItem>
              <SelectItem value="تعليم">تعليم</SelectItem>
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
              onClick={() => setSelectedVideo(creator)}
            >
              {/* Vimeo iframe */}
              <div className="absolute inset-0 bg-zinc-900 rounded-lg overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${creator.vimeoId}&autoplay=1&loop=1&muted=1&background=1`}
                  className="w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={creator.name}
                />
              </div>

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
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

      {/* Fullscreen Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black border-0">
          {selectedVideo && (
            <div className="w-full h-[90vh] flex items-center justify-center">
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}&autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={selectedVideo.name}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

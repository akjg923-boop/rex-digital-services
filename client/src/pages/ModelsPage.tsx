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

// بيانات الموديلات - فيديوهات من Vimeo
const models = [
  {
    id: 1,
    name: "مودل 1",
    gender: "أنثى",
    category: "أزياء",
    vimeoId: "1140984385?h=e98363ac91",
    height: "175cm",
    experience: "5 سنوات",
  },
  {
    id: 2,
    name: "مودل 2",
    gender: "ذكر",
    category: "رياضي",
    vimeoId: "1140984229?h=0409b87f38",
    height: "180cm",
    experience: "3 سنوات",
  },
  {
    id: 3,
    name: "مودل 3",
    gender: "أنثى",
    category: "تجاري",
    vimeoId: "1140983546?h=2542d0143f",
    height: "170cm",
    experience: "7 سنوات",
  },
];

export default function ModelsPage() {
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  const filteredModels = models.filter((model) => {
    const genderMatch = selectedGender === "all" || model.gender === selectedGender;
    const categoryMatch = selectedCategory === "all" || model.category === selectedCategory;
    return genderMatch && categoryMatch;
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
            <h1 className="text-2xl font-bold text-foreground">توفير الموديلات</h1>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Select value={selectedGender} onValueChange={setSelectedGender}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="كل الأجناس" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل الأجناس</SelectItem>
              <SelectItem value="ذكر">ذكر</SelectItem>
              <SelectItem value="أنثى">أنثى</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="كل الفئات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">كل الفئات</SelectItem>
              <SelectItem value="أزياء">أزياء</SelectItem>
              <SelectItem value="رياضي">رياضي</SelectItem>
              <SelectItem value="تجاري">تجاري</SelectItem>
              <SelectItem value="فني">فني</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary transition-colors cursor-pointer group"
              onClick={() => setSelectedModel(model)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] bg-muted">
                <iframe
                  src={`https://player.vimeo.com/video/${model.vimeoId}&background=1&autoplay=0&loop=1&byline=0&title=0`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground mr-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Model Info */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{model.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>الجنس: {model.gender}</p>
                  <p>الفئة: {model.category}</p>
                  <p>الطول: {model.height}</p>
                  <p>الخبرة: {model.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredModels.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">لا توجد نتائج مطابقة للفلاتر المحددة</p>
          </div>
        )}
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background">
          {selectedModel && (
            <div className="relative">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${selectedModel.vimeoId}&autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">{selectedModel.name}</h2>
                <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">الجنس</p>
                    <p>{selectedModel.gender}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">الفئة</p>
                    <p>{selectedModel.category}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">الطول</p>
                    <p>{selectedModel.height}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">الخبرة</p>
                    <p>{selectedModel.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

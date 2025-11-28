/**
 * ملف الخدمات المركزي
 * يحتوي على جميع بيانات الخدمات المقدمة في الموقع
 * يمكن إضافة أو حذف أو تعديل الخدمات بسهولة من هنا
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // اسم الأيقونة من lucide-react
  image: string; // مسار الصورة
  features: string[];
  color: string; // لون مميز للخدمة
}

export const services: Service[] = [
  {
    id: "models",
    title: "توفير المودل",
    description: "نوفر لك أفضل المودلز المحترفين لمشاريعك التجارية والإعلانية بمختلف الأعمار والأنماط",
    icon: "Users",
    image: "/models-service.jpg",
    features: [
      "مودلز محترفين بمختلف الأعمار",
      "تنوع في الأنماط والإطلالات",
      "خبرة في التصوير التجاري",
      "التزام بالمواعيد والاحترافية",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "content-creators",
    title: "صناع المحتوى",
    description: "فريق من صناع المحتوى المبدعين لإنشاء محتوى جذاب ومؤثر على مختلف منصات التواصل الاجتماعي",
    icon: "Sparkles",
    image: "/content-creators.jpg",
    features: [
      "محتوى إبداعي ومبتكر",
      "خبرة في جميع المنصات",
      "استراتيجيات تسويقية فعالة",
      "تحليل الأداء والنتائج",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "video-production",
    title: "إنتاج الفيديو",
    description: "خدمات إنتاج فيديو احترافية من التخطيط والتصوير حتى المونتاج والإخراج النهائي",
    icon: "Video",
    image: "/video-production.jpg",
    features: [
      "تصوير بجودة سينمائية عالية",
      "مونتاج احترافي ومؤثرات بصرية",
      "كتابة السيناريو والإخراج",
      "تسليم سريع بجودة عالية",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "voiceover",
    title: "التعليق الصوتي",
    description: "أصوات احترافية متنوعة للتعليق الصوتي على الفيديوهات والإعلانات والمحتوى التعليمي",
    icon: "Mic",
    image: "/voiceover-studio.jpg",
    features: [
      "أصوات متنوعة ومميزة",
      "تسجيل في استوديوهات احترافية",
      "معالجة صوتية عالية الجودة",
      "لهجات ولغات متعددة",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "content-writing",
    title: "كتابة المحتوى",
    description: "كتابة محتوى إبداعي وتسويقي احترافي يناسب علامتك التجارية ويحقق أهدافك التسويقية",
    icon: "PenTool",
    image: "/hero-bg.jpg",
    features: [
      "محتوى متوافق مع SEO",
      "كتابة إبداعية وجذابة",
      "بحث شامل ومعلومات دقيقة",
      "مراجعة وتدقيق لغوي",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

/**
 * دالة مساعدة للحصول على خدمة معينة بواسطة ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/**
 * دالة مساعدة للحصول على عدد الخدمات
 */
export function getServicesCount(): number {
  return services.length;
}

import { drizzle } from "drizzle-orm/mysql2";
import { models, contentCreators, videoProductions, voiceArtists, contentWriting } from "./drizzle/schema.js";
import dotenv from "dotenv";

dotenv.config();

const db = drizzle(process.env.DATABASE_URL);

async function seedData() {
  console.log("🌱 بدء إضافة البيانات التجريبية...");

  // إضافة موديلات تجريبية
  await db.insert(models).values([
    {
      name: "أحمد محمد",
      age: 25,
      gender: "male",
      bio: "مودل محترف متخصص في الإعلانات التجارية والأزياء",
      profileImage: "/models-service.jpg",
      videoUrl: null,
      height: 180,
      experience: "5 سنوات خبرة في مجال عرض الأزياء",
      specialties: JSON.stringify(["أزياء", "إعلانات تجارية"]),
      isActive: 1,
    },
    {
      name: "سارة أحمد",
      age: 23,
      gender: "female",
      bio: "مودل متخصصة في التصوير التجاري ومنتجات التجميل",
      profileImage: "/models-service.jpg",
      videoUrl: null,
      height: 170,
      experience: "3 سنوات خبرة",
      specialties: JSON.stringify(["جمال", "إعلانات تجارية"]),
      isActive: 1,
    },
    {
      name: "خالد عبدالله",
      age: 30,
      gender: "male",
      bio: "مودل رياضي متخصص في إعلانات اللياقة البدنية",
      profileImage: "/models-service.jpg",
      videoUrl: null,
      height: 185,
      experience: "7 سنوات خبرة",
      specialties: JSON.stringify(["لياقة بدنية", "رياضة"]),
      isActive: 1,
    },
  ]);

  console.log("✅ تم إضافة الموديلات");

  // إضافة صناع محتوى تجريبيين
  await db.insert(contentCreators).values([
    {
      name: "محمد الصانع",
      bio: "صانع محتوى متخصص في المحتوى الترفيهي والتعليمي",
      profileImage: "/content-creators.jpg",
      portfolioUrl: "https://example.com/portfolio",
      platforms: JSON.stringify(["instagram", "youtube", "tiktok"]),
      contentTypes: JSON.stringify(["video", "photo", "reels"]),
      sampleWorks: JSON.stringify(["/content-creators.jpg"]),
      isActive: 1,
    },
    {
      name: "فاطمة علي",
      bio: "صانعة محتوى متخصصة في الطبخ والحياة اليومية",
      profileImage: "/content-creators.jpg",
      portfolioUrl: "https://example.com/portfolio2",
      platforms: JSON.stringify(["instagram", "snapchat"]),
      contentTypes: JSON.stringify(["video", "photo", "stories"]),
      sampleWorks: JSON.stringify(["/content-creators.jpg"]),
      isActive: 1,
    },
  ]);

  console.log("✅ تم إضافة صناع المحتوى");

  // إضافة أعمال إنتاج فيديو تجريبية
  await db.insert(videoProductions).values([
    {
      title: "إعلان تجاري - شركة تقنية",
      description: "إنتاج إعلان تجاري احترافي لشركة تقنية رائدة",
      videoUrl: "/video-production.jpg",
      thumbnailUrl: "/video-production.jpg",
      productionType: "commercial",
      clientName: "شركة التقنية المتقدمة",
      duration: 60,
      isActive: 1,
    },
    {
      title: "فيديو ترويجي - منتج جديد",
      description: "فيديو ترويجي لإطلاق منتج جديد في السوق",
      videoUrl: "/video-production.jpg",
      thumbnailUrl: "/video-production.jpg",
      productionType: "promotional",
      clientName: "شركة المنتجات الذكية",
      duration: 90,
      isActive: 1,
    },
  ]);

  console.log("✅ تم إضافة أعمال إنتاج الفيديو");

  // إضافة معلقين صوتيين تجريبيين
  await db.insert(voiceArtists).values([
    {
      name: "عمر الصوت",
      bio: "معلق صوتي محترف بصوت عميق ومميز",
      profileImage: "/voiceover-studio.jpg",
      gender: "male",
      voiceType: "deep",
      languages: JSON.stringify(["العربية", "الإنجليزية"]),
      accents: JSON.stringify(["سعودي", "خليجي"]),
      sampleAudios: JSON.stringify([]),
      isActive: 1,
    },
    {
      name: "ليلى الصوت",
      bio: "معلقة صوتية بصوت ناعم ومريح",
      profileImage: "/voiceover-studio.jpg",
      gender: "female",
      voiceType: "soft",
      languages: JSON.stringify(["العربية"]),
      accents: JSON.stringify(["مصري", "شامي"]),
      sampleAudios: JSON.stringify([]),
      isActive: 1,
    },
  ]);

  console.log("✅ تم إضافة المعلقين الصوتيين");

  // إضافة نماذج كتابة محتوى تجريبية
  await db.insert(contentWriting).values([
    {
      title: "مقال تقني عن الذكاء الاصطناعي",
      description: "مقال شامل يشرح أساسيات الذكاء الاصطناعي وتطبيقاته",
      contentType: "blog",
      sampleText: "الذكاء الاصطناعي هو أحد أهم التقنيات في العصر الحديث...",
      clientName: "مدونة التقنية",
      wordCount: 1500,
      isActive: 1,
    },
    {
      title: "محتوى تسويقي لمنصات التواصل",
      description: "محتوى جذاب ومبتكر لمنصات التواصل الاجتماعي",
      contentType: "social_media",
      sampleText: "اكتشف عالماً جديداً من الإبداع والتميز...",
      clientName: "شركة التسويق الرقمي",
      wordCount: 300,
      isActive: 1,
    },
  ]);

  console.log("✅ تم إضافة نماذج كتابة المحتوى");
  console.log("🎉 تم الانتهاء من إضافة جميع البيانات التجريبية!");
}

seedData()
  .catch((error) => {
    console.error("❌ خطأ في إضافة البيانات:", error);
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Video, Mic, FileText, UserCircle, Plus } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function AdminDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>غير مصرح</CardTitle>
              <CardDescription>
                يجب أن تكون مسؤولاً للوصول إلى لوحة التحكم
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setLocation("/")} className="w-full">
                العودة للصفحة الرئيسية
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 flex-1">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground">
              إدارة المحتوى والخدمات المعروضة في الموقع
            </p>
          </div>

          <Tabs defaultValue="models" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="models">
                <Users className="ml-2" size={16} />
                الموديلات
              </TabsTrigger>
              <TabsTrigger value="creators">
                <UserCircle className="ml-2" size={16} />
                صناع المحتوى
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="ml-2" size={16} />
                إنتاج الفيديو
              </TabsTrigger>
              <TabsTrigger value="voice">
                <Mic className="ml-2" size={16} />
                التعليق الصوتي
              </TabsTrigger>
              <TabsTrigger value="writing">
                <FileText className="ml-2" size={16} />
                كتابة المحتوى
              </TabsTrigger>
            </TabsList>

            {/* Models Tab */}
            <TabsContent value="models">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>إدارة الموديلات</CardTitle>
                      <CardDescription>
                        إضافة وتعديل وحذف الموديلات المعروضة
                      </CardDescription>
                    </div>
                    <Link href="/admin/models/new">
                      <Button>
                        <Plus className="ml-2" size={16} />
                        إضافة مودل جديد
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    قريباً: جدول إدارة الموديلات
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Creators Tab */}
            <TabsContent value="creators">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>إدارة صناع المحتوى</CardTitle>
                      <CardDescription>
                        إضافة وتعديل وحذف صناع المحتوى المعروضين
                      </CardDescription>
                    </div>
                    <Link href="/admin/creators/new">
                      <Button>
                        <Plus className="ml-2" size={16} />
                        إضافة صانع محتوى جديد
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    قريباً: جدول إدارة صناع المحتوى
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Video Production Tab */}
            <TabsContent value="videos">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>إدارة أعمال إنتاج الفيديو</CardTitle>
                      <CardDescription>
                        إضافة وتعديل وحذف أعمال إنتاج الفيديو المعروضة
                      </CardDescription>
                    </div>
                    <Link href="/admin/videos/new">
                      <Button>
                        <Plus className="ml-2" size={16} />
                        إضافة عمل جديد
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    قريباً: جدول إدارة أعمال إنتاج الفيديو
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Voice Artists Tab */}
            <TabsContent value="voice">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>إدارة المعلقين الصوتيين</CardTitle>
                      <CardDescription>
                        إضافة وتعديل وحذف المعلقين الصوتيين المعروضين
                      </CardDescription>
                    </div>
                    <Link href="/admin/voice/new">
                      <Button>
                        <Plus className="ml-2" size={16} />
                        إضافة معلق صوتي جديد
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    قريباً: جدول إدارة المعلقين الصوتيين
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Writing Tab */}
            <TabsContent value="writing">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>إدارة نماذج كتابة المحتوى</CardTitle>
                      <CardDescription>
                        إضافة وتعديل وحذف نماذج كتابة المحتوى المعروضة
                      </CardDescription>
                    </div>
                    <Link href="/admin/writing/new">
                      <Button>
                        <Plus className="ml-2" size={16} />
                        إضافة نموذج جديد
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    قريباً: جدول إدارة نماذج كتابة المحتوى
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

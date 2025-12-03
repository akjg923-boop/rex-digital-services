import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Mic, Phone, FileText, Sparkles, User, Bot } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  sender: "user" | "ai" | "writer";
  content: string;
  timestamp: Date;
  senderName?: string;
}

export default function ContentWritingPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content: "مرحباً بك في خدمة كتابة المحتوى الذكية! 👋\n\nأنا هنا لمساعدتك في الحصول على محتوى احترافي مُتقن. أخبرني، ما نوع المحتوى الذي تحتاجه؟",
      timestamp: new Date(),
      senderName: "مساعد AI"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<"initial" | "questions" | "writer_suggested" | "writer_joined">("initial");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (sender: "user" | "ai" | "writer", content: string, senderName?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      content,
      timestamp: new Date(),
      senderName
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      if (stage === "initial") {
        addMessage("ai", "رائع! لأقدم لك أفضل خدمة، أحتاج لبعض التفاصيل:\n\n1️⃣ ما هو الهدف من هذا المحتوى؟\n2️⃣ من هو جمهورك المستهدف؟\n3️⃣ ما هي النبرة المفضلة؟ (رسمية، ودية، تسويقية، إلخ)");
        setStage("questions");
      } else if (stage === "questions") {
        addMessage("ai", "ممتاز! بناءً على متطلباتك، أرشح لك:\n\n✨ **أحمد السعيد**\nكاتب محتوى متخصص في مجالك\n📝 خبرة 5 سنوات\n⭐ تقييم 4.9/5\n\nهل توافق على التواصل معه مباشرة؟");
        setStage("writer_suggested");
      } else if (stage === "writer_suggested") {
        addMessage("ai", "تم إشعار الكاتب أحمد... سينضم للمحادثة خلال لحظات");
        
        setTimeout(() => {
          addMessage("writer", "مرحباً! أنا أحمد، سعيد بالعمل معك 👋\n\nراجعت تفاصيل مشروعك، وأنا جاهز للبدء. هل لديك أي ملاحظات إضافية أو تفضل أن نبدأ مباشرة؟", "أحمد السعيد");
          setStage("writer_joined");
        }, 2000);
      }
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage("user", inputValue);
    const userMsg = inputValue;
    setInputValue("");
    
    simulateAIResponse(userMsg);
  };

  const handleVoiceNote = () => {
    toast.info("ميزة الملاحظات الصوتية ستكون متاحة قريباً");
  };

  const handleVoiceCall = () => {
    toast.info("ميزة الاجتماع الصوتي ستكون متاحة قريباً");
  };

  const getSenderIcon = (sender: "user" | "ai" | "writer") => {
    if (sender === "user") return <User className="w-6 h-6" />;
    if (sender === "ai") return <Bot className="w-6 h-6" />;
    return <FileText className="w-6 h-6" />;
  };

  const getSenderBgColor = (sender: "user" | "ai" | "writer") => {
    if (sender === "user") return "bg-primary/10";
    if (sender === "ai") return "bg-muted";
    return "bg-muted";
  };

  const getSenderIconColor = (sender: "user" | "ai" | "writer") => {
    if (sender === "user") return "text-primary";
    if (sender === "ai") return "text-foreground";
    return "text-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-background border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">تجربة كتابة محتوى مدعومة بالذكاء الاصطناعي</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">كتابة المحتوى</h1>
            <p className="text-lg text-muted-foreground">
              خدمة كتابة محتوى ذكية تربطك مباشرة بكاتب محترف متخصص في مجالك
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="flex-1 py-8 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b p-4 bg-background">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">محادثة كتابة المحتوى</h3>
                    <p className="text-xs text-muted-foreground">
                      {stage === "writer_joined" ? "متصل: أحمد السعيد" : "مدعوم بالذكاء الاصطناعي"}
                    </p>
                  </div>
                </div>
                
                {stage === "writer_joined" && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleVoiceCall}
                      className="gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      اجتماع صوتي
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Messages Area */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-full ${getSenderBgColor(message.sender)} flex items-center justify-center shrink-0 ${getSenderIconColor(message.sender)}`}>
                    {getSenderIcon(message.sender)}
                  </div>
                  
                  <div className={`flex-1 ${message.sender === "user" ? "text-right" : ""}`}>
                    {message.senderName && (
                      <p className="text-xs text-muted-foreground mb-1">{message.senderName}</p>
                    )}
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      } whitespace-pre-wrap max-w-[80%]`}
                    >
                      {message.content}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-4 bg-background">
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleVoiceNote}
                  className="shrink-0"
                >
                  <Mic className="w-4 h-4" />
                </Button>
                
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1"
                />
                
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="shrink-0 bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">ذكاء اصطناعي</h3>
                <p className="text-sm text-muted-foreground">
                  يحلل فكرتك ويطرح الأسئلة المناسبة
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">كاتب متخصص</h3>
                <p className="text-sm text-muted-foreground">
                  يتم ترشيح كاتب محترف في مجالك
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">تسليم فوري</h3>
                <p className="text-sm text-muted-foreground">
                  استلم محتواك المُتقن داخل المحادثة
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

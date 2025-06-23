
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Users, Star, Phone, MessageSquare, MapPin, CheckCircle } from "lucide-react";

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      "title": "مسار تطوير الويب",
  "age": "",
  "description": "تعلم أساسيات تطوير الويب باستخدام HTML وCSS وJavaScript بطريقة ممتعة ومبسطة",
      icon: "🌐",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "مسار تطوير الألعاب",
      age: "", 
      description: "تعليم تصميم الألعاب باستخدام أدوات مثل Scratch , Construct 3 وUnity، مع أساسيات التصميم التفاعلي والمنطقي",
      icon: "🎮",
      color: "from-green-400 to-green-600"
    },
    {
      title: "مسار الروبوتيكس",
      age: "",
      description: "أطفالنا يصنعون روبوتاتهم بأنفسهم! باستخدام  Arduino and sensors",
      icon: "🤖",
      color: "from-blue-400 to-blue-600"
    }
  ];

  const features = [
    "مدربون متخصصون في تعليم الأطفال",
    "مناهج مرنة تراعي الفروقات الفردية", 
    "دعم ومتابعة مستمرة مع أولياء الأمور",
    "بيئة تعليمية ممتعة وآمنة"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/bff5be96-8e10-4308-b7e2-08a47d93fa0d.png" 
              alt="PARMIHA Technology Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-slate-700 hover:text-green-600 transition-colors font-medium">خدماتنا</a>
            <a href="#about" className="text-slate-700 hover:text-green-600 transition-colors font-medium">من نحن</a>
            <a href="#contact" className="text-slate-700 hover:text-green-600 transition-colors font-medium">تواصل معنا</a>
          </nav>
        
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
Welcome to Parmijha Technology            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8 flex items-center justify-center gap-4">
              <span>🔸</span>
              <span>نحو جيل يبدع بلغة التكنولوجيا</span>
              <span>🔸</span>
            </div>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              نحن نؤمن أن البرمجة والإبداع الرقمي ليسوا فقط للكبار – بل هم لغة المستقبل التي يجب أن يتقنها أطفال اليوم!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-6 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                احجز استشارة مجانية
              </Button> */}
              <a
      href="https://wa.me/201096288991"
      target="_blank"
      rel="noopener noreferrer"
    >
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 font-bold px-8 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                تواصل معنا
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"> من نحن؟</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                <strong className="text-green-600">Parmijha Technology</strong> هي أكاديمية لتقديم تعليم تفاعلي ممتع للأطفال من سن <Badge variant="secondary" className="mx-1">6 إلى 15 سنة</Badge> في مجالات البرمجة، الروبوتيكس، تصميم الألعاب، والذكاء الاصطناعي.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                نستخدم أساليب تعليمية مبتكرة مناسبة لكل عمر، لأننا نعلم أن لكل طفل طريقته الخاصة في الفهم والإبداع.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800">{feature}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">خدماتنا💡 </h2>
            <p className="text-lg text-slate-600">مسارات تعليمية متدرجة ومناسبة لكل عمر</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-200 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
                <CardHeader className="relative">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">{service.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{service.age}</Badge>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className={`mt-4 transition-all duration-300 ${hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-orange-50 to-green-50 border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-3">
                  ✅ معسكرات تكنولوجيا وورش عمل إبداعية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 leading-relaxed">
                  تجارب قصيرة مليئة بالتعلم والتطبيق، تزرع في الطفل حب التكنولوجيا والابتكار
                </p>
                <div className="mt-6">
                  <Badge variant="secondary" className="text-sm">مناهج متدرجة</Badge>
                  <Badge variant="secondary" className="text-sm mr-2">مناسبة للعمر</Badge>
                  <Badge variant="secondary" className="text-sm mr-2">مدعومة بالأنشطة التفاعلية</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"> لماذا تختارنا؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">مواعيد الدراسة</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span>جلستان أسبوعيًا</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span>2-3 شهور لكل مسار</span>
                </div>
                <p className="text-sm text-slate-500"></p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">ضمان الجودة</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>مجموعات صغيرة</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-orange-600" />
                  <span>متابعة فردية</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">احجز مكانًا لطفلك الآن!📲 </h2>
          <p className="text-lg text-slate-600 mb-12">ابدأ رحلة طفلك في عالم التكنولوجيا اليوم</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-slate-800">راسلنا على الخاص</h3>
              <p className="text-sm text-slate-600 mb-4">لمعرفة التفاصيل</p>
             <a
      href="https://www.facebook.com/messages/t/728783000313822"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        className="w-full border-green-200 text-green-700 hover:bg-green-50"
      >
        إرسال رسالة
      </Button>
    </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-slate-800">اتصل بنا</h3>
              <p className="text-sm text-slate-600 mb-4">عبر الواتساب</p>
              <a
      href="https://wa.me/201096288991"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        className="w-full border-orange-200 text-orange-700 hover:bg-orange-50"
      >
        اتصال مباشر
      </Button>
    </a>
            </Card>

            {/* <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-slate-800">زورونا</h3>
              <p className="text-sm text-slate-600 mb-4">في مقرنا</p>
              <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                عرض الموقع
              </Button>
            </Card> */}
          </div>

          <Separator className="my-12" />
          
          <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">عرض خاص للتسجيل المبكر!🎉 </h3>
            <p className="text-lg mb-6">خصم 20% على الدورة الأولى لأول 50 طفل يسجلون</p>
            <a
  href="https://forms.gle/Ugo9hKBf9Xfb9eqV6"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="secondary"
    className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4"
  >
    احجز مكانك الآن
  </Button>
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src="/lovable-uploads/bff5be96-8e10-4308-b7e2-08a47d93fa0d.png" 
            alt="PARMIHA Technology Logo" 
            className="h-16 w-auto mx-auto mb-6 opacity-90"
          />
          <h3 className="text-xl font-semibold mb-4">PARMIHA Technology</h3>
          <p className="text-slate-300 mb-6">نحو جيل يبدع بلغة التكنولوجيا</p>
          <div className="text-sm text-slate-400">
            <p>&copy; PARMIHA Technology. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

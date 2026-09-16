export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  country: string;
  workingHours: string;
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "صفوة الرياض",
  tagline: "خدمات نظافة فاخرة في الرياض",
  description: "شركة تنظيف بالرياض تقدم خدمات احترافية متخصصة للمنازل، الفلل، القصور، والمجالس بأحدث التقنيات وبأيدي فرق عمل مدربة على أعلى معايير الجودة الفندقية. للحجز والاستفسار المباشر: 0575386029.",
  url: "https://safwat-riyadh.sa",
  phone: "+966575386029",
  phoneDisplay: "0575386029",
  whatsapp: "966575386029",
  whatsappDisplay: "تواصل عبر واتساب",
  email: "care@safwat-riyadh.sa",
  address: "طريق الملك فهد، حي الصحافة، الرياض 13321",
  city: "الرياض",
  country: "المملكة العربية السعودية",
  workingHours: "طوال أيام الأسبوع: 7:00 ص - 11:00 م",
  navLinks: [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/services" },
    { label: "من نحن", href: "/about" },
    { label: "مناطق الخدمة", href: "/areas" },
    { label: "العروض", href: "/offers" },
    { label: "المدونة", href: "/blog" },
    { label: "تواصل معنا", href: "/contact" },
  ],
};

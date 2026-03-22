import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layout } from "./components/Layout";
import { useScrollReset } from "./hooks/useScrollReset";

// Lazy load all components that use framer-motion to defer loading the 125KB library
const FidgetSpinnerLogo = lazy(() => import("./components/FidgetSpinnerLogo").then(m => ({ default: m.FidgetSpinnerLogo })));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const MyAppsSection = lazy(() => import("./components/MyAppsSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Impressum = lazy(() => import("./components/Impressum").then(m => ({ default: m.Impressum })));

// Simple loading fallback - matches min-height in CSS
const SectionFallback = () => <div className="min-h-[400px]" />;
const LogoFallback = () => <div className="w-full aspect-square max-w-xs mx-auto bg-foreground/5 rounded-full animate-pulse" />;

function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero section - uses CSS animations, no framer-motion dependency */}
      <section className="container mx-auto px-4 sm:px-6 pt-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-5">
            <div className="hero-animate hero-animate-1">
              <Badge variant="outline" className="text-muted-foreground border-border">
                {t("hero.role")}
              </Badge>
            </div>
            <h1 className="hero-animate hero-animate-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t("hero.headline")}
            </h1>
            <p className="hero-animate hero-animate-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="hero-animate hero-animate-4 flex flex-wrap gap-3 pt-1">
              <Button
                className="group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.getStarted")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("apps")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.viewWork")}
              </Button>
            </div>
          </div>
          <div className="flex-1 relative max-w-[16rem] md:max-w-[18rem] hero-logo-animate">
            <Suspense fallback={<LogoFallback />}>
              <FidgetSpinnerLogo />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Below-the-fold sections - lazy loaded with framer-motion */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection t={t} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <MyAppsSection t={t} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AboutSection t={t} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection t={t} />
      </Suspense>
    </Layout>
  );
}

function App() {
  useScrollReset();

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Suspense>
  );
}

export default App;

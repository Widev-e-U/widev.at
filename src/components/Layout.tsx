import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";
import logo from "../assets/Logo-opt.png";

// Lazy load language switcher (uses Radix dropdown)
const LanguageSwitcher = lazy(() => import("./ui/language-switcher").then(m => ({ default: m.LanguageSwitcher })));
const LanguageSwitcherFallback = () => <div className="h-9 w-9" />;

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isImpressumPage = location.pathname === "/impressum";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5" aria-label="WiDev">
            <img
              src={logo}
              alt="WiDev Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain invert"
            />
            <span className="text-sm font-semibold tracking-tight hidden sm:inline">WiDev</span>
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {!isImpressumPage && (
              <>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {t("navbar.services")}
                </a>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {t("navbar.about")}
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {t("navbar.contact")}
                </a>
              </>
            )}
            <Link
              to="/impressum"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {t("navbar.impressum")}
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Suspense fallback={<LanguageSwitcherFallback />}>
              <LanguageSwitcher />
            </Suspense>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Suspense fallback={<LanguageSwitcherFallback />}>
              <LanguageSwitcher />
            </Suspense>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-muted-foreground hover:bg-accent transition"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-3 space-y-2">
              {!isImpressumPage && (
                <>
                  <a
                    href="#services"
                    className="block text-sm text-muted-foreground hover:text-foreground transition py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navbar.services")}
                  </a>
                  <a
                    href="#about"
                    className="block text-sm text-muted-foreground hover:text-foreground transition py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navbar.about")}
                  </a>
                  <a
                    href="#contact"
                    className="block text-sm text-muted-foreground hover:text-foreground transition py-1.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("navbar.contact")}
                  </a>
                </>
              )}
              <Link
                to="/impressum"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition py-1.5"
              >
                {t("navbar.impressum")}
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="WiDev Logo" width={20} height={20} className="h-5 w-auto invert opacity-70" />
              <span className="text-sm font-semibold text-foreground">WiDev e. U.</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/JakobWl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/jakob-winkler-8ba29123a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground text-xs">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} WiDev. {t("footer.rights")}
            </p>
            <Link
              to="/impressum"
              className="text-muted-foreground hover:text-foreground transition underline"
            >
              {t("navbar.impressum")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

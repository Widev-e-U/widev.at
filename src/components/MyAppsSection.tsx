import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

interface App {
  name: string;
  icon: string;
  url: string;
  description: string;
  logoPath?: string;
}

interface MyAppsSectionProps {
  t: (k: string, opts?: any) => any;
}

export default function MyAppsSection({ t }: MyAppsSectionProps) {
  const apps: App[] = [
    {
      name: "Scan & Learn",
      icon: "📱",
      url: "https://scan-and-learn.com",
      description: t("apps.scanAndLearn.description"),
      logoPath: "/sal-logo-opt.webp",
    },
    {
      name: "Jait",
      icon: "⚡",
      url: "https://jait.dev",
      description: t("apps.jait.description"),      logoPath: "/jait-logo.svg",    },
  ];

  return (
    <section id="apps" className="container mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mb-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2"
        >
          {t("apps.title")}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {t("apps.description")}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
      >
        {apps.map((app) => (
          <motion.div key={app.name} variants={staggerItem}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-foreground/20 cursor-pointer group">
              <CardHeader className="text-center pb-2">
                <div className="mb-2 flex justify-center">
                  {app.logoPath ? (
                    <motion.img
                      src={app.logoPath}
                      alt={`${app.name} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                      loading="lazy"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ) : (
                    <div className="text-4xl">{app.icon}</div>
                  )}
                </div>
                <CardTitle className="text-base font-bold group-hover:text-foreground/80 transition-colors">
                  {app.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-3 text-xs">{app.description}</p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-muted-foreground transition-colors font-medium group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit App
                  <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center mt-8"
      >
        <p className="text-muted-foreground text-xs">{t("apps.moreComing")}</p>
      </motion.div>
    </section>
  );
}

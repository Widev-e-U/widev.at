import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

export default function ServicesSection({
  t,
}: {
  t: (k: string, opts?: any) => any;
}) {
  const cards = [
    { key: "web", icon: Code2 },
    { key: "strategy", icon: Rocket },
    { key: "team", icon: Users },
  ];

  return (
    <section
      id="services"
      className="container mx-auto px-4 sm:px-6 py-12"
    >
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
          {t("strengths.title")}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {t("strengths.description")}
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid md:grid-cols-3 gap-4 sm:gap-6"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div key={card.key} variants={staggerItem}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-foreground/20 group">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center mb-2 transition-all bg-accent/80 group-hover:scale-110 group-hover:bg-accent">
                    <Icon className="h-5 w-5 transition text-muted-foreground group-hover:text-foreground" />
                  </div>
                  <CardTitle className="text-sm font-semibold">{t(`strengths.${card.key}.title`)}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">{t(`strengths.${card.key}.desc`)}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {(t(`strengths.${card.key}.points`, { returnObjects: true }) as string[]).map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

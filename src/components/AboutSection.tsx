import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

interface AboutSectionProps {
  t: (k: string, opts?: any) => any;
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="bg-card border-y border-border py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3"
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8"
          >
            {t("about.description")}
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-6 text-left"
          >
            {(
              t("about.points", { returnObjects: true }) as Array<{
                title: string;
                desc: string;
              }>
            ).map((point, index: number) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {point.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

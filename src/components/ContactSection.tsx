import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ContactSectionProps {
  t: (k: string, opts?: any) => any;
}

export default function ContactSection({ t }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jakob.winkler@widev.at?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-base">
                <Mail className="mr-2 h-4 w-4" />
                {t("contact.formTitle")}
              </CardTitle>
              <CardDescription>{t("contact.formDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm font-medium text-muted-foreground"
                    >
                      {t("contact.name")}
                    </label>
                    <Input
                      id="name"
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm font-medium text-muted-foreground"
                    >
                      {t("contact.email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-sm font-medium text-muted-foreground"
                  >
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full group">
                  {t("contact.send")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                </Button>
              </form>

              <Separator className="my-6" />

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2">
                  {t("contact.or")}
                </p>
                <a
                  href="mailto:jakob.winkler@widev.at"
                  className="inline-flex items-center text-sm text-foreground hover:underline font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  jakob.winkler@widev.at
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

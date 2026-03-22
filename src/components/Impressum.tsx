import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";

export function Impressum() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
              <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("impressum.back")}
            </Button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("impressum.title")}
            </h1>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("impressum.company.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("impressum.company.name")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("impressum.company.address")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("impressum.company.contact")}
                  </h3>
                  <p className="text-muted-foreground">
                    E-Mail:{" "}
                    <a
                      href="mailto:jakob.winkler@widev.at"
                      className="text-foreground hover:underline"
                    >
                      jakob.winkler@widev.at
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("impressum.legal.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("impressum.legal.registration")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("impressum.legal.registrationText")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("impressum.legal.vat")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("impressum.legal.vatText")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("impressum.legal.authority")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("impressum.legal.authorityText")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("impressum.disclaimer.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("impressum.disclaimer.content")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("impressum.privacy.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("impressum.privacy.content")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

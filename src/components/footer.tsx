import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer>
      <p>{t("copyright")}</p>
    </footer>
  );
}

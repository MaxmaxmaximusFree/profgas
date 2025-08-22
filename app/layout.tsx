import { Manrope } from "next/font/google";
import "./reset.scss";
import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Профгаз",
  description: "Мы можем сделать буквально всё что нужно клиенту",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

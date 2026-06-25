import "./globals.scss";
import type { ReactNode } from "react";

export const metadata = {
  title: "Tickets Pro",
  description: "Next.js dashboard starter",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

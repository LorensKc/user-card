"use strict";
import "../styles/globals.scss";

export const metadata = {
  title: "User Cards",
  description: "A web application for displaying and filtering user cards.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

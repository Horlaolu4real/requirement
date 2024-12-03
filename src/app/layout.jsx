import Login from "@/authentication/login";
import "./styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="layout">
        <body className="container">{children}</body>
      </div>
    </html>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="vi">
      <body className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Trang không tồn tại</p>
          <Link href="/vi" className="text-primary hover:underline text-lg">
            Về trang chủ
          </Link>
        </div>
      </body>
    </html>
  );
}

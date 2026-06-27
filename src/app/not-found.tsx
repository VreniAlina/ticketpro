import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link href="/" style={{ color: "#2563eb" }}>
        Go back to dashboard
      </Link>
    </main>
  );
}
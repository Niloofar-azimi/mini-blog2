
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
      <Link href="/" className="text-xl font-bold">
        Mini Blog
      </Link>

      <div className="flex gap-6">
        <Link href="/">صفحه اصلی</Link>
        <Link href="/posts">پست‌ها</Link>
      </div>
    </nav>
  );
}

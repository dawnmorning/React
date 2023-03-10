import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <span style={{ color: router.pathname === "/" ? "red" : "black" }}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <span style={{ color: router.pathname === "/" ? "green" : "black" }}>
          About
        </span>
      </Link>
    </nav>
  );
}

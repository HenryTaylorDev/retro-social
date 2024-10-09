import Image from "next/image";
import styles from "./NavMenu.module.css";
import Link from "next/link";
import { SignInButton } from "./components/buttons";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <div style={{ padding: "0.5em" }}>
        <Link href="/">
          <Image
            src="/logo-2.png"
            alt="NextSpace Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}

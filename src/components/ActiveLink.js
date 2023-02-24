import Link from "next/link";
import { useRouter } from "next/router";
export default function ActiveLink({ href, children, className }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} ${
        router.pathname.split("/")[1] === href.substring(1)
          ? "text-gold font-semibold"
          : "text-[#a89268]"
      } hover:text-gold hover:scale-105 transition-transform duration-200 ease-in-out`}
    >
      {children}
    </Link>
  );
}

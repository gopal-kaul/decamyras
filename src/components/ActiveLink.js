import Link from "next/link";
import { useRouter } from "next/router";
export default function ActiveLink({ href, children, className, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} ${router.pathname === href ? "text-gold font-semibold" : "text-[#a89268]"} hover:font-bold hover:text-gold hover:scale-110 transition-transform duration-200 ease-in-out`}
    >
      {children}
    </Link>
  );
}
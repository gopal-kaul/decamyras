import ActiveLink from "./ActiveLink";

export default function Navlinks() {
  return (
    <>
      <li>
        <ActiveLink href="/">home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/products">products</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/aboutus">about us</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/contactus">contact us</ActiveLink>
      </li>
    </>
  );
}

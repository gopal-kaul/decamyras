import ActiveLink from "./ActiveLink";

export default function Navlinks() {
  return (
    <>
      <ActiveLink href="/">home</ActiveLink>
      <ActiveLink href="/products">products</ActiveLink>
      <ActiveLink href="/services">services</ActiveLink>
      <ActiveLink href="/aboutus">about us</ActiveLink>
      <ActiveLink href="/contactus">contact us</ActiveLink>
    </>
  );
}

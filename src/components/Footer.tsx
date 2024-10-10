import { FooterLinkProps } from "../common/types/Footer.types";

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className="mt-3 hover:underline">
      {label}
    </a>
  );
};

function Footer() {
  const links: FooterLinkProps[] = [
    { href: "#", label: "ABOUT" },
    { href: "#", label: "BLOG" },
    { href: "#", label: "STORE" },
    { href: "#", label: "EFFICACY" },
    { href: "#", label: "CAREERS" },
    { href: "#", label: "INVESTORS" },
    { href: "#", label: "TERMS" },
    { href: "#", label: "PRIVACY" },
  ];

  return (
    <div className="flex justify-center font-din-round text-[13px] flex-wrap mt-5 text-[#B2BEC4] space-x-5">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href} label={link.label} />
      ))}
    </div>
  );
}

export default Footer;

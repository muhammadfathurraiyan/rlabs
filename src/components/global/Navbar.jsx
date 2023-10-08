"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ImLab, ImHome3, ImInfo } from "react-icons/im";

const Navbar = () => {
  const path = usePathname();
  const links = [
    { href: "/", name: "Home", icon: "ImHome3" },
    { href: "/labs", name: "Labs", icon: "ImLab" },
    { href: "/about", name: "About", icon: "ImInfo" },
  ];

  const Icon = ({ link }) => {
    if (link == "ImInfo") {
      return <ImInfo />;
    } else if (link == "ImHome3") {
      return <ImHome3 />;
    } else {
      return <ImLab />;
    }
  };

  return (
    <nav className="relative z-10 flex items-center justify-between py-5 px-24 max-sm:px-8">
      <Link
        href="/"
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-500"
      >
        RLabs.
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            className={`relative text-xl hover:text-cyan-500 duration-300 ${
              path === link.href && "text-cyan-500 font-semibold"
            }`}
            href={link.href}
          >
            <div className="max-sm:hidden">{link.name}</div>
            <div className="sm:hidden text-2xl">
              <Icon link={link.icon} />
            </div>
            {path === link.href && (
              <motion.span
                layoutId="underline"
                className="max-sm:hidden absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 rounded-full"
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

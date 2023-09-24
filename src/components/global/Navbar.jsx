"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const path = usePathname();
  const links = [
    { href: "/", name: "Home" },
    { href: "/labs", name: "Labs" },
    { href: "/about", name: "About" },
  ];
  return (
    <nav className="relative z-10 flex items-center justify-between py-5 px-24 max-sm:px-8">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-cyan-500">
        RLabs.
      </h1>
      <div className="flex items-center gap-8 max-sm:gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            className={`relative hover:text-cyan-500 duration-300 ${path === link.href && "text-cyan-500"}`}
            href={link.href}
          >
            {link.name}
            {path === link.href && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-0.5 w-full bg-cyan-500 rounded-full"
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

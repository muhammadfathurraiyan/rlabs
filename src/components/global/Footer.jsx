import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative w-full py-16 px-8 flex flex-col items-center gap-12">
      <div className="absolute top-0 px-20 py-[2px] rounded-full bg-gradient-to-r from-cyan-800 to-cyan-500"></div>
      <div className="flex flex-col items-center gap-2">
        <p>Get in touch!</p>
        <div className="flex items-center justify-center gap-2">
          <Link className="hover:text-cyan-600 duration-300 text-3xl" target="_blank" href="https://www.instagram.com/muhammadfathurraiyan/">
            <FaInstagram />
          </Link>
          <Link className="hover:text-cyan-600 duration-300 text-3xl" target="_blank" href="https://www.linkedin.com/in/muhammadfathurraiyan/">
            <FaLinkedin />
          </Link>
          <Link className="hover:text-cyan-600 duration-300 text-3xl" target="_blank" href="https://github.com/muhammadfathurraiyan">
            <FaGithub />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-cyan-500 duration-300" href="/">
            Home
          </Link>
          |
          <Link className="hover:text-cyan-500 duration-300" href="/labs">
            Labs
          </Link>
          |
          <Link className="hover:text-cyan-500 duration-300" href="/about">
            About
          </Link>
        </div>
        <small className="text-center">
          Copyright &copy; 2023 RLabs. <br /> Site designed with love by:{" "}
          <a target="_blank" href="https://muhammadfathurraiyan.site/" className="font-semibold hover:text-cyan-500 duration-300 cursor-pointer">
            Raiyan.
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

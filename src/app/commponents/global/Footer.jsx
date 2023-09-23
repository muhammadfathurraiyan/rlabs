import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative z-10  w-full py-5 px-8 flex flex-col items-center gap-12">
      <div className="px-20 py-[2px] rounded-full bg-gradient-to-r from-orange-800 to-orange-500"></div>
      <div className="relative z-10 flex flex-col items-center gap-2">
        <p>Get in touch!</p>
        <div className="flex items-center justify-center gap-2">
          <Link className="hover:text-orange-600 duration-300 text-3xl" href="">
            <FaInstagram />
          </Link>
          <Link className="hover:text-orange-600 duration-300 text-3xl" href="">
            <FaLinkedin />
          </Link>
          <Link className="hover:text-orange-600 duration-300 text-3xl" href="">
            <FaGithub />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-orange-500 duration-300" href="/">
            Home
          </Link>
          |
          <Link className="hover:text-orange-500 duration-300" href="/labs">
            Labs
          </Link>
          |
          <Link className="hover:text-orange-500 duration-300" href="/about">
            About
          </Link>
        </div>
        <small className="text-center">
          Copyright &copy; 2023 RLabs. <br /> Site designed with love by:{" "}
          <a className="font-semibold hover:text-orange-500 duration-300 cursor-pointer">
            Raiyan.
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

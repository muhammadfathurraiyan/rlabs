import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between py-5 px-24 max-sm:px-8">
      <h1 className="relative z-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-500">RLabs.</h1>
      <div className="relative z-10 flex items-center gap-4">
        <Link className="hover:text-orange-500 duration-300" href="/">Home</Link>
        <Link className="hover:text-orange-500 duration-300" href="/labs">Labs</Link>
        <Link className="hover:text-orange-500 duration-300" href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

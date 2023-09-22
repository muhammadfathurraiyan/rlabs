import Link from "next/link";
import Navbar from "./commponents/Navbar";
import Footer from "./commponents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] flex flex-col justify-center gap-6 px-32 max-sm:px-8">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Hello there👋.</h1>
          <p className="mb-4">
            Welcome to Rlabs. Rlabs is a collection of my works. I will upload
            my project here. Stay tuned for the next update. Thanks for
            visiting.
          </p>
          <Link
            className="inline-block  px-5 py-3 rounded-xl duration-500 bg-gradient-to-r from-orange-500 via-orange-800 to-orange-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
            href="/labs"
          >
            Get started 🚀
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

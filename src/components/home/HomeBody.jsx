import Link from "next/link"
const HomeBody = () => {
  return (
    <div className="w-full h-[90vh] flex items-center px-32 max-sm:px-8">
        <div className="relative z-10 w-1/2">
          <h1 className="text-4xl font-bold">Raiyan Labs.</h1>
          <p className="mb-4">
            Welcome to Raiyan Labs aka Rlabs. Rlabs is a collection of my works. I will upload
            my project here. Stay tuned for the next update. Thanks for
            visiting.
          </p>
          <Link
            className="inline-block px-5 py-3 rounded-xl duration-500 bg-gradient-to-r from-cyan-800 via-cyan-800 to-cyan-500 bg-size-200 hover:bg-pos-0 bg-pos-100"
            href="/labs"
          >
            Get started 🚀
          </Link>
        </div>
      </div>
  )
}

export default HomeBody
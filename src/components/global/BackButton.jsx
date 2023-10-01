import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <Link
      className="fixed font-semibold top-0 left-24 max-sm:left-8 flex items-center gap-2 text-lg hover:text-cyan-500 duration-300"
      href="/labs"
    >
      <FaArrowLeft /> Back to the future🚀.
    </Link>
  );
};

export default BackButton;

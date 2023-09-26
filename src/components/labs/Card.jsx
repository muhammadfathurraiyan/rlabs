import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({ title, desc, stacks }) => {
  return (
    <Link href="">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
        className="bg-zinc-800 w-72 flex flex-col rounded-2xl"
      >
        <div className="h-[25vh]">
          <img
            className="object-cover rounded-t-2xl max-h-full min-w-full align-bottom"
            src="https://picsum.photos/800"
            alt=""
          />
        </div>
        <div className="p-4 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="">{desc}</p>
          <div className="flex gap-2 flex-wrap">
            {stacks.map((stack) => (
              <p className={`p-1 text-sm rounded-md ${stack.color}`}>
                #{stack.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;

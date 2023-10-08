import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, desc, stacks, href, img, key }) => {
  return (
    <Link key={key} className="grow w-72" href={href}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.8, type: "spring", stiffness: 200, damping: 8 } }}
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 200, damping: 8 },
        }}
        className="bg-zinc-800 border-2 border-zinc-950 w-full flex flex-col rounded-2xl"
      >
        <div className="h-[25vh]">
          <Image
            className="object-cover rounded-t-2xl max-h-full min-w-full align-bottom"
            src={img}
            alt="image"
            width={288}
            height={288}
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl">{title}</h2>
          <p className="">{desc}</p>
          <div className="flex gap-2 flex-wrap">
            {stacks.map((stack, index) => (
              <p key={index} className={`p-1 text-sm rounded-md ${stack.color}`}>
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

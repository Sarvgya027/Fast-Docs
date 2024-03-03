import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  const [showTag, setShowTag] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.5}
      className="flex-shrink relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="realtive text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full w-full left-0 ">
        <div className="flex items-center justify-between mb-2 py-3 px-8">
          <h5>{data.size}</h5>
          <span
            onClick={() => setShowTag(!showTag)} // Toggle tag visibility
            className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center"
          >
            {showTag ? (
              <IoMdClose /> // Cross icon
            ) : (
              <LiaDownloadSolid color="#fff" size="1.5em" /> // Download icon
            )}
          </span>
        </div>

        {showTag && data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;

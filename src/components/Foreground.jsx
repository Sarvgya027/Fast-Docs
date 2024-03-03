import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  // const data = [icon, desc, filesize, closeOrDownloadSwithc, tagdetails];

  const ref = useRef(null);

  const data = [
    {
      desc: "Sample Document",
      size: "7.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "download now", tagColor: "green" },
    },
    {
      desc: "Demo File",
      size: "3.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "download now", tagColor: "blue" },
    },
    {
      desc: "List PDF",
      size: "4.4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "download now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap"
    >
      {data.map((item) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

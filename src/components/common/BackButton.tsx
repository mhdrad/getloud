import { useEffect, useState } from "react";
import Link from "next/link";
import { FC } from "react";
import { motion as Motion } from "framer-motion";

const Categories: FC = () => {
  const [curserX, setCurserX] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleBackButtonMotion);

    return () => {
      window.removeEventListener("mousemove", handleBackButtonMotion);
    };
  }, []);

  const handleBackButtonMotion = ({ pageX: x, pageY: y }: MouseEvent) => {
    // object follow mouse curser only in header
    if (y < 40) {
      let objX = x;
      // dont let the object go outside
      if (objX - 80 < 0) objX = 100;
      if (objX + 80 > window.innerWidth) objX = window.innerWidth - 100;

      setCurserX(objX - 100);
    }
  };

  return (
    <div className="h-10 relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/link-passhref */}
      <Link href={"/"}>
        <Motion.a
          className="text-gray-dark h-10 px-4 flex items-center opacity-40 transition-opacity hover:text-white hover:opacity-90"
          href="#"
          style={{ x: "50%" }}
          animate={{ x: curserX }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block mr-[12px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Motion.a>
      </Link>
    </div>
  );
};

export default Categories;

import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.8rem)" },
};

interface TabProps {
  active: boolean
  selectTab: any
  children: React.ReactNode
}

const TabButton = ({ active, selectTab, children }: TabProps) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button className="mt-2" onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#348F50]  mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
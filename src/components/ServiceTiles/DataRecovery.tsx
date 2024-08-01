import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import bg from "@/assets/images/trackpad.png";

const DataRecovery = () => {
  const { style, componentRef } = useScrollGrow();

  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-light-gray h-[415px] rounded-2xl col-span-6 lg:col-span-7"
    >
      <div style={myStyle} className=" rounded-2xl ">
        <p>Battery replacement</p>
        <p>
          Get back to 100% battery health. With 6 month replacement warranty.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default DataRecovery;

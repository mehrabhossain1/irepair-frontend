import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import bg from "@/assets/images/trackpad.png";

const BatteryReplacement = () => {
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
      className="bg-light-gray h-[415px] rounded-2xl col-span-12 "
    >
      <div style={myStyle} className=" rounded-2xl p-10">
        <p className="font-semibold text-xl mb-28">Battery replacement</p>
        <p className="text-4xl place-content-center w-1/2">
          Get back to 100% battery health. With 6 month replacement warranty.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default BatteryReplacement;

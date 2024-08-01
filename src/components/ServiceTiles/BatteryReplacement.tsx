import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import bg from "@/assets/images/trackpad.png";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    width: "628px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right", // Ensure it's aligned to the right
    marginLeft: "auto", // Push it to the end
  };

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-light-gray h-[415px] rounded-2xl col-span-12 flex"
    >
      {/* Text Section */}
      <div className="flex-1 p-10">
        <p className="font-semibold text-xl mb-10">Battery replacement</p>
        <p className="text-4xl w-full">
          Get back to 100% battery health. With 6 month replacement warranty.
        </p>
      </div>

      {/* Image Section */}
      <div style={myStyle} className="rounded-2xl"></div>
    </motion.div>
  );
};

export default BatteryReplacement;

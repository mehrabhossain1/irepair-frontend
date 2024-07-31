import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import bg from "@/assets/images/trackpad.png";

const BatteryReplacement = () => {
  // const { style, componentRef } = useScrollGrow();

  const myStyle = {
    backgroundImage: `url(${bg})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.div
      style={myStyle}
      // ref={componentRef}
      className=" h-[415px] rounded-2xl col-span-12 object-contain"
    >
      <p>Battery replacement</p>
      <p>
        Get back to 100% battery health. With 6 month replacement warranty.{" "}
      </p>
    </motion.div>
  );
};

export default BatteryReplacement;

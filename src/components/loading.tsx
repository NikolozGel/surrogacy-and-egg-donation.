import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="flex items-center justify-center my-15">
      <motion.div
        className="spinner flex"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "100px",
          height: "100px",
          border: "5px solid #ccc",
          borderTop: "5px solid #4D5BCE",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

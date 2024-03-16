import { useProgress } from "@react-three/drei";
import "./LoadingScreen.css";
import { AnimatePresence, motion, easeOut } from "framer-motion";

export const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: easeOut } }}
        >
          <span className="loading-status">Loading {progress.toFixed(2)}%</span>
          <img
            className="title"
            src="/PFP_screen_logo_white.webp"
            alt="Falling Follies logo"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

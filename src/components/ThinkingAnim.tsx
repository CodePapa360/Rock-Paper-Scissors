import { motion } from "framer-motion";

function ThinkingAnim() {
  return (
    <div className="relative bg-slate-700/20 rounded-full size-24 sm:size-40 md:size-60 flex justify-center items-center text-2xl select-none p-4">
      <motion.span
        className="absolute size-1/2 bg-slate-700/60 rounded-full"
        animate={{ rotate: 360, scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="absolute size-4/5 bg-slate-700/60 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="absolute size-full bg-slate-700/40 rounded-full "
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute size-full bg-slate-700/20 rounded-full "
        animate={{ scale: [1, 2.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

export default ThinkingAnim;

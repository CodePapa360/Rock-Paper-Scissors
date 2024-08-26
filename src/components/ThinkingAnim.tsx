function ThinkingAnim() {
  return (
    <div className="relative bg-slate-700/20 rounded-full size-24 sm:size-40 md:size-60 flex justify-center items-center text-2xl select-none p-4">
      <span className="absolute animate-ping size-1/2 bg-slate-700/60 rounded-full"></span>
      <span className="absolute animate-ping size-4/5 bg-slate-700/60 rounded-full"></span>
    </div>
  );
}

export default ThinkingAnim;

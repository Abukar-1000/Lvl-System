import NeonFlowField from "./NeonFlowField";

export default function StatCard() {
  return (
    <div className="relative w-[720px] h-[380px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 ring-1 ring-purple-400/30">
      {/* your stat UI here */}
      <div className="relative z-10 p-8 text-white">
        <h2 className="text-5xl font-extrabold">LV. 16</h2>
        <p className="text-purple-200/90 mt-2 tracking-wider">I Need to Stop Faking</p>
        {/* ...stats grid... */}
      </div>

      {/* neon paths behind content */}
      <NeonFlowField
        color="#b56cff"
        accent="#6af2ff"
        density={0.4}
        fade={0}
        blur={20}
        speed={2.0}
      />
    </div>
  );
}

import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#0A2540] text-white animate-in fade-in duration-300"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="bg-white rounded-xl p-3 inline-block">
        <Image
          src="/images/bts_logo.png"
          alt="Bhadeya Technical Services LLC - GPR scanning and core cutting Dubai UAE - Loading"
          width={220}
          height={80}
          className="h-16 w-auto object-contain animate-pulse md:h-20"
          priority={true}
        />
      </div>
      <span className="sr-only">Loading Bhadeya Technical Services</span>
    </div>
  );
}

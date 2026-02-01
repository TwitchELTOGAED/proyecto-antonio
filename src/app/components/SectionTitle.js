export default function SectionTitle({ title }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
        {title}
      </h2>
      {/* La línea roja decorativa */}
      <div className="h-1 w-16 bg-[#E10600] mt-1 rounded-full"></div>
    </div>
  );
}
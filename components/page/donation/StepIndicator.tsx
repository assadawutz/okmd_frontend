
export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="relative flex justify-center items-center mb-12 w-full">
      {/* เส้นยาว */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>

      {/* วงกลม Step */}
      <div className="flex justify-between w-2/3">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-10 h-10 rounded-full z-10 flex items-center justify-center font-bold text-sm transition
              ${
                currentStep === step
                  ? "bg-[#5292A0] text-white"
                  : "bg-[#74CEE2] text-white"
              }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

import Button from "@/components/ui/Button";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";

interface Step1AmountProps {
  predefinedAmounts: number[];
  selectedAmount: number | null;
  customAmount: string;
  handlePredefinedClick: (amount: number) => void;
  handleCustomChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goToStep: (step: number) => void;
}

interface Step1AmountProps {
  predefinedAmounts: number[];
  selectedAmount: number | null;
  customAmount: string;
  handlePredefinedClick: (amount: number) => void;
  handleCustomChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goToStep: (step: number) => void;
}

export default function Step1Amount({
  predefinedAmounts,
  selectedAmount,
  customAmount,
  handlePredefinedClick,
  handleCustomChange,
  goToStep,
}: Step1AmountProps) {
  return (
    <div className="text-center md:px-4 md:py-10">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-10 text-gray-900">
        เลือกจำนวนเงิน
      </h2>

      {/* Amount Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* Predefined Amount Buttons */}
        {predefinedAmounts.map((amount: number) => (
          <button
            key={amount}
            onClick={() => handlePredefinedClick(amount)}
            className={`h-30 w-full flex flex-col items-center justify-center rounded-2xl text-4xl font-semibold border transition
              ${
                customAmount
                  ? "border-[#7F8288] bg-white text-[#1A8E9D]"
                  : selectedAmount === amount
                  ? "border-[#00B4D8] bg-[#E6F7FB] text-[#1A8E9D]"
                  : "border-[#7F8288] bg-white text-[#1A8E9D] hover:border-[#00B4D8]"
              }
            `}
          >
            <div className="flex gap-4 justify-end text-end">
              {amount.toLocaleString()}
              <span className="text-[#A7A9AD] text-xl mt-1 flex items-end">
                บาท
              </span>
            </div>
          </button>
        ))}

        {/* Custom Amount */}
        <div
          className={`h-30 w-full rounded-2xl p-6 text-left transition flex flex-col justify-center border
            ${
              customAmount
                ? "border-[#00B4D8] bg-[#E6F7FB] text-[#1A8E9D]"
                : "border-[#7F8288] hover:border-[#00B4D8]"
            }
          `}
        >
          <p className="text-2xl font-semibold text-[#1A8E9D] text-center">
            ระบุจำนวน
          </p>

          <div className="flex items-center mt-3">
            <input
              type="text"
              placeholder=""
              value={customAmount}
              onChange={handleCustomChange}
              className="w-full bg-transparent border-b border-gray-400 text-2xl text-gray-700 px-2 py-1 focus:outline-none"
            />
            <span className="ml-3 text-gray-500 mt-1 flex items-end text-xl">
              บาท
            </span>
          </div>
        </div>
      </div>

      {/* Note */}
      <p className="mt-8 text-gray-600 text-lg mb-8">
        ผู้บริจาคสามารถนำเงินบริจาค ไปหักลดหย่อนภาษีได้ 2 เท่า{" "}
        <span className="text-red-500">*</span>
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-15 max-w-lg mx-auto">
        <Button size="md" variant="outline" onClick={() => goToStep(1)}>
          <MdOutlineArrowBackIos className="w-5 h-5 mr-2" /> ย้อนกลับ
        </Button>

        <Button onClick={() => goToStep(2)} size="md">
          ถัดไป
        </Button>
      </div>
    </div>
  );
}

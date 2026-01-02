"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import StepIndicator from "./StepIndicator";
import Step1Amount from "./Step1Amount";
import Step2Receipt from "./Step2Receipt";
import Step3Confirm from "./Step3Confirm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function DonationAmountSelector({ id }: { id: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [files, setFiles] = useState<File[]>([]);
  // อ่าน step จาก URL (default = 1)
  const initialStep = Number(searchParams.get("step")) || 1;

  const [currentStep, setCurrentStep] = useState(initialStep);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>("qr");
  // step 2
  const [donorType, setDonorType] = useState<"personal" | "corporate">(
    "personal"
  );

  const [form, setForm] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    citizenId: "",
  });

  // เปลี่ยนหน้า = เปลี่ยน URL
  const goToStep = (step: number) => {
    router.push(`/donation/${id}?step=${step}`);
    setCurrentStep(step);
  };

  // handle amount
  const handlePredefinedClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const _amountSelected =
    selectedAmount || (customAmount ? parseInt(customAmount, 10) : 0);
  void _amountSelected; // suppress unused warning

  // Sync UI เมื่อเปลี่ยน step ใน URL
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);
  const donationAmount = customAmount
    ? parseInt(customAmount, 10)
    : selectedAmount || 0;
  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/donation-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            บริจาค <span className="text-[#74CEE2]">สนับสนุน</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ร่วมขับเคลื่อนสังคมแห่งการเรียนรู้ไปด้วยกัน
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/donation"
          className="hover:text-[#16A7CB] transition-colors"
        >
          บริจาค
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs ">
          {id}
        </span>
      </div>

      {/* CONTENT PANEL */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        {/* STEP INDICATOR */}
        <div className="mb-10">
          <StepIndicator currentStep={currentStep} />
        </div>

        {/* --------------------------------------------------- */}
        {/* STEP 1: เลือกจำนวนเงิน                               */}
        {/* --------------------------------------------------- */}
        {currentStep === 1 && (
          <Step1Amount
            predefinedAmounts={[2000, 1000, 500]}
            selectedAmount={selectedAmount}
            customAmount={customAmount}
            handlePredefinedClick={handlePredefinedClick}
            handleCustomChange={handleCustomChange}
            goToStep={goToStep}
          />
        )}

        {/* --------------------------------------------------- */}
        {/* STEP 2: เลือกบุคคล / นิติบุคคล + ฟอร์ม               */}
        {/* --------------------------------------------------- */}
        {currentStep === 2 && (
          <Step2Receipt
            goToStep={goToStep}
            donorType={donorType}
            setDonorType={setDonorType}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            form={form}
            setForm={setForm}
          />
        )}

        {/* --------------------------------------------------- */}
        {/* STEP 3: Confirm                                        */}
        {/* --------------------------------------------------- */}
        {currentStep === 3 && (
          <Step3Confirm
            amount={donationAmount}
            paymentMethod={paymentMethod}
            files={files}
            setFiles={setFiles}
            goToStep={goToStep}
          />
        )}
      </div>

      <div className="mt-10">
        <Link href="/donation">
          <div className="inline-flex items-center gap-2 text-gray-500 hover:text-[#16A7CB] transition-colors cursor-pointer">
            <ChevronLeft size={18} /> ย้อนกลับ
          </div>
        </Link>
      </div>
    </div>
  );
}

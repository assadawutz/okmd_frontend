"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { DiFsharp } from "react-icons/di";
import { FaStepBackward } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsBank, BsQrCodeScan } from "react-icons/bs";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Dropzone from "@/components/ui/Dropzone";
import DropzoneInput from "@/components/ui/Dropzone";
import DonationLeftBanner from "./DonationLeftBanner";
import StepIndicator from "./StepIndicator";
import Step1Amount from "./Step1Amount";
import Step2Receipt from "./Step2Receipt";
import Step3Confirm from "./Step3Confirm";

const predefinedAmounts = [2000, 1000, 500];

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
    "personal",
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

  const handleCustomChange = (e: any) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const amountSelected =
    selectedAmount || (customAmount ? parseInt(customAmount, 10) : 0);

  // Sync UI เมื่อเปลี่ยน step ใน URL
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);
  const donationAmount = customAmount
    ? parseInt(customAmount, 10)
    : selectedAmount || 0;
  return (
    <div className="grid grid-cols-3">
      {/* LEFT BANNER */}
      <DonationLeftBanner />

      {/* RIGHT PANEL */}
      <div className="col-span-3 md:col-span-2 w-full md:w-2xl mx-auto px-6 py-12 my-auto">
        {/* STEP INDICATOR */}
        <StepIndicator currentStep={currentStep} />

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
            selectedAmount={selectedAmount}
            customAmount={customAmount}
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
    </div>
  );
}

// app/page.tsx
"use client";

import { useState, useCallback, useMemo, type ChangeEvent, type FormEvent } from "react";
import React from "react";

// --- 1. Type Definitions ---

/**
 * @description Type for the complaint form data.
 */
type ComplaintFormData = {
  fullName: string;
  idCard: string;
  address: string;
  subDistrict: string;
  district: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  targetDepartment: string;
  topic: string;
  details: string;
  agreement: boolean;
};

// Initial state structure for the form
const initialFormState: ComplaintFormData = {
  fullName: '', idCard: '', address: '', subDistrict: '', district: '', province: '',
  postalCode: '', phone: '', email: '', targetDepartment: '', topic: '', details: '', agreement: false,
};

// Helper types for props
type CardChannelProps = { img: string; title: string; subTitle: string; addr: string; tel: string; };
type FormGridProps = {
  label: string; placeholder: string; full?: boolean; type?: "text" | "number" | "select" | "checkbox" | "textarea";
  options?: string[]; colSpan?: number; fieldName: keyof ComplaintFormData; value: string | boolean;
  error?: string; onChange: (value: string | boolean) => void;
};
type FormRowProps = { children: React.ReactNode; };
type ThProps = { children: React.ReactNode; };
type TdProps = { children: React.ReactNode; };

// --- 2. Helper Components (UI) ---

function FormRow({ children }: FormRowProps) {
  return (
    <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 mb-6 sm:mb-7 md:mb-8 gap-y-3 sm:gap-y-4">
      {children}
    </div>
  )
}

function FormGrid({ label, placeholder, full, type = "text", options = [], colSpan = 6, fieldName, value, error, onChange }: FormGridProps) {
  // Responsive grid columns
  const containerClass = full ? "col-span-12" : `col-span-12 sm:col-span-6 md:col-span-${colSpan}`;
  const isInvalid = !!error;

  // Responsive input class
  const baseInputClass = "mt-3 sm:mt-4 border p-3 sm:p-4 md:p-5 rounded-xl w-full text-sm sm:text-base md:text-lg text-gray-800 focus:ring-4";
  const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-100";
  const validClass = "border-gray-300 focus:border-[#74CEE2] focus:ring-[#74CEE2]/50";

  const inputClass = `${baseInputClass} ${isInvalid ? errorClass : validClass}`;

  if (type === "checkbox") {
    return (
      // Replaced col-span-12 mt-8
      <div className="col-span-12 mt-8">
        {/* Replaced flex items-start */}
        <div className="flex items-start">
          <input
            id={`checkbox-${fieldName}`}
            type="checkbox"
            checked={!!value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
            // Replaced w-7 h-7 text-[#74CEE2] bg-gray-100 border-gray-300 rounded focus:ring-[#74CEE2]/50 mt-1 shrink-0
            className={`w-7 h-7 text-[#74CEE2] bg-gray-100 border-gray-300 rounded focus:ring-[#74CEE2]/50 mt-1 shrink-0 ${isInvalid ? 'border-red-500' : ''} cursor-pointer`}
          />
          {/* Replaced ml-4 text-lg font-normal text-gray-700 leading-9 */}
          <label htmlFor={`checkbox-${fieldName}`} className="ml-4 text-lg font-normal text-gray-700 leading-9 cursor-pointer">
            {label}
          </label>
        </div>
        {/* Replaced text-red-500 text-sm mt-1 pl-11 */}
        {isInvalid && <p className="text-red-500 text-sm mt-1 pl-11">{error}</p>}
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {/* Replaced font-bold text-gray-700 text-xl */}
      <label className="font-bold text-gray-700 text-xl">{label}</label>

      {type === "select" ? (
        <select
          value={value as string}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
          // Replaced text-gray-700 appearance-none bg-white
          className={`${inputClass} text-gray-700 appearance-none bg-white cursor-pointer`}
        >
          {/* Replaced text-gray-400 */}
          <option value="" disabled className="text-gray-400">{placeholder}</option>
          {/* Replaced text-gray-800 */}
          {options.map(option => <option key={option} value={option} className="text-gray-800">{option}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value as string}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          // Added h-[250px] resize-none
          className={`${inputClass} h-[250px] resize-none`}
        />
      ) : (
        <input
          type={type === "number" ? "text" : type} // Simplified number input handling for text validation
          placeholder={placeholder}
          value={value as string}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {/* Replaced text-red-500 text-sm mt-1 */}
      {isInvalid && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function Th({ children }: ThProps) {
  // Replaced px-5 py-4 text-base md:text-lg font-semibold whitespace-nowrap
  return (
    <th className="px-5 py-4 text-base md:text-lg font-semibold whitespace-nowrap">{children}</th>
  );
}
function Td({ children }: TdProps) {
  // Replaced px-5 py-4 text-base md:text-lg text-gray-700 leading-relaxed align-top
  return (
    <td className="px-5 py-4 text-base md:text-lg text-gray-700 leading-relaxed align-top">{children}</td>
  );
}
function CardChannel({ title, subTitle, addr, tel, img }: CardChannelProps) {
  // Replaced bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-10
  return (
    <div className="bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] p-6 flex flex-col gap-10 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] cursor-pointer">

      {/* LOGO */}
      {/* Replaced w-full h-[180px] flex justify-center */}
      <div className="w-full h-[180px] flex justify-center">
        <img
          src={img}
          alt={title}
          // Adjusted image sizing for better fit
          className="w-[300px] h-[180px] object-contain"
        />
      </div>

      {/* SUBTITLE */}
      <div>
        {/* Replaced text-[18px] font-bold text-[#1B1D20] */}
        <p className="text-xl font-bold text-[#1B1D20]">
          ส่วนงานกลาง :
        </p>
        {/* Replaced text-[16px] text-[#1B1D20] leading-[26px] */}
        <p className="text-lg text-gray-700 leading-[26px]">
          {subTitle}
        </p>
      </div>

      {/* ADDRESS */}
      {/* Replaced flex items-start gap-4 */}
      <div className="flex items-start gap-4">
        {/* Replaced w-6 h-6 text-black mt-1 shrink-0 */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-black mt-1 shrink-0">
          <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 4.5 6.75 12.75 6.75 12.75S18.75 13.5 18.75 9A6.75 6.75 0 0 0 12 2.25Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
        {/* Replaced text-lg text-gray-700 leading-8 whitespace-pre-line */}
        <p className="text-lg text-gray-700 leading-8 whitespace-pre-line">
          {addr}
        </p>
      </div>

      {/* PHONE */}
      {/* Replaced flex items-start gap-4 */}
      <div className="flex items-start gap-4">
        {/* Replaced w-6 h-6 text-black mt-1 shrink-0 */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-black mt-1 shrink-0">
          <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.848 1.317l.74 2.22c.162.486.046 1.05-.33 1.433l-1.802 1.802a15.823 15.823 0 0 0 6.275 6.275l1.802-1.802a1.272 1.272 0 0 1 1.433-.33l2.22.74c.73.238 1.317.988 1.317 1.848V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
        </svg>
        {/* Replaced text-lg text-[#0b5a72] font-bold */}
        <p className="text-lg text-[#0b5a72] font-bold">
          {tel}
        </p>
      </div>

    </div>
  );
}



// --- 3. Section Components ---

function ChannelsSection() {
  return (
    // Replaced space-y-10
    <div className="space-y-10">
      {/* Replaced bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl shadow-lg */}
      <div className="bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl shadow-lg">
        ช่องทางการร้องเรียนการทุจริตและประพฤติมิชอบ
      </div>

      {/* Replaced grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardChannel
          title="OKMD"
          subTitle="สำนักงานบริหารและพัฒนาองค์ความรู้ (สบร.)"
          addr="69/18–19 อาคารวิทยบริการวิทยาลัยกรุงเทพ ชั้น 18 ...\nถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900" // Added line break
          tel="02 105 6552"
          img="/i1.png"
        />

        <CardChannel
          title="มิวเซียมสยาม"
          subTitle="สำนักงานบริหารและพัฒนาองค์ความรู้"
          addr="4 ถนนสนามไชย เขตพระนคร ...\nกรุงเทพมหานคร 10200" // Added line break
          tel="02 225 2777"
          img="/i2.png"
        />

        <CardChannel
          title="TKPark"
          subTitle="สถาบันอุทยานการเรียนรู้ (สอร.)"
          addr="อาคารจีเอ็มเอ็ม แกรมมี่ เพลส ชั้น 17 ...\nถนนสุขุมวิท 21 (อโศก) แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110" // Added line break
          tel="02 264 5963"
          img="/i3.png"
        />

      </div>

      {/* Replaced bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl mt-16 shadow-lg */}
      <div className="bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl mt-16 shadow-lg">
        ช่องทางไปรษณีย์อิเล็กทรอนิกส์
      </div>

      {/* Replaced p-10 border border-gray-200 rounded-xl shadow-lg bg-white flex flex-col sm:flex-row gap-10 items-start */}
      <div className="p-10 border border-gray-200 rounded-xl shadow-lg bg-white flex flex-col sm:flex-row gap-10 items-start">
        {/* Replaced shrink-0 w-full sm:w-32 h-28 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center p-5 */}
        <div className="shrink-0 w-full sm:w-32 h-28 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center p-5">
          {/* Email Icon */}
          {/* Replaced w-14 h-14 text-gray-500 */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.902l-8.68 4.787a2.25 2.25 0 0 1-2.138 0l-8.68-4.787A2.25 2.25 0 0 1 2.25 6.993V6.75" />
          </svg>
        </div>
        <div>
          {/* Replaced text-gray-700 text-xl font-medium */}
          <p className="text-gray-700 text-xl font-medium">E-Mail : <span className="font-bold">express@okmd.or.th</span></p>
          {/* Replaced text-gray-700 text-xl font-medium mt-4 border-t pt-4 */}
          <p className="text-gray-700 text-xl font-medium mt-4 border-t pt-4">ช่องทางไปรษณีย์</p>
          {/* Replaced text-gray-600 mt-2 leading-8 text-lg */}
          <p className="text-gray-600 mt-2 leading-8 text-lg">
            สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) 69/18–19 อาคารวิทยบริการวิทยาลัยกรุงเทพ ชั้น 18 ถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10400
          </p>
        </div>
      </div>
    </div>
  );
}

function FormSection() {
  const [formData, setFormData] = useState<ComplaintFormData>(initialFormState);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ComplaintFormData, string>>>({});
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const provinceOptions = ["กรุงเทพมหานคร", "เชียงใหม่", "ชลบุรี"];
  const departmentOptions = ["สำนักงานบริหาร", "มิวเซียมสยาม", "TK Park"];

  // Manual Update Handler
  const handleUpdate = useCallback((fieldName: keyof ComplaintFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    // Clear error on change
    setFormErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  // Manual Form Validation
  const validateForm = (data: ComplaintFormData): Partial<Record<keyof ComplaintFormData, string>> => {
    const errors: Partial<Record<keyof ComplaintFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.fullName.length < 3) errors.fullName = "กรุณากรอกชื่อ-นามสกุลให้ครบถ้วน";
    // Modified length check for ID card to allow 13 digits only, but allows empty to prevent blocking (as form is not full)
    if (data.idCard.length > 0 && data.idCard.length !== 13) errors.idCard = "กรุณากรอกข้อมูลบัตรประชาชน 13 หลัก";
    if (data.idCard.length === 0) errors.idCard = "กรุณากรอกข้อมูลบัตรประชาชน"; // Made ID Card required for this example
    if (data.address.length < 5) errors.address = "กรุณากรอกที่อยู่ผู้แจ้ง";
    if (data.subDistrict.length < 2) errors.subDistrict = "กรุณากรอกตำบล/แขวง";
    if (data.district.length < 2) errors.district = "กรุณากรอกอำเภอ/เขต";
    if (data.province.length === 0) errors.province = "กรุณาเลือกจังหวัด";
    if (data.postalCode.length !== 5) errors.postalCode = "กรุณากรอกรหัสไปรษณีย์ 5 หลัก";
    if (data.phone.length < 9) errors.phone = "กรุณากรอกเบอร์โทรศัพท์ (อย่างน้อย 9 หลัก)";
    if (data.email && data.email.length > 0 && !emailRegex.test(data.email)) errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (data.targetDepartment.length === 0) errors.targetDepartment = "กรุณาเลือกส่วนงานที่ร้องเรียน";
    if (data.topic.length < 5) errors.topic = "กรุณากรอกเรื่องที่ร้องเรียน (อย่างน้อย 5 ตัวอักษร)";
    if (data.details.length < 20) errors.details = "กรุณากรอกรายละเอียดการร้องเรียนอย่างน้อย 20 ตัวอักษร";
    if (data.agreement === false) errors.agreement = "กรุณายินยอมในเงื่อนไขการใช้บริการ";

    return errors;
  };

  // Mock Submission Handler (NO API CALL)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setSubmitMessage('');

    // 1. Client-side Manual Validation
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      // 2. Validation Failed: Set errors
      setFormErrors(errors);
      setSubmissionStatus('error');
      setSubmitMessage('กรุณาตรวจสอบข้อมูลที่กรอกให้ถูกต้อง');
      document.getElementById('complaint-form')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 3. Validation Success: Mock the submission success state
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Success scenario
    setSubmissionStatus('success');
    setSubmitMessage(`ส่งเรื่องร้องเรียนสำเร็จแล้ว! (เลขที่ติดตาม: OKMD-${Date.now().toString().slice(-6)})`);
    setFormData(initialFormState); // Reset form state on success
    setFormErrors({}); // Clear any residual errors
  };

  return (
    // Replaced space-y-10
    <div className="space-y-10">
      {/* Removed:
        <h3 className="text-xl font-bold text-[#74CEE2] mb-10">
          รับเรื่องร้องเรียน
        </h3>
      */}

      {/* Replaced border border-gray-200 rounded-xl shadow-md bg-white p-8 md:p-12 */}
      <form onSubmit={handleSubmit} id="complaint-form" className="border border-gray-200 rounded-xl shadow-md bg-white p-8 md:p-12">

        {/* Status/Error Messages */}
        {(submissionStatus === 'success' || submissionStatus === 'error') && (
          // Replaced p-6 rounded-xl text-xl font-semibold mb-8
          <div className={`p-6 rounded-xl text-xl font-semibold mb-8 ${submissionStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitMessage}
          </div>
        )}

        {/* Header 1: ข้อมูลส่วนตัว */}
        {/* Replaced bg-[#74CEE2] text-white font-semibold px-8 py-5 rounded-xl text-xl md:text-xl mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 */}
        <div className="bg-[#74CEE2] text-white font-semibold px-8 py-5 rounded-xl text-xl md:text-xl mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          ข้อมูลส่วนตัว
          {/* Replaced text-lg font-medium text-right */}
          <div className="text-lg font-medium text-right">(สำหรับผู้ที่มี ThaiID)</div>
        </div>

        {/* ThaiID Button - Large, clear, and separated */}
        {/* Replaced flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 mb-10 border-b pb-8 border-gray-100 */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 mb-10 border-b pb-8 border-gray-100">
          <button
            type="button"
            // Replaced bg-[#0170B2] text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:bg-[#005e99] transition text-center text-xl flex items-center justify-center shrink-0 min-w-36
            className="bg-[#0170B2] text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:bg-[#005e99] transition text-center text-xl flex items-center justify-center shrink-0 min-w-36 cursor-pointer"
            onClick={() => alert("Mock Action: เชื่อมต่อ ThaiID เพื่อกรอกข้อมูลอัตโนมัติ")}
          >
            {/* Replaced text-xl font-bold */}
            <span className="text-xl font-bold">ThaiID</span>
          </button>
          {/* Replaced text-xl font-medium text-gray-700 leading-relaxed */}
          <span className="text-xl font-medium text-gray-700 leading-relaxed">
            คลิก ThaiID เพื่อยืนยันตัวตนและกรอกข้อมูลอัตโนมัติ
          </span>
        </div>

        {/* Form Fields */}
        <FormRow>
          <FormGrid
            label="ชื่อ - นามสกุล (ผู้แจ้ง) *"
            placeholder="กรอกชื่อ - นามสกุล"
            fieldName="fullName"
            value={formData.fullName}
            error={formErrors.fullName}
            onChange={v => handleUpdate('fullName', v as string)}
          />
          <FormGrid
            label="ข้อมูลบัตรประชาชน *"
            placeholder="กรอกข้อมูลบัตรประชาชน"
            fieldName="idCard"
            value={formData.idCard}
            error={formErrors.idCard}
            onChange={v => handleUpdate('idCard', v as string)}
          />
        </FormRow>

        <FormRow>
          <FormGrid
            label="ที่อยู่ผู้แจ้ง *"
            placeholder="กรอกที่อยู่ผู้แจ้ง"
            full
            fieldName="address"
            value={formData.address}
            error={formErrors.address}
            onChange={v => handleUpdate('address', v as string)}
          />
        </FormRow>

        <FormRow>
          <FormGrid
            label="ตำบล/แขวง *"
            placeholder="ตำบล/แขวง"
            colSpan={4}
            fieldName="subDistrict"
            value={formData.subDistrict}
            error={formErrors.subDistrict}
            onChange={v => handleUpdate('subDistrict', v as string)}
          />
          <FormGrid
            label="อำเภอ/เขต *"
            placeholder="อำเภอ/เขต"
            colSpan={4}
            fieldName="district"
            value={formData.district}
            error={formErrors.district}
            onChange={v => handleUpdate('district', v as string)}
          />
          <FormGrid
            label="จังหวัด *"
            placeholder="กรุณาเลือกจังหวัด"
            type="select"
            options={provinceOptions}
            colSpan={4}
            fieldName="province"
            value={formData.province}
            error={formErrors.province}
            onChange={v => handleUpdate('province', v as string)}
          />
        </FormRow>

        <FormRow>
          <FormGrid
            label="รหัสไปรษณีย์ *"
            placeholder="กรอกรหัสไปรษณีย์"
            colSpan={4}
            fieldName="postalCode"
            value={formData.postalCode}
            error={formErrors.postalCode}
            onChange={v => handleUpdate('postalCode', v as string)}
          />
          <FormGrid
            label="โทรศัพท์ *"
            placeholder="กรอกโทรศัพท์"
            colSpan={4}
            fieldName="phone"
            value={formData.phone}
            error={formErrors.phone}
            onChange={v => handleUpdate('phone', v as string)}
          />
          <FormGrid
            label="อีเมล"
            placeholder="กรอกอีเมล"
            colSpan={4}
            fieldName="email"
            value={formData.email}
            error={formErrors.email}
            onChange={v => handleUpdate('email', v as string)}
          />
        </FormRow>

        {/* Form Fields: Target Department and Topic */}
        <FormRow>
          <FormGrid
            label="ส่วนงานที่ร้องเรียน *"
            placeholder="กรุณาเลือกส่วนงานที่ร้องเรียน"
            type="select"
            options={departmentOptions}
            colSpan={6}
            fieldName="targetDepartment"
            value={formData.targetDepartment}
            error={formErrors.targetDepartment}
            onChange={v => handleUpdate('targetDepartment', v as string)}
          />
          <FormGrid
            label="เรื่องที่ร้องเรียน *"
            placeholder="กรอกเรื่องที่ร้องเรียน"
            colSpan={6}
            fieldName="topic"
            value={formData.topic}
            error={formErrors.topic}
            onChange={v => handleUpdate('topic', v as string)}
          />
        </FormRow>

        {/* รายละเอียดการร้องเรียน (Using FormGrid with type="textarea") */}
        <div className="mb-10 col-span-12">
          <label className="font-bold text-gray-700 text-xl">รายละเอียดการร้องเรียน *</label>
          <textarea
            placeholder="กรอกรายละเอียดการร้องเรียน..."
            value={formData.details}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleUpdate('details', e.target.value)}
            // Replaced w-full border ${formErrors.details ? ... : ...} rounded-xl p-5 h-[250px] mt-4 resize-none text-lg
            className={`w-full border ${formErrors.details ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-gray-300 focus:border-[#74CEE2] focus:ring-[#74CEE2]/50'} rounded-xl p-5 h-[250px] mt-4 resize-none text-lg`}
          />
          {/* Replaced text-red-500 text-sm mt-1 */}
          {formErrors.details && <p className="text-red-500 text-sm mt-1">{formErrors.details}</p>}
        </div>

        {/* เอกสารแนบ - Mock File Upload */}
        {/* Replaced mb-10 border-t pt-8 border-gray-100 col-span-12 */}
        <div className="mb-10 border-t pt-8 border-gray-100 col-span-12">
          {/* Replaced font-bold text-gray-700 text-xl block mb-4 */}
          <label className="font-bold text-gray-700 text-xl block mb-4">เอกสารประกอบ (ขนาดไฟล์ไม่เกิน 5 MB เป็นไฟล์ที่ท่านสามารถอัปโหลด gif, jpg, png, pdf, doc, xls) *</label>
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            // Mock file change event
            onChange={(e: ChangeEvent<HTMLInputElement>) => console.log('Mock File Selected:', e.target.files)}
          />
          <label
            htmlFor="file-upload"
            // Replaced inline-block bg-[#929292] text-white font-semibold py-4 px-8 rounded-xl text-lg cursor-pointer hover:bg-gray-700 transition shadow-md
            className="inline-block bg-[#929292] text-white font-semibold py-4 px-8 rounded-xl text-lg cursor-pointer hover:bg-gray-700 transition shadow-md"
            onClick={() => console.log('Mock File Upload Click')} // For users without file input access
          >
            เพิ่มไฟล์เอกสารที่เกี่ยวข้อง (Mock)
          </label>
        </div>

        {/* Checkbox Agreement - Connected to state */}
        <FormGrid
          label="กรุณาเลือกยินยอมในเงื่อนไขการใช้บริการ และนโยบายความเป็นส่วนตัวของ OKMD"
          type="checkbox"
          fieldName="agreement"
          value={formData.agreement}
          error={formErrors.agreement}
          onChange={v => handleUpdate('agreement', v as boolean)} placeholder={""} />

        {/* Submit Button */}
        {/* Replaced mt-16 pt-10 border-t border-gray-200 flex justify-center md:justify-end col-span-12 */}
        <div className="mt-16 pt-10 border-t border-gray-200 flex justify-center md:justify-end col-span-12">
          <button
            type="submit"
            disabled={submissionStatus === 'submitting'}
            // Replaced bg-[#74CEE2] text-white font-bold py-5 px-12 rounded-xl text-xl shadow-xl hover:bg-[#5ab6cc] transition w-full md:w-auto disabled:bg-gray-400
            className="bg-[#74CEE2] text-white font-bold py-5 px-12 rounded-xl text-xl shadow-xl hover:bg-[#5ab6cc] transition w-full md:w-auto disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
          >
            {submissionStatus === 'submitting' ? 'กำลังส่งข้อมูล...' : 'ส่งเรื่องร้องเรียน'}
          </button>
        </div>
      </form>
    </div>
  );
}

function TrackSection() {
  // Mock data for tracking
  const trackData = [
    { date: "01/08/2568\n13:56:07", id: "ZAP001", topic: "ZAP: เรื่องร้องเรียนทั่วไป", department: "สำนักงานบริหารและพัฒนาองค์ความรู้ (ส่วนงานกลาง)", status: "อยู่ระหว่างดำเนินการ" },
    { date: "28/01/2568\n15:40:49", id: "DEF002", topic: "DEF: เรื่องจัดซื้อจัดจ้าง", department: "สำนักงานอุทยานการเรียนรู้ (สอร.)", status: "ดำเนินการแก้ไขเรียบร้อยแล้ว" },
    { date: "15/05/2568\n09:20:10", id: "GHI003", topic: "GHI: เรื่องพฤติกรรมพนักงาน", department: "มิวเซียมสยาม", status: "ดำเนินการแก้ไขเรียบร้อยแล้ว" },
  ];
  const [searchId, setSearchId] = useState("");

  return (
    // Replaced space-y-10
    <div className="space-y-10">
      {/* Removed:
        <h3 className="text-xl font-bold text-[#74CEE2] mb-10">
          ติดตามเรื่องร้องเรียนของท่าน
        </h3>
      */}

      {/* Replaced flex flex-col sm:flex-row justify-start sm:justify-end items-stretch sm:items-center gap-5 */}
      <div className="flex flex-col sm:flex-row justify-start sm:justify-end items-stretch sm:items-center gap-5">
        <input
          placeholder="ใส่เลขบัตรประชาชนของท่าน"
          // Replaced border border-gray-300 p-5 rounded-xl w-full sm:w-80 text-lg focus:ring-4 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]
          className="border border-gray-300 p-5 rounded-xl w-full sm:w-80 text-lg focus:ring-4 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]"
          value={searchId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchId(e.target.value)}
        />
        <button
          // Replaced bg-[#74CEE2] text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:bg-[#5ab6cc] transition whitespace-nowrap text-xl
          className="bg-[#74CEE2] text-white font-bold py-5 px-10 rounded-xl shadow-lg hover:bg-[#5ab6cc] transition whitespace-nowrap text-xl cursor-pointer"
          onClick={() => alert(`Mock ค้นหาเลขที่บัตร: ${searchId}`)}
        >
          ค้นหา
        </button>
      </div>

      {/* Replaced overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-md */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-md">
        {/* Replaced w-full text-left text-sm */}
        <table className="w-full text-left text-sm">
          {/* Replaced bg-[#74CEE2] text-white */}
          <thead className="bg-[#74CEE2] text-white">
            <tr>
              <Th>วันที่</Th>
              <Th>เลขบัตรโครงการ</Th>
              <Th>เรื่องร้องเรียน</Th>
              <Th>ส่วนงานที่ร้องเรียน</Th>
              <Th>สถานะเรื่องร้องเรียน</Th>
            </tr>
          </thead>
          <tbody>
            {trackData.map((item, index) => (
              <tr
                key={index}
                // Replaced border-b border-gray-100 text-gray-700
                className="border-b border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Td>
                  {item.date.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.date.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </Td>
                <Td>{item.id}</Td>
                <Td>{item.topic}</Td>
                <Td>{item.department}</Td>
                <Td>
                  {/* Replaced font-medium px-4 py-2 rounded-full text-base */}
                  <span className={`font-medium px-4 py-2 rounded-full text-base ${item.status.includes('เรียบร้อยแล้ว')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {item.status}
                  </span>
                </Td>
              </tr>
            ))}
            {/* Replaced bg-[#74CEE2]/20 text-gray-800 font-bold */}
            <tr className="bg-[#74CEE2]/20 text-gray-800 font-bold">
              {/* Replaced px-4 py-5 text-lg */}
              <td colSpan={5} className="px-4 py-5 text-lg">
                รวม: <span className="text-xl">{trackData.length}</span> เรื่อง
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReportSection() {
  const rows = ["ม.ค 66", "ก.พ 66", "มี.ค 66", "เม.ย 66"];
  const totalRow = {
    label: "รวมเรื่องร้องเรียน",
    // Values: ส่วนกลาง, สพร., สอร., วันรับเรื่อง, เรื่องทั่วไป, เรื่องจัดซื้อจัดจ้าง, อยู่ระหว่างดำเนินการ, เสร็จสิ้น, หมายเหตุ(not counted)
    values: [10, 5, 2, 3, 15, 12,] // 8 columns after month column
  };

  return (
    // Replaced space-y-10
    <div className="space-y-10">
      {/* Removed:
        <h3 className="text-xl font-bold text-[#74CEE2] mb-10">
          รายงานผลการร้องเรียน
        </h3>
      */}

      {/* Replaced flex justify-end items-center gap-4 mb-6 */}
      <div className="flex justify-end items-center gap-4 mb-6">
        <input type="text" placeholder="เลือกปีที่ค้นหา (Mock)"
          // Replaced border border-gray-300 p-4 rounded-lg text-lg w-56 focus:ring-4 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]
          className="border border-gray-300 p-4 rounded-lg text-lg w-56 focus:ring-4 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]" />
        <button
          // Replaced bg-[#929292] text-white p-5 rounded-xl h-full flex items-center hover:bg-gray-700 transition
          className="bg-[#929292] text-white p-5 rounded-xl h-full flex items-center hover:bg-gray-700 transition cursor-pointer"
          onClick={() => alert("Mock Action: ค้นหาตามปี")}
        >
          {/* Replaced w-8 h-8 */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Replaced overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-md */}
      <div className=" overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-md">
        {/* Replaced w-full text-left text-sm */}
        <table className="w-full text-left text-sm">
          {/* Replaced bg-[#74CEE2] text-white */}
          <thead className="bg-[#74CEE2] text-white">
            <tr>
              <Th>ลำดับ</Th>
              <Th>เดือน</Th>
              <Th>ส่วนกลาง</Th>
              <Th>สพร.</Th>
              <Th>สอร.</Th>
              <Th>วันรับเรื่อง</Th>
              <Th>เรื่องทั่วไป</Th>
              <Th>เรื่องจัดซื้อจัดจ้าง</Th>
              {/* <Th>อยู่ระหว่างดำเนินการ</Th> */}
              <Th>เสร็จสิ้น</Th>
              {/* <Th>หมายเหตุ</Th> */}
            </tr>
          </thead>

          <tbody>
            {rows.map((m, i) => (
              <tr
                key={i}
                // Replaced border-b border-gray-100
                className={`border-b border-gray-100 transition-colors hover:bg-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <Td>{i + 1}</Td>
                <Td>{m}</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                {/* <Td>0</Td> */}
                {/* <Td>-</Td> */}
              </tr>
            ))}

            {/* Replaced bg-[#74CEE2]/40 text-gray-800 font-bold */}
            <tr className="bg-[#74CEE2]/40 text-gray-800 font-bold">
              {/* Replaced px-4 py-5 text-lg */}
              <td colSpan={2} className="px-4 py-5 text-lg">
                {totalRow.label}
              </td>
              {totalRow.values.map((v, i) => (
                // Replaced px-4 py-5 text-lg text-center
                <td key={i} className="px-4 py-5 text-lg text-center">
                  {v}
                </td>
              ))}
              {/* Replaced px-4 py-5 text-lg */}
              <td className="px-4 py-5 text-lg">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FilesSection() {
  const FILES: { name: string; size: string; link: string }[] = [
    { name: "แบบฟอร์มการรับเรื่องร้องเรียน", size: "215 KB", link: "#" },
    { name: "แนวทางการจัดการเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ", size: "128 KB", link: "#" },
    { name: "คู่มือการร้องเรียน", size: "198 KB", link: "#" },
  ];

  return (
    // Replaced space-y-10
    <div className="space-y-10">
      {/* Replaced bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl shadow-lg */}
      <div className="bg-[#74CEE2] text-white font-bold px-8 py-6 rounded-xl text-xl shadow-lg">
        เอกสาร &quot;เรื่องร้องเรียน&quot;
      </div>

      {/* Replaced border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md">
        {FILES.map((f, i) => (
          <a
            key={i}
            href={f.link}
            target="_blank"
            rel="noopener noreferrer"
            // Replaced flex justify-between items-center px-10 py-6 text-gray-700 text-xl border-b border-gray-100 transition hover:bg-gray-100 last:border-b-0
            className={`flex justify-between items-center px-10 py-6 text-gray-700 text-xl border-b border-gray-100 transition cursor-pointer hover:bg-gray-100 last:border-b-0
                      ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
            onClick={(e) => { e.preventDefault(); alert(`Mock Action: Download file ${f.name}`); }}
          >
            {/* Replaced flex items-center gap-5 */}
            <span className="flex items-center gap-5">
              {/* File Icon */}
              {/* Replaced w-7 h-7 text-[#74CEE2] shrink-0 */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#74CEE2] shrink-0">
                <path d="M11.25 4.5A2.25 2.25 0 0 0 9 6.75v12.75a1.5 1.5 0 0 0 1.5 1.5h1.5A.75.75 0 0 1 12 21h4.5a2.25 2.25 0 0 0 2.25-2.25V7.25a.75.75 0 0 1 .168-.49l2.122-2.122a.75.75 0 0 0-.53-1.28H15a2.25 2.25 0 0 0-2.25-2.25H11.25Z" />
              </svg>
              {/* Replaced font-medium */}
              <span className="font-medium">{f.name}</span>
            </span>

            {/* Replaced text-lg text-gray-500 flex items-center gap-4 shrink-0 */}
            <span className="text-lg text-gray-500 flex items-center gap-4 shrink-0">
              {/* Replaced font-normal */}
              <span className="font-normal">({f.size})</span>
              {/* Download Icon */}
              {/* Replaced w-7 h-7 text-gray-500 */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-gray-500">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.41-3.42a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.41 3.42V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12 18.75a.75.75 0 0 1 .75.75v.75a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H14.25a3 3 0 0 1-3-3v-.75a.75.75 0 0 1 .75-.75Zm-9.75-.75a.75.75 0 0 1 .75-.75h-.75a3 3 0 0 0-3 3v.75a.75.75 0 0 1-1.5 0v-.75a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 1 1.5 0v2.25Zm9.75.75a.75.75 0 0 1 .75.75v.75a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H14.25a3 3 0 0 1-3-3v-.75a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// --- 4. Main Component ---

export default function ComplaintPage() {
  const MENUS = [
    { label: "ช่องทางการร้องเรียน", value: "channels" },
    { label: "รับเรื่องร้องเรียน", value: "form" },
    { label: "ติดตามเรื่องร้องเรียนของท่าน", value: "track" },
    { label: "รายงานผลการร้องเรียน", value: "report" },
    { label: "เอกสารเรื่องร้องเรียน", value: "files" },
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState('channels');

  const activeLabel = useMemo(() => {
    return MENUS.find(x => x.value === activeTab)?.label || "";
  }, [activeTab]);

  return (
    <main className="w-full min-h-screen bg-white pb-16 sm:pb-24 md:pb-32">

      {/* Breadcrumb */}
      <div className="container mx-auto pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 sm:mb-5 md:mb-6 font-medium">
          <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
            หน้าหลัก
          </a>
          {" > "}
          รับเรื่องร้องเรียน
          {" > "}
          {/* Replaced text-[#74CEE2] */}
              <span className="text-[#74CEE2]">
                {activeLabel}
              </span>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="col-span-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-[#1B1D20]">
            รับเรื่อง <span className="text-[#74CEE2]">ร้องเรียน</span>
          </h1>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">

          {/* LEFT MENU */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {MENUS.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setActiveTab(m.value)}
                  // Replaced all classes with  prefix and added cursor-pointer
                  className={`
                text-left px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-xl border text-sm sm:text-base md:text-lg shadow-sm transition w-full cursor-pointer
                ${activeTab === m.value
                      ? "bg-[#74CEE2] text-white border-[#74CEE2] font-bold shadow-lg"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 font-semibold"
                    }
              `}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-span-12 md:col-span-9 lg:col-span-9">
            {activeTab === "channels" && <ChannelsSection />}
            {activeTab === "form" && <FormSection />}
            {activeTab === "track" && <TrackSection />}
            {activeTab === "report" && <ReportSection />}
            {activeTab === "files" && <FilesSection />}
          </div>
        </div>
      </div>
    </main>

  );
}
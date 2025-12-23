
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { BsBank, BsQrCodeScan } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface Step2ReceiptProps {
  donorType: string;
  setDonorType: (type: string) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  form: Record<string, string>;
  setForm: (form: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => void;
  goToStep: (step: number) => void;
}

export default function Step2Receipt({
  donorType,
  setDonorType,
  paymentMethod,
  setPaymentMethod,
  form,
  setForm,
  goToStep,
}: Step2ReceiptProps) {
  return (
    <div className="text-center">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        ช่องทางในการบริจาค
      </h2>

      {/* METHOD BUTTONS */}
      <div className="flex justify-center gap-6 mb-6">
        {/* QR */}
        <button
          onClick={() => setPaymentMethod("qr")}
          className={`w-40 h-40 rounded-2xl flex flex-col justify-center items-center transition border
            ${
              paymentMethod === "qr"
                ? "bg-[#5292A0] text-white "
                : " text-black border-[#666]"
            }
          `}
        >
          {/*<img src="/images/qr.svg" className="w-12 h-12 mb-2" />*/}
          <BsQrCodeScan
            className={`w-12 h-12 mb-2 ${paymentMethod === "qr" ? "text-white" : "text-[#00B4D8]"}`}
          />
          <span className="text-lg font-semibold">QR Code</span>
        </button>

        {/* BANK TRANSFER */}
        <button
          onClick={() => setPaymentMethod("bank")}
          className={`w-40 h-40 rounded-2xl flex flex-col justify-center items-center transition border
            ${
              paymentMethod === "bank"
                ? "bg-[#5292A0] text-white border-[#00B4D8]"
                : " text-black border-[#666]"
            }
          `}
        >
          {/*<img src="/images/bank.svg" className="w-12 h-12 mb-2" />*/}
          <BsBank
            className={`w-12 h-12 mb-2 text-[#00B4D8] ${paymentMethod === "bank" ? "text-white" : "text-[#00B4D8]"}`}
          />
          <span className="text-lg font-semibold">โอนเงิน</span>
        </button>
      </div>

      {/* ACCOUNT Box */}
      {paymentMethod === "bank" && (
        <div className="max-w-xl mx-auto mt-6 mb-6 flex items-center justify-between p-4 rounded-xl border border-[#C4C5C8]">
          <div className="flex items-center">
            <img src="/images/krungthai.png" className="w-12 h-12 mr-4" />
            <div className="text-left text-[#666971]">
              <p className="font-semibold">ธนาคารกรุงไทย :</p>
              <p className="mt-1">หมายเลขบัญชี : 067-0-05895-0</p>
            </div>
          </div>

          <button className="px-4 py-2 bg-[#5292A0] text-white rounded-lg">
            คัดลอก
          </button>
        </div>
      )}

      {/* RECEIPT INFO */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        ข้อมูลใบเสร็จรับเงิน
      </h2>

      {/* RECEIPT TYPE BUTTONS */}
      <div className="grid grid-cols-2 w-full mb-6">
        <button
          onClick={() => setDonorType("personal")}
          className={`py-4 text-lg font-semibold transition rounded-l-xl
            ${
              donorType === "personal"
                ? "bg-[#5292A0] text-white"
                : "bg-gray-200 text-gray-700"
            }
          `}
        >
          บุคคล
        </button>

        <button
          onClick={() => setDonorType("corporate")}
          className={`py-4 text-lg font-semibold transition rounded-r-xl
            ${
              donorType === "corporate"
                ? "bg-[#5292A0] text-white"
                : "bg-gray-200 text-gray-700"
            }
          `}
        >
          นิติบุคคล
        </button>
      </div>

      {/* FORM */}
      <div>
        {/* PERSONAL */}
        {donorType === "personal" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <Input
                label="อีเมล"
                required
                type="email"
                placeholder="กรอกอีเมล"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={!form.email.includes("@") ? "อีเมลไม่ถูกต้อง" : ""}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label="เบอร์มือถือ"
                required
                placeholder="กรอกเบอร์"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                error={form.phone === "" ? "กรุณากรอกเบอร์มือถือ" : ""}
              />
            </div>
          </div>
        )}

        {/* CORPORATE */}
        {donorType === "corporate" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="grid-cols-2 grid md:grid-cols-5 gap-4">
                <div className="col-span-2 md:col-span-1">
                  {/* PREFIX */}
                  <Select
                    label="คำนำหน้า"
                    required
                    value={form.prefix}
                    onChange={(e) =>
                      setForm({ ...form, prefix: e.target.value })
                    }
                    options={[
                      { value: "mr", label: "นาย" },
                      { value: "mrs", label: "นาง" },
                      { value: "ms", label: "นางสาว" },
                    ]}
                    placeholder="คำนำหน้า"
                    error={!form.prefix ? "กรุณาเลือกคำนำหน้า" : ""}
                  />
                </div>
                <div className="col-span-2">
                  {/* FIRST NAME */}
                  <Input
                    label="ชื่อ"
                    required
                    placeholder="กรอกชื่อ"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    error={!form.firstName ? "กรุณากรอกชื่อ" : ""}
                  />
                </div>
                <div className="col-span-2">
                  {/* LASTNAME */}
                  <Input
                    label="นามสกุล"
                    required
                    placeholder="กรอกนามสกุล"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    error={!form.lastName ? "กรุณากรอกนามสกุล" : ""}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              {" "}
              {/* EMAIL */}
              <Input
                label="อีเมล"
                required
                type="email"
                placeholder="กรอกอีเมล"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={!form.email ? "กรุณากรอกอีเมล" : ""}
              />
            </div>
            <div className="col-span-1">
              {/* PHONE */}
              <Input
                label="เบอร์มือถือ"
                required
                placeholder="กรอกเบอร์"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                error={!form.phone ? "กรุณากรอกเบอร์มือถือ" : ""}
              />
            </div>
            <div className="col-span-2">
              {/* CITIZEN ID */}
              <Input
                label="หมายเลขบัตรประชาชน"
                required
                placeholder="กรอกเลขบัตรประชาชน"
                value={form.citizenId}
                onChange={(e) =>
                  setForm({ ...form, citizenId: e.target.value })
                }
                error={!form.citizenId ? "กรุณากรอกเลขบัตรประชาชน" : ""}
              />
            </div>
          </div>
        )}
      </div>

      {/* Notice */}
      <div className="max-w-2xl mx-auto mt-6 p-6 bg-[#F1FAFC] rounded-xl">
        หากต้องการใช้สิทธิลดหย่อนภาษีแบบ Donation กรุณากรอกเลขบัตรประชาชน{" "}
        <span className="text-red-500">*</span>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-12 max-w-2xl mx-auto">
        <Button size="md" variant="outline" onClick={() => goToStep(1)}>
          <MdOutlineArrowBackIos className="w-5 h-5 mr-2" /> ย้อนกลับ
        </Button>

        <Button onClick={() => goToStep(3)} size="md">
          ถัดไป
        </Button>
      </div>
    </div>
  );
}

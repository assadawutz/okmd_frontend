import Button from "@/components/ui/Button";
import DropzoneInput from "@/components/ui/Dropzone";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Step3Confirm({
  amount,
  paymentMethod,
  files,
  setFiles,
  goToStep,
}: any) {
  return (
    <div className="text-center bg-white px-4 py-10 rounded-lg">
      <h2 className="text-4xl font-semibold mb-10 text-gray-900">
        ยืนยันการโอนเงิน
      </h2>
      <div className="grid grid-cols-2 gap-6  max-w-2xl mx-auto">
        <p className="text-xl col-span-2">ยอดบริจาคของคุณ</p>
        <p className="text-5xl text-[#00B4D8] font-bold mt-2 col-span-2">
          {amount.toLocaleString()} บาท
        </p>

        {paymentMethod === "qr" && (
          <div className=" col-span-2  bg-white  mt-4 text-center ">
            <div className="border border-gray-300 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Scan QR Code เพื่อบริจาค
              </h2>

              {/* HEADER */}
              <div className="bg-[#0A406A] text-white py-2 rounded-t-lg mb-4 font-semibold">
                ✓ THAI QR PAYMENT
              </div>

              {/* QR CODE BOX */}
              <div className=" rounded-lg p-6">
                <img
                  src={`/images/qrcodee-do.png`}
                  alt="QR Code"
                  className="w-64 h-64 mx-auto"
                />

                <div className="flex justify-between mt-6 text-[#666971] text-lg">
                  <span>จำนวนเงิน</span>
                  <span className="text-red-500 font-bold">
                    {amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    บาท
                  </span>
                </div>

                <div className="flex justify-between mt-2 text-[#666971] text-lg">
                  <span>หมายเลขอ้างอิง</span>
                  <span className="font-semibold text-[#666971]">
                    171169TAW8L
                  </span>
                </div>
              </div>

              {/* SAVE QR BUTTON */}
            </div>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = `/images/qrcodee-do.png`;
                link.download = `qrcodee-do.png`;
                link.click();
              }}
              className="w-full bg-[#5CA7B8] hover:bg-[#4d98aa] text-white font-bold py-3 rounded-lg mt-6 transition"
            >
              บันทึก QR Code
            </button>

            {/* INSTRUCTIONS */}
            <div className="mt-6 text-left text-gray-700 text-sm leading-relaxed bg-gray-100 p-4 rounded-xl">
              <p className="font-semibold mb-2">
                ขั้นตอนการชำระเงินโดยใช้ QR code ผ่าน mobile banking
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  กรณียังไม่มีบัญชี ให้สแกนแบบรับเงินหรือสแกนโอนเงิน mobile
                  banking application
                </li>
                <li>เปิดใช้งาน mobile banking application</li>
                <li>เลือกเมนูโอนเงิน หรือ upload QR หรือ scan QR</li>
                <li>
                  ใช้กล้องถ่ายรูปหรือ upload QR ที่แนบมากับอีเมลนี้ หรือ scan QR
                  ที่ปรากฏบนหน้าจอนี้
                </li>
                <li>
                  ตรวจสอบชื่อบัญชีผู้รับโอนว่าถูกหรือหลังโอนเงินเสร็จให้บันทึกผลลัพธ์
                </li>
                <li>ยืนยันการทำรายการชำระเงิน หลังจากโอนเงินเสร็จ</li>
              </ol>
            </div>
          </div>
        )}

        <DropzoneInput
          label="แนบหลักฐานการโอนเงิน *"
          value={files}
          onChange={(f) => setFiles(f)}
          multiple
          className="col-span-2"
        />
      </div>

      <div className="flex justify-between mt-12 max-w-lg mx-auto">
        <Button onClick={() => goToStep(2)} size="md" variant="outline">
          <MdOutlineArrowBackIos className="w-5 h-5 mr-2" />ย้อนกลับ
        </Button>

        <Button size="md">ยืนยันการบริจาค</Button>
      </div>
    </div>
  );
}

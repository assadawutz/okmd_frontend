import Link from "next/link";

export default function EInfoCenter() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-10">ศูนย์ข้อมูลข่าวสาร</h1>
      <div className="text-lg font-bold">
        ระบบศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของราชการ เป็นระบบที่พัฒนาขึ้น เพื่อทําหน้าที่เป็นระบบบริหารการจัดเก็บ ข้อมูลเอกสาร ตามประเภท, มาตรา 7, มาตรา 9 และเชื่อมโยงกับศูนย์ข้อมูลข่าวสารฯ อื่นๆ เพื่อสร้างเครือข่าย ข้อมูลข่าวสารของราชการที่เผยแพร่ข้อมูลและเป็นประโยชน์ในการเรียกใช้ข้อมูล
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <img src="/ny.png" alt="" className="w-[150px] h-[150px]" />
      </div>
      <div className="mb-5">
        สามารถเรียกใช้งานผ่านเครือข่าย Internet หรือ Intranet โดยพัฒนาในลักษณะ Web Based Application โดยผู้ใช้งาน ทั่วไปเรียกใช้งานผ่านโปรแกรม Web Browser ได้ง่าย และผู้ดูแลข้อมูล สามารถล็อกอินเข้าสู่ระบบ โดยป้อนชื่อและ รหัสผ่าน ที่ได้รับการกําหนด
      </div>
      <hr />
      <div>
        <Link href="https://www.oic.go.th/infocenter5/549/">
        <button className="bg-[#74CEE2] p-3 rounded-lg text-white cursor-pointer mt-10">คลิกรายละเอียด</button>
        </Link>
      </div>
    </div>
  );
}

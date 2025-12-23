export default function BoardInformation() {
  const mockData = [
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2568",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2567",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2566",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2565",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2564",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2563",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2562",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2561",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
    {
      title: "ข้อมูลการเข้าร่วมประชุมของคณะกรรมการ ประจำปีงบประมาณ 2560",
      file: "(ดาวน์โหลดเอกสาร pdf ขนาด 75.63 KB)",
    },
  ];

  return (
    <div className="mx-auto p-6 container">
      <h1 className="text-xl font-bold mb-6">คณะกรรมการและผู้บริหาร</h1>

      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
          คณะกรรมการ
        </button>
        <button className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100">
          ผู้บริหาร
        </button>
        <button className="px-4 py-2 border rounded-lg bg-sky-100 text-sky-700 font-medium">
          ข้อมูลการเข้าประชุมของคณะกรรมการ
        </button>
      </div>

      <div className="bg-sky-100 text-sky-700 px-4 py-3 rounded-lg font-medium mb-4">
        ข้อมูลการเข้าประชุมของคณะกรรมการ
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        {mockData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-4 py-3 border-b last:border-b-0"
          >
            <span className="text-gray-700">{item.title}</span>

            <a
              href="#"
              className="text-sky-600 hover:underline text-sm whitespace-nowrap"
            >
              ( {item.file})
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

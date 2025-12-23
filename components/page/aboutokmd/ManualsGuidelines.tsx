import Link from "next/link";

const title ={
  title:"คู่มือ/แนวทางการปฏิบัติงาน",
  name:"คู่มือหรือแนวปฏิบัติงานของเจ้าหน้าที่",
  name2:"คู่มือหรือแนวทางการให้บริการสำหรับผู้รับบริการหรือผู้มาติดต่อ"
}
const data = [
{
  id: 1,
  title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2566",
  size: "392 KB",
  href: ""
},
{
  id: 2,
  title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2566",
  size: "392 KB",
  href: ""
},
{
  id: 3,
  title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2566",
  size: "392 KB",
  href: ""
}

]
export default function ManualsGuidelines() {

  return (
   <div className="container">
      <h1 className="text-3xl font-bold mb-10">{title.title}</h1>
      <div>
        <div className="w-full  text-white py-4 px-6 text-lg">
          <div className="bg-[#6BCFE3] rounded-t-lg py-4 px-6">
            {title.name}
          </div>
          <div className="flex flex-col">
            {data.map((items,idx)=>(
              <Link 
              href={items.href}
              key={items.id}
              className={`block py-6 px-6 border-b border-gray-100 last:border-0 hover:opacity-80 transition-opacity
              ${idx %2 !==0 ? 'bg-[#F2FBFC] ':'bg-white'}`}
              >
              <span className="text-sm text-black">
                {items.title}
                <p className="text-[#16A7CB]">
                  (ดาวน์โหลด pdf ขนาด {items.size})
                </p>
              </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full  text-white py-4 px-6 text-lg">
          <div className="bg-[#6BCFE3] rounded-t-lg py-4 px-6">
            {title.name2}
          </div>
          <div className="flex flex-col">
            {data.map((items,idx)=>(
              <Link 
              href={items.href}
              key={items.id}
              className={`block py-6 px-6 border-b border-gray-100 last:border-0 hover:opacity-80 transition-opacity
              ${idx %2 !==0 ? 'bg-[#F2FBFC] ':'bg-white'}`}
              >
              <span className="text-sm text-black">
                {items.title}
                <p className="text-[#16A7CB]">
                  (ดาวน์โหลด pdf ขนาด {items.size})
                </p>
              </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

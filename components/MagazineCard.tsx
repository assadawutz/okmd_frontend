import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  img: string
  fileSize: string
}

export default function MagazineCard({ title, img, fileSize }: Props) {
  return (
    <Link
      href={`/shelf-detail`}
      className="
        group w-full flex flex-col gap-6 cursor-pointer 
        transition-all duration-300
      "
    >
      {/* IMAGE WRAPPER */}
      <div
        className="
          relative w-full bg-white rounded-2xl border border-[#ECECED]
          p-8 flex justify-center overflow-hidden
          shadow-sm
          transition-all duration-300
          group-hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)]
          group-hover:border-[#74CEE2]
          group-hover:-translate-y-1
        "
      >
        <Image
          src={img}
          alt={title}
          width={275}
          height={365}
          className="
            rounded-xl object-cover transition-all duration-300
            group-hover:scale-[1.05] group-hover:shadow-2xl
          "
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        <div
          className="
            text-2xl font-bold text-[#1B1D20] 
            transition-all duration-300 
            group-hover:text-[#74CEE2]
          "
        >
          {title}
        </div>

        <div className="text-lg text-[#74CEE2]">
          ดาวน์โหลดเอกสาร pdf ขนาด {fileSize}
        </div>
      </div>
    </Link>
  );
}

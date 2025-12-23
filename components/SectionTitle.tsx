export default function SectionTitle({title='',subtitle=''}){
return(
<div className="mb-10">
<h2 className="text-4xl md:text-5xl font-bold text-[#1B1D20]">{title}</h2>
<p className="text-lg md:text-xl text-[#6ABBCD] mt-1">{subtitle}</p>
</div>
)}

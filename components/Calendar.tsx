// # DIR: src/components/Calendar.tsx
// # WHY: ปฏิทินกิจกรรม + การ์ดกิจกรรม
type EventItem = { date: string; title: string; time: string; link: string }
const events: EventItem[] = [
  { date: "Sep 20", title: "Music Talk: London", time: "15.00–17.00", link: "#" },
  { date: "Sep 21", title: "Nimman Sight", time: "10.00–12.00", link: "#" },
  { date: "Sep 22", title: "Thai Rubrik", time: "09.30–11.00", link: "#" }
]
export default function Calendar(){
  return (
    <section className="bg-okmdLight">
      <div className="container-okmd section-pad">
        <p className="mb-6 text-center text-sm text-gray-600">ทุกกิจกรรมมีแรงบันดาลใจ สู่ความคิดที่แตกต่าง</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {events.map(e => (
              <a key={e.title} href={e.link} className="block rounded border bg-white p-4 shadow hover:shadow-lg">
                <div className="text-sm text-gray-500">{e.date} • {e.time}</div>
                <div className="font-semibold">{e.title}</div>
              </a>
            ))}
          </div>
          <div className="hidden rounded border bg-white shadow md:block">
            <div className="grid h-80 place-items-center text-gray-400">ปฏิทิน</div>
          </div>
        </div>
      </div>
    </section>
  )
}

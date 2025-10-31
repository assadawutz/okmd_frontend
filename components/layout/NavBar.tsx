import FontSettings from "./FontSettings";

export default function NavBar() {
  return (
    <header className="contrast-surface border-b border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="contrast-surface bg-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-end gap-2 px-4 py-2 md:gap-3">
          <FontSettings />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-lg font-semibold tracking-tight sm:text-xl">OKMD</div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          <a className="hover:text-slate-900" href="#">โครงการ</a>
          <a className="hover:text-slate-900" href="#">บริการ</a>
          <a className="hover:text-slate-900" href="#">บทความ</a>
          <a className="hover:text-slate-900" href="#">ติดต่อเรา</a>
        </nav>
      </div>
    </header>
  );
}

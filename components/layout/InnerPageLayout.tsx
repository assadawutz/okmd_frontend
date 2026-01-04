import Breadcrumb from "./Breadcrumb";
import SidebarNav from "./SidebarNav";

interface SidebarNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface InnerPageLayoutProps {
  title: string;
  children: React.ReactNode;
  sidebarItems?: SidebarNavItem[];
  sidebarTitle?: string;
  showBreadcrumb?: boolean;
}

export default function InnerPageLayout({
  title,
  children,
  sidebarItems,
  sidebarTitle,
  showBreadcrumb = true,
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {showBreadcrumb && <Breadcrumb />}

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00ADEF] mb-8 md:mb-12">
          {title}
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* Sidebar */}
          {sidebarItems && sidebarItems.length > 0 && (
            <aside className="md:col-span-3">
              <SidebarNav items={sidebarItems} title={sidebarTitle} />
            </aside>
          )}

          {/* Main Content */}
          <main
            className={
              sidebarItems && sidebarItems.length > 0
                ? "md:col-span-9"
                : "md:col-span-12"
            }
          >
            <div className="prose prose-lg max-w-none">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

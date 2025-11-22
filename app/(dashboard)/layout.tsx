import SideNav from "@/components/(side-nav-bar)/side-nav-bar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SideNav />
      <div className="main-layout-children ml-[300px] pt-[20px]">
        {children}
      </div>
    </main>
  );
}

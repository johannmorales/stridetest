import { Sidebar, SidebarItem } from "./aside";
import { Navbar } from "./navbar";
import { ReactNode } from "react";
import {
  CustomersIcon,
  DashboardIcon,
  DashboardIconPath,
  DealsIcon,
  TasksIcon,
} from "./icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/dashboard",
    activeIcon: <DashboardIcon fill="white" />,
    inactiveIcon: <DashboardIconPath />,
    name: "Dashboard",
    enabled: true,
    action: () => {},
    actionLabel: "Add New",
  },
  {
    href: "/deals",
    activeIcon: <DealsIcon fill="white" />,
    inactiveIcon: <DealsIcon fill="#7E92A2" />,
    name: "Deals",
    enabled: true,
    action: () => {},
    actionLabel: "Add New Deal",
  },
  {
    href: "/customers",
    activeIcon: <CustomersIcon fill="white" />,
    inactiveIcon: <CustomersIcon fill="#7E92A2" />,
    name: "Customers",
  },
  {
    href: "/tasks",
    activeIcon: <TasksIcon fill="white" />,
    inactiveIcon: <TasksIcon fill="#7E92A2" />,
    name: "Customers",
  },
];

export const routeByPath = new Map<string, (typeof routes)[0]>();

for (const route of routes) {
  routeByPath.set(route.href, route);
}

export function ContentWrapper({ children }: { children: ReactNode }) {
  const { user, error, isLoading } = useUser();
  const pathname = usePathname();
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className="sm:grid grid-cols-[90px_1fr] max-h-[calc(100vh-90px)] h-[calc(100vh-90px)]">
        {user && !isLoading && !error && (
          <Sidebar>
            {routes.map((route) => (
              <SidebarItem
                key={route.href}
                {...route}
                isActive={pathname === route.href}
              />
            ))}
          </Sidebar>
        )}
        <main className="max-h-[calc(100vh-90px)] h-[calc(100vh-90px)] min-h-[calc(100vh-90px)] grid grid-cols-1 items-stretch">
          {children}
        </main>
      </div>
    </div>
  );
}

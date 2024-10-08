import { FunctionComponent, ReactNode } from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { clsx } from "clsx";

export const SidebarItem: FunctionComponent<{
  href: string;
  isActive: boolean;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  enabled?: boolean;
}> = (props) => {
  return (
    <div className="flex justify-center items-center">
      <Button
        radius="full"
        className={clsx(
          "p-0 min-w-0 w-[50px] h-[50px]",
          props.isActive ? "bg-primary" : "bg-[#EAEEF4]",
        )}
        size="sm"
        as={NextLink}
        href={props.enabled ? props.href : "#"}
        disabled={!!props.enabled}
      >
        {props.isActive ? props.activeIcon : props.inactiveIcon}
      </Button>
    </div>
  );
};

export const Sidebar: FunctionComponent<{ children: ReactNode }> = (props) => {
  return (
    <aside className="hidden w-[90px] items-center h-full sm:flex flex-col gap-3 py-6 border-r">
      {props.children}
    </aside>
  );
};

"use client";

import NextLink from "next/link";

import { Logo, Plus } from "@/components/icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname } from "next/navigation";
import { routeByPath } from "./content-wrapper";

export const Navbar = ({}) => {
  const { user, error, isLoading } = useUser();
  const pathname = usePathname();
  const route = routeByPath.get(pathname);
  return (
    <nav className="sticky max-h-[90px] h-[90px] grid grid-cols-[90px_1fr_1fr_90px] place-items-center border bottom-1">
      <div className="w-[90px] h-[90px] flex items-center justify-center border-r">
        <NextLink href="/">
          <Logo />
        </NextLink>
      </div>
      <h3 className="font-bold text-2xl place-self-start self-center pl-6">
        {route?.name}
      </h3>

      {!user && !isLoading && !error && (
        <>
          <div />
          <div className="justify-self-end px-4">
            <a
              className="text-primary text-sm font-semibold cursor-pointer"
              href="/api/auth/login"
            >
              Log In
            </a>
          </div>
        </>
      )}

      {user && !isLoading && !error && (
        <>
          <div className="justify-self-end">
            {route?.action && (
              <Button
                color="primary"
                radius="full"
                className="px-8 py-6"
                size="sm"
                endContent={<Plus />}
              >
                {route.actionLabel}
              </Button>
            )}
          </div>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src={user.picture!}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem className="h-14 gap-2" isReadOnly>
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.name}</p>
              </DropdownItem>
              <DropdownItem
                as="a"
                key="logout"
                color="danger"
                href="/api/auth/logout"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      )}
    </nav>
  );
};

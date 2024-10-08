import { DangerTask, Pencil, RightArrowSubmit } from "@/components/icons";
import { h5 } from "@/components/primitives";
import { SCard } from "@/components/s-card";
import { Customer } from "@/lib/graphql/graphql";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, FunctionComponent } from "react";

export const RecentCustomers: FunctionComponent<{
  customers: (Customer | null)[];
}> = (props) => {
  return (
    <div className="h-full">
      <div className="flex items-center mb-8">
        <div className="flex-grow">
          <h5 className={h5()}>Customers</h5>
        </div>
        <Link href="/customers" className="text-primary text-sm">
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {props.customers
          .filter((customer) => !!customer)
          .map((customer, index) => (
            <div key={customer?.id} className="flex gap-4 items-center">
              <div>
                <Avatar size="md" className="h-12 w-12" src={customer.photo!} />
              </div>
              <div className="flex-grow flex flex-col gap-0.5">
                <div className="font-bold">{customer.name}</div>
                <div className="text-xs md:text-sm text-[#7E92A2]">
                  {customer.email}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-transparent min-w-0 p-2">
                  <Pencil />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

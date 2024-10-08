import { DangerTask, RightArrowSubmit } from "@/components/icons";
import { h5, text } from "@/components/primitives";
import { SCard } from "@/components/s-card";
import { Deal } from "@/lib/graphql/graphql";
import { DateFormatter } from "@internationalized/date";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, FunctionComponent } from "react";

const formatter = new DateFormatter("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const DealComponent: FunctionComponent<{ deal: Deal }> = ({ deal }) => (
  <div className="flex flex-row gap-4 w-full items-center">
    <Avatar
      className="h-12 w-12"
      src="https://s3-alpha-sig.figma.com/img/5b15/112a/3ed4a9ea7c9d14fe939ada90d359e26b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqhrOnjhwiFM~uIz7y38h7h2O9NZsqmHpjVq4rnsRKjRtU1Ac9kJKuD97I3Z9vkWwuISV8Y6MGZZVRzUFV7qakAVaTQ0PWq3aKMlh475g~kp7WwWillBtR-pojoqRC33L9q56a4hTZ1mnOAiICaQIyF~6VBBs7bX8i22HDZ~vcP6qSnwvwPx-ik3Dg1UeZPfNftoI~IkNTX49JrLP6IGmqnP84YtvMKbLxb47XBkvl3YBP3yfIYKP1itDLNZfz1v-p1y7reuEHK8rGq3Jyq9O-6f5OfgTssqxUCiXFWIS0IEFldk4P6F-n6iRXpFbRf8Xyr7fhc28cedtPovCfUxFQ__"
    />
    <div className={clsx("flex flex-col flex-grow gap-0.5", text())}>
      <div className="flex justify-between font-bold">
        <div className={clsx("font-semibold", text())}>{deal.address}</div>
        <div className={text()}>${deal.price}</div>
      </div>
      <div className="flex justify-between text-[#7E92A2]">
        <div>
          {deal.city}, {deal.state}
        </div>
        <div>{formatter.format(new Date(deal.date!))}</div>
      </div>
    </div>
  </div>
);
export const RecentDeals: FunctionComponent<{
  deals: (Deal | null)[];
  className?: string;
}> = (props) => {
  return (
    <SCard>
      <div className="flex items-center mb-8">
        <div className="flex-grow">
          <h5 className={h5()}>Recent Deals</h5>
        </div>
        <Link href="/deals" className="text-primary text-sm">
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-6 overflow-scroll max-h-full">
        {props.deals
          .filter((deal) => !!deal)
          .map((deal) => (
            <DealComponent key={deal.id} deal={deal} />
          ))}
      </div>
    </SCard>
  );
};

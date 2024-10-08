import { DangerTask, Pencil, RightArrowSubmit } from "@/components/icons";
import { h5, text } from "@/components/primitives";
import { SCard } from "@/components/s-card";
import { Customer } from "@/lib/graphql/graphql";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, FunctionComponent } from "react";

export const DealTimeline: FunctionComponent<{ className?: string }> = (
  props,
) => {
  return (
    <SCard
      className={props.className}
      start={
        <div className="flex w-full p-6 gap-4 border-b-1 items-center">
          <Avatar
            className="h-12 w-12"
            src="https://s3-alpha-sig.figma.com/img/5b15/112a/3ed4a9ea7c9d14fe939ada90d359e26b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqhrOnjhwiFM~uIz7y38h7h2O9NZsqmHpjVq4rnsRKjRtU1Ac9kJKuD97I3Z9vkWwuISV8Y6MGZZVRzUFV7qakAVaTQ0PWq3aKMlh475g~kp7WwWillBtR-pojoqRC33L9q56a4hTZ1mnOAiICaQIyF~6VBBs7bX8i22HDZ~vcP6qSnwvwPx-ik3Dg1UeZPfNftoI~IkNTX49JrLP6IGmqnP84YtvMKbLxb47XBkvl3YBP3yfIYKP1itDLNZfz1v-p1y7reuEHK8rGq3Jyq9O-6f5OfgTssqxUCiXFWIS0IEFldk4P6F-n6iRXpFbRf8Xyr7fhc28cedtPovCfUxFQ__"
          />
          <div className="flex flex-col flex-grow gap-0.5">
            <div className={clsx(text(), "font-semibold")}>319 Haul Road</div>
            <div className="text-[#7E92A2] text-sm">
              <div className={text()}>Glenrock, WE</div>
            </div>
          </div>
          <div className="text-xs md:text-md rounded-full p-2 md:p-4 bg-[#ECECFE] text-primary px-6 text-center">
            IN PROGRESS
          </div>
          <Button
            size="sm"
            className="bg-transparent p-0 min-w-0 h-12 w-12"
            radius="full"
          >
            <RightArrowSubmit />
          </Button>
        </div>
      }
    ></SCard>
  );
};

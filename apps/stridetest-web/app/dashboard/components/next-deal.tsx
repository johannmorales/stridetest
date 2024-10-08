import { Badge } from "@/components/icons";
import { h5, text } from "@/components/primitives";
import { SCard } from "@/components/s-card";
import { Avatar } from "@nextui-org/avatar";
import clsx from "clsx";
import { FunctionComponent } from "react";

export const NextDeal: FunctionComponent = () => {
  return (
    <SCard className="bg-primary">
      <div className=" grid grid-cols-1 h-full gap-4">
        <div className="flex items-center justify-between mb-4">
          <h5 className={clsx(h5(), "text-white")}>Next Appointment</h5>
          <Badge />
        </div>
        <div className="flex gap-4">
          <Avatar
            className="h-12 w-12"
            src="https://s3-alpha-sig.figma.com/img/5b15/112a/3ed4a9ea7c9d14fe939ada90d359e26b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqhrOnjhwiFM~uIz7y38h7h2O9NZsqmHpjVq4rnsRKjRtU1Ac9kJKuD97I3Z9vkWwuISV8Y6MGZZVRzUFV7qakAVaTQ0PWq3aKMlh475g~kp7WwWillBtR-pojoqRC33L9q56a4hTZ1mnOAiICaQIyF~6VBBs7bX8i22HDZ~vcP6qSnwvwPx-ik3Dg1UeZPfNftoI~IkNTX49JrLP6IGmqnP84YtvMKbLxb47XBkvl3YBP3yfIYKP1itDLNZfz1v-p1y7reuEHK8rGq3Jyq9O-6f5OfgTssqxUCiXFWIS0IEFldk4P6F-n6iRXpFbRf8Xyr7fhc28cedtPovCfUxFQ__"
          />
          <div className="flex flex-col flex-grow gap-0.5">
            <div className={clsx(text(), "font-semibold text-white")}>
              319 Haul Road
            </div>
            <div className="text-[#D6E1E6] text-sm">
              <div className={text()}>Glenrock, WE</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className={clsx(text(), "text-[#D6E1E6]")}>
            Appointment Date
          </label>
          <span className={clsx(text(), "font-bold text-white")}>
            Nov 18 2021, 17:00
          </span>
        </div>

        <div className="flex w-full">
          <div className="flex-grow flex flex-col">
            <label className={clsx(text(), "text-[#D6E1E6]")}>Room Area</label>
            <span className={clsx(text(), "font-bold text-white")}>100 M2</span>
          </div>
          <div className=" flex-grow flex flex-col">
            <label className={clsx(text(), "text-[#D6E1E6]")}>People</label>
            <span className={clsx(text(), "font-bold text-white")}>10</span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-grow flex flex-col">
            <label className={clsx(text(), "text-[#D6E1E6]")}>Price</label>
            <span className={clsx(text(), "font-bold text-white")}>$5750</span>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={clsx(
                "rounded-full bg-white p-4 px-6 text-black",
                text(),
              )}
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
    </SCard>
  );
};

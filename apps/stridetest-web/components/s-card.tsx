import { Card, CardProps } from "@nextui-org/card";
import clsx from "clsx";
import { FunctionComponent, ReactElement } from "react";

export const SCard: FunctionComponent<
  CardProps & { end?: ReactElement; start?: ReactElement }
> = ({ className, ...props }) => {
  return (
    <Card
      shadow="none"
      className={clsx(className, "max-h-full w-full border border-[#EAEEF4]")}
      {...props}
    >
      <div className="flex flex-col h-full">
        {props.start}
        <div className="p-4 md:p-6 flex-grow overflow-y-scroll max-h-full">
          {props.children}
        </div>
        {props.end}
      </div>
    </Card>
  );
};

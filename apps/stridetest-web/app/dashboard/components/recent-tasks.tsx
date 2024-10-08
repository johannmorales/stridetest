import { DangerTask, RightArrowSubmit } from "@/components/icons";
import { h5 } from "@/components/primitives";
import { SCard } from "@/components/s-card";
import { Task } from "@/lib/graphql/graphql";
import { DateFormatter } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, FunctionComponent } from "react";

const formatter = new DateFormatter("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const RecentTasks: FunctionComponent<{ tasks: (Task | null)[] }> = (
  props,
) => {
  return (
    <SCard
      className="bg-[#F6FAFD] h-full"
      end={
        <div className="flex items-center bg-white border-t-1 border-[#EAEEF4]">
          <input
            className="text-sm lg:text-medium shadow-none ring-0 border-0 focus:ring-0 focus:border-0 focus:outline-none p-6 flex-grow"
            placeholder="Add new task"
          />
          <div className="inline-flex justify-center items-center px-2">
            <Button
              size="sm"
              className="bg-transparent p-0 min-w-0 h-12 w-12"
              radius="full"
            >
              <RightArrowSubmit />
            </Button>
          </div>
        </div>
      }
    >
      <div className="h-full">
        <div className="flex items-center mb-8">
          <div className="flex-grow">
            <h5 className={h5()}>Tasks To Do</h5>
          </div>
          <Link href="/tasks" className="text-primary text-sm">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-[90px_16px_1fr] items-center justify-center gap-6 xl:gap-10 gap-x-2 flex-grow">
          {props.tasks
            .filter((task) => !!task)
            .map((task, index) => (
              <Fragment key={task?.id}>
                <div
                  className={clsx(
                    "font-normal text-sm",
                    index < 2 ? "text-danger-500" : "text-[#7E92A2]",
                  )}
                >
                  {task.createdAt && formatter.format(new Date(task.createdAt))}
                </div>
                <div className="flex justify-center items-center h-full w-full">
                  {index < 2 && <DangerTask />}
                </div>
                <div className="text-sm">{task.description}</div>
              </Fragment>
            ))}
        </div>
      </div>
    </SCard>
  );
};

"use client";

import { SCard } from "@/components/s-card";
import { graphql, execute } from "@/lib/graphql";
import { useQuery } from "@tanstack/react-query";
import { RecentTasks } from "./components/recent-tasks";
import { RecentCustomers } from "./components/recent-customers";
import { RecentDeals } from "./components/recent-deals";
import { DealTimeline } from "./components/deal-timeline";
import { NextDeal } from "./components/next-deal";

const LastTasksQuery = graphql(`
  query getTasksPage {
    getTasksPage(pageNumber: 0, pageSize: 4) {
      content {
        id
        description
        createdAt
      }
    }
  }
`);

const LastCustomersQuery = graphql(`
  query getCustomersPage {
    getCustomersCount
    getCustomersPage(pageNumber: 0, pageSize: 3) {
      content {
        id
        name
        email
        photo
      }
    }
  }
`);

const LastDealsQuery = graphql(`
  query getDeals {
    getDealsCount
    getDealsPage(pageNumber: 0, pageSize: 4) {
      content {
        id
        address
        price
        state
        city
        date
      }
    }
  }
`);

export default function DashboardPage() {
  const { data: lastTasks } = useQuery({
    queryKey: ["lastTasks"],
    queryFn: async () => execute(LastTasksQuery),
  });

  const { data: lastCustomers } = useQuery({
    queryKey: ["lastCustomers"],
    queryFn: async () => execute(LastCustomersQuery),
  });

  const { data: lastDeals } = useQuery({
    queryKey: ["lastDeals"],
    queryFn: async () => execute(LastDealsQuery),
  });

  return (
    <div className="max-h-full overflow-scroll lg:grid md:grid-cols-2 xl:grid-cols-3 items-stretch">
      <div className="flex flex-col gap-6 p-6 xl:col-span-2 xl:grid xl:grid-cols-6">
        <div className="xl:col-span-2 xl:flex xl:items-stretch">
          {lastDeals?.getDealsPage?.content && <NextDeal />}
        </div>
        <div className="xl:col-span-4 flex items-stretch">
          {lastDeals?.getDealsPage?.content && (
            <RecentDeals deals={lastDeals.getDealsPage.content} />
          )}
        </div>

        <div className="grid grid-cols-2 gap-6 xl:grid-cols-1 xl:col-span-2 items-stretch">
          <SCard className="border border-[#EAEEF4]">
            <div className="flex h-full w-full p-1 justify-between">
              <div className="flex flex-col justify-between">
                <h5 className="text-lg font-medium text-[#7E92A2]">
                  Customers
                </h5>
                <span className="text-5xl font-semibold">
                  {lastCustomers?.getCustomersCount}
                </span>
              </div>
              <div className="flex justify-center items-center self-center w-[120x]">
                <div className="rounded-full w-[80px] h-[80px] bg-[#E1FFF9] flex justify-center items-center ">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.66669C8.50671 2.66669 5.66671 5.50669 5.66671 9.00002C5.66671 12.4267 8.34671 15.2 11.84 15.32C11.9467 15.3067 12.0534 15.3067 12.1334 15.32C12.16 15.32 12.1734 15.32 12.2 15.32C12.2134 15.32 12.2134 15.32 12.2267 15.32C15.64 15.2 18.32 12.4267 18.3334 9.00002C18.3334 5.50669 15.4934 2.66669 12 2.66669Z"
                      fill="#2DC8A8"
                    />
                    <path
                      d="M18.7734 18.8667C15.0534 16.3867 8.98671 16.3867 5.24004 18.8667C3.54671 20 2.61337 21.5334 2.61337 23.1734C2.61337 24.8134 3.54671 26.3334 5.22671 27.4534C7.09337 28.7067 9.54671 29.3334 12 29.3334C14.4534 29.3334 16.9067 28.7067 18.7734 27.4534C20.4534 26.32 21.3867 24.8 21.3867 23.1467C21.3734 21.5067 20.4534 19.9867 18.7734 18.8667Z"
                      fill="#2DC8A8"
                    />
                    <path
                      d="M26.6534 9.78669C26.8667 12.3734 25.0267 14.64 22.48 14.9467C22.4667 14.9467 22.4667 14.9467 22.4534 14.9467H22.4134C22.3334 14.9467 22.2534 14.9467 22.1867 14.9734C20.8934 15.04 19.7067 14.6267 18.8134 13.8667C20.1867 12.64 20.9734 10.8 20.8134 8.80002C20.72 7.72002 20.3467 6.73335 19.7867 5.89335C20.2934 5.64002 20.88 5.48002 21.48 5.42669C24.0934 5.20002 26.4267 7.14669 26.6534 9.78669Z"
                      fill="#2DC8A8"
                    />
                    <path
                      d="M29.32 22.12C29.2134 23.4134 28.3867 24.5334 27 25.2934C25.6667 26.0267 23.9867 26.3734 22.32 26.3334C23.28 25.4667 23.84 24.3867 23.9467 23.24C24.08 21.5867 23.2934 20 21.72 18.7334C20.8267 18.0267 19.7867 17.4667 18.6534 17.0534C21.6 16.2 25.3067 16.7734 27.5867 18.6134C28.8134 19.6 29.44 20.84 29.32 22.12Z"
                      fill="#2DC8A8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SCard>
          <SCard className="border border-[#EAEEF4]">
            <div className="flex h-full w-full p-1 justify-between">
              <div className="flex flex-col justify-between">
                <h5 className="text-lg font-medium text-[#7E92A2]">Deals</h5>
                <span className="text-5xl font-semibold">
                  {lastDeals?.getDealsCount}
                </span>
              </div>
              <div className="flex justify-center items-center self-center">
                <div className="rounded-full w-[80px] h-[80px] bg-[#FFEEEF] flex justify-center items-center ">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.12 9.30665C26.9867 8.05332 25.0933 7.42665 22.3467 7.42665H22.0267V7.37332C22.0267 5.13332 22.0267 2.35999 17.0133 2.35999H14.9867C9.97334 2.35999 9.97334 5.14665 9.97334 7.37332V7.43999H9.65334C6.89334 7.43999 5.01334 8.06665 3.88001 9.31999C2.56001 10.7867 2.60001 12.76 2.73334 14.1067L2.74668 14.2L2.84995 15.2844C2.86897 15.4841 2.97652 15.6644 3.14438 15.7743C3.46412 15.9835 3.99924 16.3284 4.32001 16.5067C4.50668 16.6267 4.70668 16.7333 4.90668 16.84C7.18668 18.0933 9.69334 18.9333 12.24 19.3467C12.36 20.6 12.9067 22.0667 15.8267 22.0667C18.7467 22.0667 19.32 20.6133 19.4133 19.32C22.1333 18.88 24.76 17.9333 27.1333 16.5467C27.2133 16.5067 27.2667 16.4667 27.3333 16.4267C27.8623 16.1277 28.4111 15.7593 28.9113 15.3984C29.062 15.2897 29.1583 15.1217 29.1789 14.937L29.2 14.7467L29.2667 14.12C29.28 14.04 29.28 13.9733 29.2933 13.88C29.4 12.5333 29.3733 10.6933 28.12 9.30665ZM17.4533 18.44C17.4533 19.8533 17.4533 20.0667 15.8133 20.0667C14.1733 20.0667 14.1733 19.8133 14.1733 18.4533V16.7733H17.4533V18.44ZM11.88 7.37332C11.88 5.10665 11.88 4.26665 14.9867 4.26665H17.0133C20.12 4.26665 20.12 5.11999 20.12 7.37332V7.43999H11.88V7.37332Z"
                      fill="#FE8084"
                    />
                    <path
                      d="M27.8313 18.3122C28.3028 18.0879 28.8458 18.4616 28.7986 18.9816L28.32 24.2533C28.04 26.92 26.9467 29.64 21.08 29.64H10.92C5.05334 29.64 3.96001 26.92 3.68001 24.2667L3.22573 19.2696C3.179 18.7556 3.70961 18.3823 4.17979 18.595C5.69902 19.2824 8.5032 20.5019 10.2354 20.9555C10.4545 21.0129 10.6317 21.1697 10.7276 21.3749C11.5369 23.1057 13.2922 24.0267 15.8267 24.0267C18.3362 24.0267 20.1136 23.0702 20.9255 21.3352C21.0216 21.1299 21.199 20.9731 21.4182 20.9154C23.2576 20.4314 26.2424 19.0683 27.8313 18.3122Z"
                      fill="#FE8084"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SCard>
        </div>
        <DealTimeline className="row-span-2 xl:row-span-1 xl:col-span-4" />
      </div>
      <aside className="flex flex-col gap-9 p-6 bg-[#EEF6FB]">
        <div>
          {lastCustomers?.getCustomersPage?.content && (
            <RecentCustomers
              customers={lastCustomers?.getCustomersPage?.content}
            />
          )}
        </div>
        <div className="h-full">
          {lastTasks?.getTasksPage?.content && (
            <RecentTasks tasks={lastTasks?.getTasksPage?.content} />
          )}
        </div>
      </aside>
    </div>
  );
}

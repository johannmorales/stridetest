"use client";

import { graphql, execute } from "@/lib/graphql";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { DealsTable } from "./components/deals-table";
import { DownArrow, Filter } from "@/components/icons";
import {
  Button,
  Input,
  InputProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const DealsQuery = graphql(`
  query getDealsPage($lastEvaluatedKey: String) {
    getDealsPage(
      pageNumber: 0
      pageSize: 7
      lastEvaluatedKey: $lastEvaluatedKey
    ) {
      size
      content {
        id
        address
        price
        state
        city
        date
        zipCode
        area
        status
      }
      lastEvaluatedKey
      numberOfElements
      totalPages
    }
  }
`);

const DealsCount = graphql(`
  query getDealsCount {
    getDealsCount
  }
`);

export default function DealsPage() {
  const { data: deals } = useQuery({
    queryKey: ["dealsCount"],
    queryFn: async () => execute(DealsCount),
  });

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["deals"],
    queryFn: async ({ pageParam: { lastEvaluatedKey } }) => {
      const result = await execute(DealsQuery, {
        lastEvaluatedKey,
      });
      return result;
    },
    initialPageParam: {},
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.getDealsPage?.lastEvaluatedKey) {
        return null;
      }
      return {
        lastEvaluatedKey: lastPage.getDealsPage?.lastEvaluatedKey,
      };
    },
  });

  const InputClassNames: InputProps["classNames"] = {
    label: ["text-[#7E92A2]"],
  };

  const tableData = useMemo(() => {
    const tableData =
      data?.pages
        ?.map((page) => page.getDealsPage)
        .map((dealsPage) => dealsPage?.content)
        .flat()
        .filter((deal) => !!deal) ?? [];
    return tableData;
  }, [data]);

  const loadMore = useMemo(() => () => fetchNextPage(), [fetchNextPage]);

  return (
    <div className="p-4 md:p-6 max-h-full overflow-y-scroll flex flex-col gap-4 md:gap-8">
      {/* <Modal isOpen size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Deal
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="col-span-3">
                    <Input
                      classNames={InputClassNames}
                      labelPlacement="inside"
                      label="Street Address"
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      classNames={InputClassNames}
                      className="bg-red"
                      labelPlacement="inside"
                      label="City"
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      classNames={InputClassNames}
                      className="bg-red"
                      labelPlacement="inside"
                      label="State / Province"
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      classNames={InputClassNames}
                      labelPlacement="inside"
                      label="Zip Code"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      {deals?.getDealsCount !== undefined && (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="font-bold flex-grow">
            Total: {deals?.getDealsCount} deals
          </div>
          <div>
            <div className=" bg-white rounded-full border border-borderGray p-4 md:p-4 md:px-8 text-xs md:text-sm text-[#092C4C] font-medium flex gap-4 items-center">
              Sort by: Date Created
              <DownArrow />
            </div>
          </div>
          <div>
            <div className=" bg-white rounded-full border border-borderGray p-4 md:p-4 md:px-8 text-xs md:text-sm text-[#092C4C] font-medium flex gap-4 items-center">
              Filter
              <Filter />
            </div>
          </div>
        </div>
      )}
      <div className="flex-grow max-h-full overflow-scroll">
        {data && <DealsTable data={tableData} loadMore={loadMore} />}
      </div>
    </div>
  );
}

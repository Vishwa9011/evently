"use client";

import { formUrlQuery } from '@/lib/utils';
import { Button } from '@components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type PaginationProps = {
  totalPages: number,
  page: number | string,
  urlParamName?: string,
}

const Pagination = ({ totalPages, page, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: "prev" | "next") => {
    const pageValue = btnType === "prev" ? Number(page) - 1 : Number(page) + 1;
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString()
    })

    router.push(newUrl, { scroll: false });
  }

  return (
    <div className='flex gap-2'>
      <Button size={"lg"} variant={"outline"} className='w-20' onClick={() => onClick("prev")} disabled={Number(page) <= 1}>
        Previous
      </Button>
      <Button size={"lg"} variant={"outline"} className='w-20' onClick={() => onClick("next")}>
        Next
      </Button>
    </div>
  );
}

export default Pagination;
"use client"

import { IEvent } from '@/lib/database/models/event.model';
import { SignedOut } from '@clerk/clerk-react';
import { SignedIn, useUser } from '@clerk/nextjs';
import { Button } from '@components/ui/button';
import Link from 'next/link';
import React from 'react';
import Checkout from './Checkout';

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const hasEventFinished = new Date(event.endDateTime) < new Date();
  const userId = user?.publicMetadata.userId as string;


  return (
    <div className='flex items-center gap-3'>
      {/* Cannot by past event */}

      {hasEventFinished ?
        <p className='p-2 text-red-400'>Sorry, tickets are no longer available.</p>
        :
        <>
          <SignedOut>
            <Button asChild className='button rounded-full' size={'lg'}>
              <Link href={'/sign-in'}>
                Get Tickets
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      }


    </div>
  );
}

export default CheckoutButton;
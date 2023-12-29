import { Button } from '@/components/ui/button'
import { AllEventResponse, getAllEvents } from '@/lib/actions/event.actions'
import Collection from '@components/shared/Collection'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const events: AllEventResponse | null = await getAllEvents({ query: '', category: "", page: 1, limit: 6 })

  if (!events) return (<div>Error in Fetching Events</div>)

  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className='flex flex-col justify-center gap-8'>
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Event, Our Platform!</h1>
            <p className='p-regular-20 md:p-regular-24'>
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            <Button size={"lg"} asChild className='w-full button sm:w-fit'>
              <Link href={"#events"}>Explore now</Link>
            </Button>
          </div>
          <Image src={"/assets/images/hero.png"} alt='hero' width={1000} height={1000} className='max-h-[70vh] object-contain 2xl:max-h-[50vh]' />
        </div>
      </section>

      <section id='#events' className='wrapper my-8 flex flex-col gap-89 md:gap-12'>
        <h2 className='h2-bold'>Trusted by <br /> Thousands of Event</h2>
        <div className="flex flex-col gap-5 w-full md:flex-row">
          Search
          CategoryFilter
        </div>

        <Collection
          data={events.data}
          emptyTitle="No Event Found"
          emptyStateSubtext={"Come back later"}
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events.totalPages}
        />


      </section>

    </>
  )
}
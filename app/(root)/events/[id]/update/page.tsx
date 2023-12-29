import { getEventById } from "@/lib/actions/event.actions"
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs"
import EventForm from "@components/shared/EventForm"

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth()
  const userId = sessionClaims?.userId as string
  const event = await getEventById(id);

  if (!event) {
    return <p>Event not found</p>
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bd-bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} event={event} eventId={event._id} type="Update" />
      </div>
    </>
  )
}


export default UpdateEvent
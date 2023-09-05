import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Error('Could not fetch events');
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500
    // });
    json(
      { message: 'Could not fetch events.' }
      , { status: 500 }
    )
  } else {
    return response;
  }

}

import { useLoaderData } from 'react-router-dom';
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
    //... Will configure in next lecture
  } else {
    return response;
  }

}

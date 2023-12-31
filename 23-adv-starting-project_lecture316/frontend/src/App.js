// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) DONE
//    - HomePage DONE
//    - EventsPage DONE
//    - EventDetailPage DONE
//    - NewEventPage DONE
//    - EditEventPage DONE
// 2. Add routing & route definitions for these five pages DONE
//    - / => HomePage DONE
//    - /events => EventsPage DONE
//    - /events/<some-id> => EventDetailPage DONE
//    - /events/new => NewEventPage DONE
//    - /events/<some-id>/edit => EditEventPage DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components DONE
// 4. Add properly working links to the MainNavigation DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active DONE
// 6. Output a list of dummy events to the EventsPage DONE
//    Every list item should include a link to the respective EventDetailPage DONE
// 7. Output the ID of the selected event on the EventDetailPage DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader
  , action as deleteEventAction
} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import { action as eventFormAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

function App() {

  const router = createBrowserRouter([
    {
      path: '/'
      , element: <RootLayout />
      , errorElement: <ErrorPage />
      , children: [
        { index: true, element: <HomePage /> }
        , {
          path: 'events'
          , element: <EventsRootLayout />
          , children: [
            { index: true, element: <EventsPage />, loader: eventsLoader }
            , {
              path: ':eventId'
              , id: 'event-detail'
              , loader: eventDetailLoader
              , children: [
                { index: true, element: <EventDetailPage />, action: deleteEventAction }
                , { path: 'edit', element: <EditEventPage />, action: eventFormAction }
              ]
            }
            , { path: 'new', element: <NewEventPage />, action: eventFormAction }
          ]
        }
        , { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction }
      ]
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

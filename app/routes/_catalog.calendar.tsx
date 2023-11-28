import { LinksFunction, MetaFunction } from "@remix-run/node";
import CalendarLayout from "~/ui/pages/Calendar/CalendarLayout";
import calendarStyle from "../styles/calendar.css?url";
import { eventCalendarLoader } from "~/controllers/loaders/calendar.loader";

export const meta: MetaFunction = () => {
  return [
    {
      title: "OpenBox - Calendrier",
    },
    {
      description: "Page du calendrier des évènements d'OpenBox",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: calendarStyle }];
};

export default CalendarLayout;
export { eventCalendarLoader as loader };

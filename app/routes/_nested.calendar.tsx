import { LinksFunction, MetaFunction } from "@remix-run/node";
import calendarStyle from "../styles/calendar.css?url";
import { eventCalendarLoader } from "~/controllers/loaders/calendar.loader";
import Calendar from "~/ui/pages/Calendar/Calendar";

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

export default Calendar;
export { eventCalendarLoader as loader };

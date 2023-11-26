import { LinksFunction, MetaFunction } from "@remix-run/node";
import CalendarLayout from "~/ui/pages/Calendar/CalendarLayout";

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

export default CalendarLayout;

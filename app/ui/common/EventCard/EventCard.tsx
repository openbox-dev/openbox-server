import { Event } from "@prisma/client";
import { EventWithBox } from "~/services/event.service";

interface EventCardProps {
  event: EventWithBox;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="EventCard">
      <div className="event-image-container">
        image
        {/* <img src="" alt="" /> */}
      </div>
      <div className="event-details-container">
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p>{event.boxId}</p>
        <p>{event.room}</p>
        <p>{new Date(event.startDate).toLocaleDateString()}</p>
      </div>
      <div className="event-box-tag">
        <span className="box-tag">{event.box.name}</span>
      </div>
    </div>
  );
}

import { Event } from "@prisma/client";

interface EventCardProps {
  event: Event;
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
    </div>
  );
}

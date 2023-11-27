import type { loader } from "~/routes/_nested.box.$boxId";
import { useLoaderData } from "@remix-run/react";

import SeeMore from "~/ui/common/SeeMore/SeeMore";

export default function Box() {
  const data = useLoaderData<typeof loader>();

  console.log(data);
  // return data.events?.data?.0?.name;

  return (
    <main className="Main">
      <h1 className="box-title">{data.box?.data?.name}</h1>
      <p className="box-description">—{data.box?.data?.description}</p>
      {/* usestate image si null */}
      <SeeMore />
      <section className="content-section">
        <div className="contributors-card">
          <h3 className="contributors-title">Contributeurs</h3>
          {/* {boxData.box.boxAdmin &&
            boxData.box.boxAdmin.map((contributor) => {
              return (
                <div className="">
                  {contributor.user.firstName}
                  {contributor.user.lastName}
                  {contributor.user.promo}
                </div>
              );
            })} */}
          {/* ?map>div.. */}
        </div>
        <div className="event-card-container">
          {/* ?map>return <EventCard key={event.id} event={event as any} />; */}
        </div>
      </section>
    </main>
  );
}

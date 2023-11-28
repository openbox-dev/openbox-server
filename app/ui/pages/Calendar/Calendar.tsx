import { useState } from "react";
import { Event } from "@prisma/client";
import { loader } from "~/routes/_nested.calendar";
import {
  EventService,
  EventWithBoxAndAnimator,
} from "~/services/event.service";
import { Link, useLoaderData } from "@remix-run/react";

const date = new Date();

const month = date.getMonth();

const monthDateOptions: Intl.DateTimeFormatOptions = { month: "long" };
const eventOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
};

const monthMap = new Map([
  [0, "Janvier"],
  [1, "Février"],
  [2, "Mars"],
  [3, "Avril"],
  [4, "Mai"],
  [5, "Juin"],
  [6, "Juillet"],
  [7, "Août"],
  [8, "Septembre"],
  [9, "Octobre"],
  [10, "Novembre"],
  [11, "Décembre"],
]);

function getMonthInLetter(date: Date) {
  let monthInLetters: string = date.toLocaleString("fr-Fr", monthDateOptions);

  monthInLetters =
    monthInLetters.charAt(0).toLocaleUpperCase() + monthInLetters.slice(1);

  return monthInLetters;
}

const monthInLetters = getMonthInLetter(date);

const weekDayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };

const year = date.getFullYear();

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const daysInMonth = [];
  while (date.getMonth() === month) {
    const dayInfo = {
      day: date.getDate(),
      weekDay: new Intl.DateTimeFormat("fr-Fr", weekDayOptions).format(date),
      month: new Intl.DateTimeFormat("fr-Fr", monthDateOptions).format(date),
      monthNumber: date.getMonth(),
      year: date.getFullYear(),
    };
    daysInMonth.push(dayInfo);
    date.setDate(date.getDate() + 1);
  }
  return daysInMonth;
}

const daysInMonth = getDaysInMonth(year, month);

export default function Calendar() {
  const [monthNumber, setMonthNumber] = useState(month);
  const [displayedMonth, setDisplayedMonth] = useState(monthInLetters);
  const [displayedYear, setDisplayedYear] = useState(year);
  const [displayedDaysInMonth, setDisplayedDaysInMonth] = useState(daysInMonth);
  const [allEventBox, closestEventBox] = useLoaderData<typeof loader>();
  const allEventBoxArray: any = [];

  allEventBox.map((event) => {
    const dateString = event.startDate;
    const dateNumberFormat = Date.parse(dateString);
    const date = new Date(dateNumberFormat);
    const readableFormatDate = date.toLocaleString("fr-FR", eventOptions);
    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    const animatorArray: any = [];
    const eventAnimator = event.eventAnimator;
    eventAnimator.forEach((animator) => {
      const firstName = animator.animator.firstName;
      const lastName = animator.animator.lastName;
      const fullName = `${firstName} ${lastName}`;
      animatorArray.push(fullName);
    });

    const eventObject = {
      id: event.id,
      Titre: event.name,
      Animateurs: animatorArray,
      "Date de l'event": readableFormatDate,
      Jour: dateDay,
      Mois: dateMonth,
      Année: dateYear,
    };
    allEventBoxArray.push(eventObject);
  });

  function eventInMonth(year: number, month: number) {
    let monthEventCount = 0; // Initialisez le compteur en dehors de la map

    allEventBoxArray.map((event: any) => {
      if (event["Mois"] === month && event["Année"] === year) {
        monthEventCount++;
      }
      return null; // Assurez-vous de retourner quelque chose dans la map
    });

    return monthEventCount; // Retournez le nombre total d'événements
  }

  const nbEventInMonth = eventInMonth(displayedYear, monthNumber);
  const [nbEvent, setNbEvent] = useState(nbEventInMonth);

  const [asideEventTitle, setAsideEventTitle] = useState<string | undefined>(
    undefined
  );
  const [asideEventAnimator, setAsideEventAnimator] = useState<
    string | undefined
  >(undefined);
  const [asideEventDate, setAsideEventDate] = useState<string | undefined>(
    undefined
  );

  const [asideId, setAsideId] = useState<number | undefined>(undefined);

  function handleNextButton() {
    if (monthNumber < 11) {
      const nextMonthNumber = monthNumber + 1;
      const nextDaysInMonth = getDaysInMonth(displayedYear, nextMonthNumber);
      const nextMonth = monthMap.get(nextMonthNumber) ?? "";
      const nextNbEvent = eventInMonth(displayedYear, nextMonthNumber);
      setNbEvent(nextNbEvent);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setAsideEventTitle(undefined);
      setAsideEventAnimator(undefined);
      setAsideEventDate(undefined);
      setAsideId(undefined);
    } else if (monthNumber === 11) {
      const nextMonthNumber = 0;
      const nextYear = displayedYear + 1;
      const nextDaysInMonth = getDaysInMonth(nextYear, nextMonthNumber);
      const nextMonth = monthMap.get(nextMonthNumber) ?? "";
      const nextNbEvent = eventInMonth(nextYear, nextMonthNumber);
      setNbEvent(nextNbEvent);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setDisplayedYear(nextYear);
      setAsideEventTitle(undefined);
      setAsideEventAnimator(undefined);
      setAsideEventDate(undefined);
      setAsideId(undefined);
    }
  }

  function handlePrevButton() {
    if (monthNumber > 0) {
      const nextMonthNumber = monthNumber - 1;
      const nextDaysInMonth = getDaysInMonth(displayedYear, nextMonthNumber);
      const nextMonth = monthMap.get(nextMonthNumber) ?? "";
      const nextNbEvent = eventInMonth(displayedYear, nextMonthNumber);
      setNbEvent(nextNbEvent);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setAsideEventTitle(undefined);
      setAsideEventAnimator(undefined);
      setAsideEventDate(undefined);
    } else if (monthNumber === 0) {
      const nextMonthNumber = 11;
      const nextYear = displayedYear - 1;
      const nextDaysInMonth = getDaysInMonth(nextYear, nextMonthNumber);
      const nextMonth = monthMap.get(nextMonthNumber) ?? "";
      const nextNbEvent = eventInMonth(nextYear, nextMonthNumber);
      setNbEvent(nextNbEvent);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setDisplayedYear(nextYear);
      setAsideEventTitle(undefined);
      setAsideEventAnimator(undefined);
      setAsideEventDate(undefined);
    }
  }

  return (
    <div id="Calendar" className="Calendar">
      <div id="title-container" className="title-container">
        <h1>Calendrier OpenBox</h1>
      </div>

      <div id="content" className="content">
        <aside id="month-information" className="month-information">
          <div id="text-container" className="text-container">
            <p id="year" className="date">
              {displayedYear}
            </p>

            <p id="month" className="date">
              {displayedMonth}
            </p>

            <p id="nb-event" className="nb-event">
              {nbEvent > 1 ? `${nbEvent} évènements` : `${nbEvent} évènement`}
            </p>
          </div>

          <div id="button-container" className="button-container">
            <button className="button" onClick={handleNextButton}>
              Suivant
            </button>
            <button className="button" onClick={handlePrevButton}>
              Précédent
            </button>
          </div>

          <div id="incoming-event" className="incoming-event">
            {asideEventTitle && asideEventAnimator && asideEventDate ? (
              <div className="event">
                <div className="sidebar"></div>

                <Link
                  to={asideId ? `/event/${asideId}` : "/calendar"}
                  className="event-info-container"
                >
                  <p className="event-name" title={asideEventTitle}>
                    {asideEventTitle}
                  </p>
                  <p className="alumni">{asideEventAnimator}</p>
                  <p className="event-hour">{asideEventDate}</p>
                </Link>
              </div>
            ) : null}
          </div>
        </aside>

        <main id="calendar" className="calendar">
          {displayedDaysInMonth.map((day, index) => {
            let eventCount = 0;
            return (
              <div
                onClick={(event) => {
                  const targetedElement = event.currentTarget;
                  const childElement = targetedElement.children;
                  const childElementClasses = Array.from(childElement);
                  if (childElementClasses[1]) {
                    const childElementToUse = childElementClasses[1].children;
                    const childElementToUseClasses =
                      Array.from(childElementToUse);
                    const classChild = childElementToUseClasses[1].classList
                      .toString()
                      .split("_");
                    const classToUse = classChild.slice(1);
                    const eventObject = {
                      Titre: classToUse[0],
                      Animateurs: classToUse[1],
                      "Date de l'event": classToUse[2],
                      id: classToUse[3],
                    };
                    setAsideEventTitle(eventObject.Titre);
                    setAsideEventAnimator(eventObject.Animateurs);
                    setAsideEventDate(eventObject["Date de l'event"]);
                    setAsideId(Number(eventObject["id"]));
                  }
                }}
                id={day.day.toString()}
                className="calendar-day"
                key={day.day}
              >
                <span>{day.day}</span>
                {allEventBoxArray.map((event: any, index: number) => {
                  if (
                    day.day === event["Jour"] &&
                    day.monthNumber === event["Mois"] &&
                    day.year === event["Année"]
                  ) {
                    eventCount++;
                    return (
                      <div
                        className={`event-day ${
                          day.day === event["Jour"] &&
                          day.monthNumber === event["Mois"] &&
                          day.year === event["Année"] &&
                          "active"
                        }`}
                        key={index}
                      >
                        <p className="event-nb-day">
                          {eventCount > 1
                            ? `${eventCount} évènements`
                            : `${eventCount} évènement`}
                        </p>
                        <p
                          className={`event-title _ ${event["Titre"]} _ ${event["Animateurs"]} _ ${event["Date de l'event"]} _ ${event.id}`}
                          key={event["Titre"]}
                        >
                          {event["Titre"]}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

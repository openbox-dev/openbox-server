import { useState } from "react";

const date = new Date();

const month = date.getMonth();

const monthDateOptions: Intl.DateTimeFormatOptions = { month: "long" };

function getMonthInLetter(date: Date) {
  let monthInLetters: string = date.toLocaleString("fr-Fr", monthDateOptions);

  monthInLetters =
    monthInLetters.charAt(0).toLocaleUpperCase() + monthInLetters.slice(1);

  return monthInLetters;
}

const monthInLetters = getMonthInLetter(date);

const weekDayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };

const year = date.getFullYear();

const numberOfEvent = 5;

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const daysInMonth = [];
  while (date.getMonth() === month) {
    const dayInfo = {
      day: date.getDate(),
      weekDay: new Intl.DateTimeFormat("fr-Fr", weekDayOptions).format(date),
      month: new Intl.DateTimeFormat("fr-Fr", monthDateOptions).format(date),
    };
    daysInMonth.push(dayInfo);
    date.setDate(date.getDate() + 1);
  }
  return daysInMonth;
}

function convertMonthNumberToText(year: number, month: number) {
  const date = new Date(year, month, 1);
  let monthInLetters = date.toLocaleString("fr-FR", monthDateOptions);
  monthInLetters =
    monthInLetters.charAt(0).toLocaleUpperCase() + monthInLetters.slice(1);
  return monthInLetters;
}

const daysInMonth = getDaysInMonth(year, month);

export default function Calendar() {
  const [monthNumber, setMonthNumber] = useState(month);
  const [displayedMonth, setDisplayedMonth] = useState(monthInLetters);
  const [displayedYear, setDisplayedYear] = useState(year);
  const [displayedDaysInMonth, setDisplayedDaysInMonth] = useState(daysInMonth);

  function handleNextButton() {
    if (monthNumber < 11) {
      const nextMonthNumber = monthNumber + 1;
      const nextDaysInMonth = getDaysInMonth(displayedYear, nextMonthNumber);
      const nextMonth = convertMonthNumberToText(
        displayedYear,
        nextMonthNumber
      );
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
    } else if (monthNumber === 11) {
      const nextMonthNumber = 0;
      const nextYear = displayedYear + 1;
      const nextDaysInMonth = getDaysInMonth(nextYear, nextMonthNumber);
      const nextMonth = convertMonthNumberToText(nextYear, nextMonthNumber);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setDisplayedYear(nextYear);
    }
  }

  function handlePrevButton() {
    if (monthNumber > 0) {
      const nextMonthNumber = monthNumber - 1;
      const nextDaysInMonth = getDaysInMonth(displayedYear, nextMonthNumber);
      const nextMonth = convertMonthNumberToText(
        displayedYear,
        nextMonthNumber
      );
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
    } else if (monthNumber === 0) {
      const nextMonthNumber = 11;
      const nextYear = displayedYear - 1;
      const nextDaysInMonth = getDaysInMonth(nextYear, nextMonthNumber);
      const nextMonth = convertMonthNumberToText(nextYear, nextMonthNumber);
      setMonthNumber(nextMonthNumber);
      setDisplayedDaysInMonth(nextDaysInMonth);
      setDisplayedMonth(nextMonth);
      setDisplayedYear(nextYear);
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
              {numberOfEvent > 1
                ? `${numberOfEvent} événements`
                : `${numberOfEvent} événement`}
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

          <div id="incoming-event" className="incoming-event"></div>
        </aside>

        <main id="calendar" className="calendar">
          {displayedDaysInMonth.map((day) => {
            return (
              <div className="calendar-day" key={day.day}>
                <span>{day.day}</span>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

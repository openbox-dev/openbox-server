const date = new Date();

const month = date.getMonth();
const monthDateOptions: Intl.DateTimeFormatOptions = { month: "long" };
const monthInLetters: string = new Intl.DateTimeFormat(
  "fr-Fr",
  monthDateOptions
).format(date);

const weekDayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
const weekDayInletters: string = new Intl.DateTimeFormat(
  "fr-Fr",
  weekDayOptions
).format(date);

const year = date.getFullYear();

const numberOfEvent = 5;

function getNumberOfDaysAMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

const numberOfDaysAMonth = getNumberOfDaysAMonth(year, month);

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

const daysInMonth = getDaysInMonth(year, month);

export default function Calendar() {
  return (
    <div id="Calendar" className="Calendar">
      <div id="title-container" className="title-container">
        <h1>Calendrier OpenBox</h1>
      </div>

      <div id="content" className="content">
        <aside id="month-information" className="month-information">
          <p id="year" className="date">
            {year}
          </p>
          <p id="month" className="date">
            {monthInLetters}
          </p>
          <p id="nb-event" className="nb-event">
            {numberOfEvent > 1
              ? `${numberOfEvent} événements`
              : `${numberOfEvent} événement`}
          </p>
          <div id="button-container" className="button-coontainer">
            <button>Suivant</button>
            <button>Précédent</button>
          </div>
          <div id="incoming-event" className="incoming-event"></div>
        </aside>

        <main id="calendar" className="calendar">
          {daysInMonth.map((day) => {
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

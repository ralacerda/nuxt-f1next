import response from "./response.json";

export default eventHandler(() => {
  function parseEvent(event) {
    const { season, round, url, Circuit, raceName, date, time, ...events } =
      event;

    const location = Circuit.Location.locality;
    const country = Circuit.Location.country;

    const schedule: { name: string; datetime: string }[] = [];
    schedule.push({ name: "Race", datetime: `${date}T${time}` });

    Object.entries(events).forEach(([name, datetime]) => {
      schedule.push({ name, datetime: `${datetime.date}T${datetime.time}` });
    });

    return {
      location,
      country,
      schedule,
      round: parseInt(round),
      date,
      raceName,
      generated: Date.now(),
    };
  }

  const eventList = response.MRData.RaceTable.Races;

  return eventList.map((event) => parseEvent(event));
});

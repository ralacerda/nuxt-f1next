import type { Schedule } from "~~/types";

export default function getNextRound(events: Schedule | null) {
  // We add 2 more hours to the current time
  const timeToCheck = new Date(Date.now() - 2 * 60 * 60 * 1000);

  if (events) {
    const nextEvent = events.find((event) => {
      const raceDatetime = event.schedule.filter(
        (event) => event.name == "Race"
      )[0].datetime;
      return new Date(raceDatetime) >= timeToCheck ? event.round : false;
    });

    return nextEvent ? parseInt(nextEvent.round) : 1;
  }
  return 1;
}

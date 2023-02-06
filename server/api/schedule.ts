import response from "./response.json";
import type { Schedule } from "~~/types";
import { z } from "zod";

const raceDetail = z.object({
  date: z.string(),
  time: z.string(),
});

const apiRaceResponse = z.object({
  season: z.string(),
  url: z.string(),
  round: z.string(),
  raceName: z.string(),
  Circuit: z.object({
    Location: z.object({
      country: z.string(),
    }),
  }),
  date: z.string(),
  time: z.string(),
  FirstPractice: raceDetail,
  SecondPractice: raceDetail,
  ThirdPractice: raceDetail.optional(),
  Qualifying: raceDetail,
  Sprint: raceDetail.optional(),
});

const apiResponse = apiRaceResponse.array();

type ApiRaceResponse = z.infer<typeof apiRaceResponse>;

export default eventHandler((): Schedule => {
  function parseEvent(event: ApiRaceResponse) {
    const { season, round, url, Circuit, raceName, date, time, ...events } =
      event;

    const country = Circuit.Location.country;

    const schedule: { name: string; datetime: string }[] = [];
    schedule.push({ name: "Race", datetime: `${date}T${time}` });

    Object.entries(events).forEach(([name, datetime]) => {
      schedule.push({
        /* If a lower case if followed by a upper case,
        replace it with the same letters with a space between */
        name: name.replace(/([a-z])([A-Z])/g, `$1 $2`),
        datetime: `${datetime.date}T${datetime.time}`,
      });
    });

    return {
      country,
      schedule,
      round,
      date,
      raceName,
    };
  }

  const eventList = response.MRData.RaceTable.Races;
  apiResponse.parse(eventList);

  return eventList.map((event) => parseEvent(event));
});

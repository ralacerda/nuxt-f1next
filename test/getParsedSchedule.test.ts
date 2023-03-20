import { describe, test, expect, vi } from "vitest";
import getParsedSchedule from "composables/getParsedSchedule";

describe("Parse the schedule", () => {
  vi.setSystemTime("2023-03-04T14:26:21.000Z");
  test("Get the round if the race is in the same day", () => {
    const result = getParsedSchedule(schedule.schedule, 1, 1);
    expect(result).toMatchSnapshot();
  });
});

const schedule = {
  country: "Bahrain",
  schedule: [
    { name: "Race", datetime: "2023-03-05T15:00:00Z" },
    { name: "First Practice", datetime: "2023-03-03T11:30:00Z" },
    { name: "Second Practice", datetime: "2023-03-03T15:00:00Z" },
    { name: "Third Practice", datetime: "2023-03-04T11:30:00Z" },
    { name: "Qualifying", datetime: "2023-03-04T15:00:00Z" },
  ],
  round: "1",
  date: "2023-03-05",
  raceName: "Bahrain Grand Prix",
};

import { describe, expect, test, vi } from "vitest";
import getNextRound from "composables/getNextRound";
import type { Schedule } from "types";

describe("Get the current round correctly", () => {
  test("Get the round if the race is in the same day", () => {
    vi.setSystemTime(new Date("2023-03-19T20:00:00Z"));
    expect(getNextRound(testSchedule)).toBe(2);
  });

  test("Get the current round when the race started less then 2 hours ago", () => {
    vi.setSystemTime(new Date("2023-03-19T23:00:00Z"));
    expect(getNextRound(testSchedule)).toBe(2);
  });

  test("Get the next round when the race started more than 2 hours ago", () => {
    vi.setSystemTime(new Date("2023-03-19T23:30:00Z"));
    expect(getNextRound(testSchedule)).toBe(3);
  });
});

const testSchedule: Schedule = [
  {
    country: "First",
    schedule: [{ name: "Race", datetime: "2023-02-19T10:00:00Z" }],
    round: "1",
    date: "2023-02-19",
    raceName: "GP First",
  },
  {
    country: "Second",
    schedule: [{ name: "Race", datetime: "2023-03-19T21:00:00Z" }],
    round: "2",
    date: "2023-03-19",
    raceName: "GP Second",
  },
  {
    country: "Third",
    schedule: [{ name: "Race", datetime: "2023-04-30T15:00:00Z" }],
    round: "3",
    date: "2023-04-30",
    raceName: "GP Third",
  },
];

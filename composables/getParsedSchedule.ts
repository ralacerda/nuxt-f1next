import { formatTimeAgo } from "@vueuse/core";

export default function (
  eventSchedule: { name: string; datetime: string }[],
  round: number,
  nextRound: number
) {
  const date = new Date(Date.now());
  const result = eventSchedule
    .map((event) => ({
      ...event,
      datetime: new Date(event.datetime),
    }))
    .sort((a, b) => a.datetime.getTime() - b.datetime.getTime())
    .map((event) => ({
      ...event,
      relativeTime: formatTimeAgo(event.datetime, { rounding: "floor" }, date),
      state: event.datetime > date ? "future" : "past",
    }));
  if (round == nextRound) {
    const next = result.findIndex((event) => event.state == "future");
    result[next].state = "next";
  }
  return result;
}

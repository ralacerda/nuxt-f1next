type eventScheadule = {
  name: string;
  datetime: string;
  relativeTime: string;
  state: "past" | "next" | "future";
};

type eventInfo = {
  round: number;
  raceName: string;
  location: string;
  country: string;
  schedule: eventScheadule[];
};

// const schedule: eventScheadule[] = [
//   {
//     name: "First Practice",
//     relativeTime: useTimeAgo("2023-02-02T10:30:00Z").value,
//     date: useDateFormat(new Date("2023-02-02T10:30:00Z")).value,
//     state: "past",
//   },

//   {
//     name: "Second Practice",
//     relativeTime: useTimeAgo("2023-02-03T10:30:00Z").value,
//     date: useDateFormat(new Date("2023-02-03T10:30:00Z")).value,
//     state: "past",
//   },
//   {
//     name: "Third Practice",
//     relativeTime: useTimeAgo("2023-02-04T10:30:00Z").value,
//     date: useDateFormat(new Date("2023-02-04T10:30:00Z")).value,
//     state: "next",
//   },
//   {
//     name: "Qualifying",
//     relativeTime: useTimeAgo("2023-02-05T20:30:00Z").value,
//     date: useDateFormat(new Date("2023-02-05T20:30:00Z")).value,
//     state: "future",
//   },
//   {
//     name: "Race",
//     relativeTime: useTimeAgo("2023-02-06T10:30:00Z").value,
//     date: useDateFormat(new Date("2023-02-06T10:30:00Z")).value,
//     state: "future",
//   },
// ];

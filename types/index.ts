export type EventDetails = {
  country: string;
  schedule: { name: string; datetime: string }[];
  round: string;
  date: string;
  raceName: string;
};

export type Schedule = EventDetails[];

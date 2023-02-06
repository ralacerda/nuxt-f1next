<script setup lang="ts">
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/yantramanav/400.css";
import "@fontsource/yantramanav/700.css";
import ChevronRightIcon from "~icons/mdi/chevron-right";
import ChevronLeftIcon from "~icons/mdi/chevron-left";
import type { Schedule } from "~~/types";
import { formatTimeAgo } from "@vueuse/core";

const { data: events } = await useFetch("/api/schedule");

const fakeDate = new Date("2023-05-21");
const fakeTime = new Date("2023-05-20T08:32:24Z");

function getNextRound(events: Schedule | null) {
  if (events) {
    const nextEvent = events.find((event) => {
      if (new Date(event.date) >= fakeDate) {
        return event.round;
      } else {
        return false;
      }
    });

    return nextEvent ? parseInt(nextEvent.round) : 1;
  }
  return 1;
}

const round = useState<number>("round", () => getNextRound(events.value));

function parseSchedule(eventSchedule: { name: string; datetime: string }[]) {
  return eventSchedule
    .map((event) => ({
      ...event,
      datetime: new Date(event.datetime),
    }))
    .sort((a, b) => a.datetime.getTime() - b.datetime.getTime())
    .map((event) => ({
      ...event,
      relativeTime: formatTimeAgo(event.datetime, {}, fakeTime),
      state: event.datetime > fakeTime ? "future" : "past",
      datetimeFormatted: useDateFormat(event.datetime, "DD MMM HH:mm"),
    }));
}

const roundEvent = computed(() => {
  if (events.value && round.value) {
    const event = events.value[(round.value as number) - 1];
    return {
      round: event.round,
      raceName: event.raceName,
      schedule: parseSchedule(event.schedule),
    };
  }
});

function changeRound(value: number) {
  const nextValeu = round.value + value;
  if (events.value) {
    round.value = Math.min(Math.max(nextValeu, 1), events.value?.length);
  }
}
</script>

<template>
  <img src="./assets/flag-1645262.jpg" />
  <div class="content" ref="swipeRegion">
    <header>
      <h1 class="app-title">F1Next</h1>
      <div class="round-info">
        <div class="round-number">
          Round {{ round }} of {{ events?.length }}
        </div>
        <h2 class="round-name">{{ roundEvent?.raceName }}</h2>
      </div>
    </header>
    <main>
      <ChevronLeftIcon @click="changeRound(-1)" />
      <div class="card">
        <div
          class="session-info"
          v-for="event in roundEvent?.schedule"
          :data-state="event.state"
          :key="event.name"
        >
          <div class="session-name">{{ event.name }}</div>
          <div class="relative">{{ event.relativeTime }}</div>
          <div
            class="info-datetime"
            v-html="event.datetimeFormatted.value"
          ></div>
        </div>
      </div>
      <ChevronRightIcon @click="changeRound(+1)" />
    </main>
    <footer>Americas/São Paulo (GTM-03:00)</footer>
  </div>
</template>

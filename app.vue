<script setup lang="ts">
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/yantramanav/400.css";
import "@fontsource/yantramanav/700.css";
import ChevronRightIcon from "~icons/mdi/chevron-right";
import ChevronLeftIcon from "~icons/mdi/chevron-left";
import { useClamp } from "@vueuse/math";

const { data: events } = await useFetch("/api/schedule");

const fakeDate = new Date("2023-05-21");

function getNextRound(events) {
  const nextEvent = events.find((event) => {
    console.log(event.date);
    if (new Date(event.date) >= fakeDate) {
      return event.round;
    } else {
      return false;
    }
  });

  return nextEvent?.round;
}

const round = useState("round", () => getNextRound(events.value));

const roundEvent = computed(() =>
  events.value ? events.value[round.value - 1] : null
);
</script>

<template>
  <img src="./assets/flag-1645262.jpg" />
  <div class="content">
    <header>
      <h1 class="app-title">F1Next</h1>
      <div class="round-info">
        <div class="round-number">Round {{ round }} of 23</div>
        <h2 class="round-name">{{ roundEvent?.raceName }}</h2>
        <input type="number" v-model="round" min="1" max="23" />
      </div>
    </header>
    <main>
      <ChevronLeftIcon @click="round--" />
      {{ roundEvent }}
      <!-- <div class="card">
        <div
          class="session-info"
          v-for="event in roundEvent"
          :data-state="event.state"
        >
          <div class="session-name">{{ event.name }}</div>
          <div class="relative">{{ event.relativeTime }}</div>
          <div class="info-datetime">{{ event.date }}</div>
        </div>
      </div> -->
      <ChevronRightIcon @click="round++" />
    </main>
    <footer>Americas/São Paulo (GTM-03:00)</footer>
  </div>
</template>

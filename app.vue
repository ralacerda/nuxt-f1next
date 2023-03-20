<script setup lang="ts">
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/yantramanav/400.css";
import "@fontsource/yantramanav/700.css";
import ChevronRightIcon from "~icons/mdi/chevron-right";
import ChevronLeftIcon from "~icons/mdi/chevron-left";

const { data: events } = await useFetch("/api/schedule");

const nextRound = getNextRound(events.value);
const round = useState<number>("round", () => nextRound);

const roundEvent = computed(() => {
  if (events.value && round.value) {
    const event = events.value[(round.value as number) - 1];
    return {
      round: event.round,
      raceName: event.raceName,
      schedule: getParsedSchedule(event.schedule, round.value, nextRound),
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
      <button
        @click="changeRound(-1)"
        aria-label="Previous Event"
        :disabled="round == 1"
      >
        <ChevronLeftIcon class="chevron" />
      </button>
      <div class="card">
        <div
          class="session-info"
          v-for="event in roundEvent?.schedule"
          :data-state="event.state"
          :key="event.name"
        >
          <div class="session-name">{{ event.name }}</div>
          <div class="relative">{{ event.relativeTime }}</div>
          <div class="info-datetime">
            {{ useDateFormat(event.datetime, "DD MMM HH:mm").value }}
          </div>
        </div>
      </div>
      <button
        @click="changeRound(+1)"
        aria-label="Next Event"
        :disabled="round == events?.length"
      >
        <ChevronRightIcon class="chevron" />
      </button>
    </main>
    <footer>
      Timezone: {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}
    </footer>
  </div>
</template>

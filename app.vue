<script setup lang="ts">
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/yantramanav/400.css";
import "@fontsource/yantramanav/700.css";
import ChevronRightIcon from "~icons/mdi/chevron-right";
import ChevronLeftIcon from "~icons/mdi/chevron-left";
</script>

<template>
  <header>
    <h1 class="app-title">F1Next</h1>
    <div class="round-info">
      <div class="round-number">Round 6 of 23</div>
      <h2 class="round-name">Emilia Romagna Italy Grand Pix</h2>
    </div>
  </header>
  <main>
    <ChevronLeftIcon />
    <div class="card">
      <div class="session-info">
        <div class="session-name">First Practice</div>
        <div class="relative">Yesterday</div>
        <div class="info-datetime">May 19 11:30</div>
      </div>
      <div class="session-info">
        <div class="session-name">Second Practice</div>
        <div class="relative">18 hours ago</div>
        <div class="info-datetime">May 19 11:30</div>
      </div>
      <div class="session-info">
        <div class="session-name">Third Practice</div>
        <div class="relative">yesterday</div>
        <div class="info-datetime">May 20 11:30</div>
      </div>
      <div class="session-info">
        <div class="session-name">Qualifying</div>
        <div class="relative">yesterday</div>
        <div class="info-datetime">May 20 11:30</div>
      </div>
      <div class="session-info">
        <div class="session-name">Race</div>
        <div class="relative">in 27 hours 13 minutes</div>
        <div class="info-datetime">May 21 11:30</div>
      </div>
    </div>
    <ChevronRightIcon />
  </main>
  <footer>Americas/São Paulo (GTM-03:00)</footer>
</template>

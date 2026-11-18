<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8"
    >
      <p>&copy; {{ year }} {{ profile.name }}. All rights reserved.</p>
      <p>Built with Nuxt.js &amp; Tailwind CSS</p>
    </div>
  </footer>
</template>

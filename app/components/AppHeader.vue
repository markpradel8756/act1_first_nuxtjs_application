<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' }
]
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
    <nav
      class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <!-- Homepage logo -->
      <NuxtLink
        to="/"
        class="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105"
        >
          {{ profile.initials }}
        </span>
        <span class="hidden font-semibold text-slate-900 sm:inline">{{ profile.name }}</span>
      </NuxtLink>

      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:px-4"
            exact-active-class="bg-indigo-50! text-indigo-700!"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

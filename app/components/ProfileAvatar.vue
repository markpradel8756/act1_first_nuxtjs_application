<script setup lang="ts">
import { profile } from '~/data/profile'

// size: 'lg' for the homepage hero, 'md' for the profile page header
withDefaults(defineProps<{ size?: 'md' | 'lg' }>(), { size: 'lg' })
</script>

<template>
  <div class="relative inline-block">
    <!-- Profile glow -->
    <div
      class="absolute -inset-3 rounded-full bg-linear-to-tr from-indigo-400 to-teal-300 opacity-40 blur-2xl"
      aria-hidden="true"
    />
    <img
      :src="profile.avatar"
      :alt="`Profile picture of ${profile.name}`"
      :class="[
        'relative rounded-full object-cover ring-4 ring-white shadow-xl transition-transform duration-300 hover:scale-[1.03]',
        size === 'lg' ? 'h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72' : 'h-28 w-28 sm:h-32 sm:w-32'
      ]"
    >
  </div>
</template>

<!-- Avatar sizes -->

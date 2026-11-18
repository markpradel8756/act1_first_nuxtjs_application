<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({ title: `${profile.name} | Home` })

const highlights = [
  { icon: 'academic', label: 'Studying', value: profile.education[0]?.program ?? '' },
  { icon: 'location', label: 'Based in', value: profile.personalInfo.find(i => i.label === 'Location')?.value ?? '' },
  { icon: 'book', label: 'Currently learning', value: 'Nuxt.js & Tailwind CSS' }
]
</script>

<template>
  <!-- Prevent horizontal overflow -->
  <div class="overflow-x-clip">
    <!-- Hero -->
    <section class="relative">
      <!-- Decorative background -->
      <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-teal-100 blur-3xl" />
      </div>

      <div
        class="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8 lg:py-28"
      >
        <!-- Text content -->
        <div class="order-2 text-center lg:order-1 lg:text-left">
          <p
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm"
          >
            <span class="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
            Welcome to my personal website
          </p>

          <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I'm
            <span class="bg-linear-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
              {{ profile.name }}
            </span>
          </h1>

          <p class="mt-3 text-lg font-medium text-slate-500 sm:text-xl">
            {{ profile.tagline }}
          </p>

          <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {{ profile.intro }}
          </p>

          <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <NuxtLink
              to="/profile"
              class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              View My Profile
              <AppIcon name="arrowRight" class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </NuxtLink>
            <a
              href="#welcome"
              class="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <!-- Profile avatar -->
        <div class="order-1 flex justify-center lg:order-2">
          <ProfileAvatar size="lg" />
        </div>
      </div>
    </section>

    <!-- Welcome section -->
    <section id="welcome" class="scroll-mt-20 px-4 pb-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 class="text-2xl font-bold text-white sm:text-3xl">
            Glad you're here!
          </h2>
          <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
            {{ profile.welcome }}
          </p>

          <ul class="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <li
              v-for="item in highlights"
              :key="item.label"
              class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors duration-200 hover:bg-white/10"
            >
              <AppIcon :name="item.icon" class="h-6 w-6 text-teal-300" />
              <p class="mt-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {{ item.label }}
              </p>
              <p class="mt-1 font-medium text-white">
                {{ item.value }}
              </p>
            </li>
          </ul>

          <NuxtLink
            to="/profile"
            class="mt-10 inline-flex items-center gap-2 font-semibold text-teal-300 transition-colors duration-200 hover:text-teal-200 focus:outline-none focus-visible:underline"
          >
            Read my full profile
            <AppIcon name="arrowRight" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

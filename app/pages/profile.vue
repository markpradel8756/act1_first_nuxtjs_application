<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({ title: `${profile.name} | Profile` })
</script>

<template>
  <div>
    <!-- Profile header -->
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <NuxtLink
          to="/"
          class="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-indigo-700 focus:outline-none focus-visible:underline"
        >
          <AppIcon name="arrowLeft" class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Home
        </NuxtLink>

        <div class="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-8 sm:text-left">
          <ProfileAvatar size="md" />
          <div>
            <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
              About Me
            </p>
            <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {{ profile.name }}
            </h1>
            <p class="mt-2 text-lg text-slate-500">
              {{ profile.tagline }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-8">
      <!-- Personal information -->
      <SectionCard title="Personal Information" icon="user">
        <dl class="divide-y divide-slate-100">
          <div
            v-for="item in profile.personalInfo"
            :key="item.label"
            class="grid grid-cols-[7.5rem_1fr] gap-4 py-3 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr]"
          >
            <dt class="text-sm font-medium text-slate-500">
              {{ item.label }}
            </dt>
            <dd class="text-sm font-medium break-words text-slate-900">
              {{ item.value }}
            </dd>
          </div>
        </dl>
      </SectionCard>

      <!-- Education -->
      <SectionCard title="Educational Background" icon="academic">
        <ol class="relative space-y-8 border-l-2 border-indigo-100 pl-6">
          <li v-for="school in profile.education" :key="school.level" class="relative">
            <span
              :class="[
                'absolute top-1.5 -left-[1.95rem] h-3.5 w-3.5 rounded-full ring-4 ring-white',
                school.current ? 'bg-indigo-600' : 'bg-slate-300'
              ]"
              aria-hidden="true"
            />
            <p class="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              {{ school.level }}
              <span
                v-if="school.current"
                class="ml-2 rounded-full bg-teal-50 px-2 py-0.5 text-[0.7rem] font-semibold text-teal-700 normal-case"
              >Current</span>
            </p>
            <h3 class="mt-1 font-semibold text-slate-900">
              {{ school.school }}
            </h3>
            <p class="text-sm text-slate-600">
              {{ school.program }}
            </p>
            <p class="mt-1 text-sm text-slate-500">
              {{ school.details }}
            </p>
          </li>
        </ol>
      </SectionCard>

      <!-- Skills and interests -->
      <div class="lg:col-span-2">
        <SectionCard title="Skills & Interests" icon="sparkles">
          <div class="grid gap-8 md:grid-cols-2">
            <div>
              <h3 class="mb-3 text-sm font-semibold tracking-wider text-slate-500 uppercase">
                Technical Skills
              </h3>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="skill in profile.technicalSkills"
                  :key="skill"
                  class="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 transition-colors duration-200 hover:bg-indigo-100"
                >
                  {{ skill }}
                </li>
              </ul>
            </div>

            <div>
              <h3 class="mb-3 text-sm font-semibold tracking-wider text-slate-500 uppercase">
                Personal Interests
              </h3>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="interest in profile.interests"
                  :key="interest"
                  class="rounded-lg bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-800 transition-colors duration-200 hover:bg-teal-100"
                >
                  {{ interest }}
                </li>
              </ul>
            </div>
          </div>

          <h3 class="mt-8 mb-3 text-sm font-semibold tracking-wider text-slate-500 uppercase">
            Areas of Expertise
          </h3>
          <ul class="grid gap-4 sm:grid-cols-2">
            <li
              v-for="area in profile.expertise"
              :key="area.title"
              class="rounded-xl border border-slate-200 p-4 transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-50/40"
            >
              <p class="font-semibold text-slate-900">
                {{ area.title }}
              </p>
              <p class="mt-1 text-sm text-slate-600">
                {{ area.description }}
              </p>
            </li>
          </ul>
        </SectionCard>
      </div>

      <!-- Hobbies -->
      <div class="lg:col-span-2">
        <SectionCard title="Hobbies" icon="heart">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li
              v-for="hobby in profile.hobbies"
              :key="hobby.title"
              class="group rounded-xl border border-slate-200 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <span
                class="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-200 group-hover:bg-indigo-600 group-hover:text-white"
              >
                <AppIcon :name="hobby.icon" class="h-5 w-5" />
              </span>
              <p class="mt-4 font-semibold text-slate-900">
                {{ hobby.title }}
              </p>
              <p class="mt-1 text-sm leading-relaxed text-slate-600">
                {{ hobby.description }}
              </p>
            </li>
          </ul>
        </SectionCard>
      </div>

      <!-- Homepage link -->
      <div class="flex justify-center pt-2 lg:col-span-2">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <AppIcon name="home" class="h-5 w-5" />
          Return to Homepage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

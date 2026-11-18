<script setup lang="ts">
// Profile section card
defineProps<{ title: string, icon: string }>()
</script>

<template>
  <section
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
  >
    <h2 class="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
      <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
        <AppIcon :name="icon" class="h-5 w-5" />
      </span>
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

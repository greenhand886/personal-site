<script setup lang="ts">
defineProps<{
  number: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  color: string;
  link: string;
}>();
</script>

<template>
  <article class="project-card reveal" :class="`project-${color}`">
    <div class="project-topline">
      <span>{{ number }}</span>
      <a :href="link" target="_blank" rel="noreferrer" :aria-label="`查看 ${title}`">
        <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </a>
    </div>
    <div class="project-visual" aria-hidden="true">
      <span class="visual-dot" />
      <div class="visual-window">
        <div class="visual-bar"><i /><i /><i /></div>
        <div class="visual-content"><span /><span /><span /></div>
      </div>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="project-result">{{ result }}</div>
    <div class="tag-list">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </article>
</template>

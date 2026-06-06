<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  number: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  color: string;
  link: string;
}>();

const visualData = computed(() => {
  const variants = {
    mint: { label: "MODEL.PIPELINE", value: "RF.V1", bars: [62, 84, 72, 92, 78] },
    blue: { label: "RESUME.WORKFLOW", value: "AGENT", bars: [44, 68, 88, 76, 94] },
    orange: { label: "VECTOR.SEARCH", value: "RAG", bars: [78, 54, 92, 64, 82] },
  };
  return variants[props.color as keyof typeof variants] ?? variants.mint;
});
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
      <span class="visual-axis axis-x" />
      <span class="visual-axis axis-y" />
      <div class="visual-window" :class="`visual-${color}`">
        <div class="visual-bar"><i /><i /><i /></div>
        <div class="visual-dashboard">
          <div class="visual-metric">
            <small>{{ visualData.label }}</small>
            <strong>{{ visualData.value }}</strong>
          </div>
          <div class="visual-chart">
            <i v-for="height in visualData.bars" :key="height" :style="{ height: `${height}%` }" />
          </div>
        </div>
      </div>
      <span class="visual-caption">PROJECT / {{ number }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="project-result">{{ result }}</div>
    <div class="tag-list">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </article>
</template>

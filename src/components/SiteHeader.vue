<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const open = ref(false);
const scrolled = ref(false);

const links = [
  { label: "关于", href: "#about" },
  { label: "能力", href: "#skills" },
  { label: "项目", href: "#projects" },
  { label: "实习", href: "#experience" },
];

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header-inner">
      <a class="logo" href="#top" aria-label="返回首页">
        <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
          <rect x="1" y="1" width="38" height="38" rx="12" />
          <path d="m17 13-7 7 7 7M23 13l7 7-7 7" />
        </svg>
        <span>KT<span class="accent">.</span></span>
      </a>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="open"
        :aria-label="open ? '关闭导航' : '打开导航'"
        @click="open = !open"
      >
        <span class="menu-icon" :class="{ 'is-open': open }" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <nav :class="{ 'is-open': open }" aria-label="主导航">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="open = false">
          {{ link.label }}
        </a>
        <a class="nav-contact" href="#contact" @click="open = false">联系我</a>
      </nav>
    </div>
  </header>
</template>

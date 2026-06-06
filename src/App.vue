<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import ProjectCard from "./components/ProjectCard.vue";
import SectionHeading from "./components/SectionHeading.vue";
import { internship, profile, projects, skills, stats } from "./data/portfolio";

const copied = ref(false);
let copyTimer: ReturnType<typeof setTimeout> | undefined;

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch {
    const input = document.createElement("textarea");
    input.value = profile.email;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = false), 2200);
};

onMounted(async () => {
  await nextTick();
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
});
</script>

<template>
  <SiteHeader />
  <main>
    <section id="top" class="hero">
      <div class="hero-grid" aria-hidden="true" />
      <div class="hero-glow" aria-hidden="true" />
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="availability reveal"><span />{{ profile.availability }}</div>
          <p class="hero-kicker reveal">Hello, I am {{ profile.name }}</p>
          <h1 class="reveal">用代码探索<br /><em>数据与智能</em></h1>
          <p class="hero-copy reveal">{{ profile.intro }}</p>
          <div class="hero-actions reveal">
            <a class="button button-primary" href="#projects">
              查看我的项目
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="m7 10 5 5 5-5" /></svg>
            </a>
            <a class="text-link" :href="profile.github" target="_blank" rel="noreferrer">
              查看 GitHub
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          </div>
        </div>
        <aside class="hero-console reveal" aria-label="个人技术方向概览">
          <div class="console-head">
            <span>PROFILE.SYS</span>
            <span class="console-live"><i /> LIVE</span>
          </div>
          <div class="console-body">
            <p><span>01</span><code>focus</code><strong>Python / AI</strong></p>
            <p><span>02</span><code>building</code><strong>Agent + RAG</strong></p>
            <p><span>03</span><code>workflow</code><strong>Data → Insight</strong></p>
          </div>
          <div class="console-orbit" aria-hidden="true">
            <span class="orbit-ring ring-one" /><span class="orbit-ring ring-two" />
            <span class="orbit-core">AI</span>
            <i class="orbit-node node-one" /><i class="orbit-node node-two" /><i class="orbit-node node-three" />
          </div>
          <div class="console-foot"><span>STATUS: READY</span><span>CN / 2026</span></div>
        </aside>
        <div class="hero-meta reveal"><span>{{ profile.role }}</span><span>{{ profile.location }}</span></div>
      </div>
    </section>

    <section id="about" class="about section">
      <div class="container about-layout">
        <SectionHeading eyebrow="01 / About" title="持续学习，也持续把想法做成项目" />
        <div class="about-copy reveal">
          <p class="lead">我是一名数据科学与大数据技术专业学生，求职方向聚焦 Python、AI 与 Web 系统开发。</p>
          <p>
            我喜欢从真实问题出发，通过数据分析、机器学习和大模型工具寻找解决方案。在项目实践中，我关注需求拆解、代码实现、问题排查以及最终交付，希望不断提升独立完成项目的能力。
          </p>
          <div class="stats">
            <div v-for="stat in stats" :key="stat.label"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="skills section">
      <div class="container">
        <SectionHeading eyebrow="02 / Capabilities" title="技术能力与学习方向" text="从数据处理、机器学习，到 AI 应用与 Web 系统开发。" />
        <div class="skill-grid">
          <article v-for="(skill, index) in skills" :key="skill.title" class="skill-card reveal">
            <span class="skill-number">0{{ index + 1 }}</span>
            <div class="skill-visual" :class="`skill-visual-${index + 1}`" aria-hidden="true">
              <template v-if="index === 0">
                <span class="chart-line" />
                <i v-for="point in 5" :key="point" />
              </template>
              <template v-else-if="index === 1">
                <span class="network-core">AI</span>
                <i v-for="node in 5" :key="node" />
              </template>
              <template v-else>
                <span class="stack-layer layer-one" />
                <span class="stack-layer layer-two" />
                <span class="stack-layer layer-three" />
              </template>
            </div>
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.text }}</p>
            <div class="tag-list"><span v-for="tool in skill.tools" :key="tool">{{ tool }}</span></div>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="projects section">
      <div class="container">
        <SectionHeading eyebrow="03 / Selected Work" title="在项目中理解技术" text="三个围绕数据分析、AI Agent 与 RAG 的实践项目。" />
        <div class="project-grid"><ProjectCard v-for="project in projects" :key="project.number" v-bind="project" /></div>
      </div>
    </section>

    <section id="experience" class="experience section">
      <div class="container experience-layout">
        <SectionHeading eyebrow="04 / Internship" title="在真实业务里，积累数据实践经验" />
        <article class="internship-card reveal">
          <div class="internship-heading">
            <span class="period">DATA ANALYSIS</span>
            <h3>{{ internship.role }}</h3>
            <span class="company">{{ internship.company }}</span>
          </div>
          <ol class="task-list">
            <li v-for="task in internship.tasks" :key="task">{{ task }}</li>
          </ol>
        </article>
      </div>
    </section>

    <section id="contact" class="contact section">
      <div class="container contact-inner reveal">
        <span class="eyebrow">05 / Contact</span>
        <h2>期待一次交流，<br /><em>也期待新的机会。</em></h2>
        <p>如果你对我的项目或技术方向感兴趣，欢迎通过邮箱或 GitHub 联系我。</p>
        <div class="contact-actions">
          <button class="button button-primary" type="button" @click="copyEmail">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg>
            {{ copied ? "邮箱已复制" : profile.email }}
          </button>
          <a class="button button-secondary" :href="profile.github" target="_blank" rel="noreferrer">访问 GitHub</a>
        </div>
        <span class="copy-tip" :class="{ visible: copied }" role="status">已复制到剪贴板，可以直接粘贴使用。</span>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-inner">
      <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
      <a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href="#top">回到顶部 ↑</a>
    </div>
  </footer>
</template>

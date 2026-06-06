export const profile = {
  name: "陈可挺",
  role: "数据科学与大数据技术专业 / Python 开发方向 / AI 工具实践者",
  intro:
    "我关注 Python 开发、数据分析、AI Agent、RAG 和 Web 系统开发，希望将 AI 工具应用到实际项目开发中，提高需求分析、代码实现和问题排查效率。",
  location: "Python · AI Agent · RAG · Data",
  email: "1786024918@qq.com",
  availability: "正在寻找 Python / AI 方向的机会",
  github: "https://github.com/greenhand886",
};

export const stats = [
  { value: "12", label: "技术能力" },
  { value: "3", label: "核心项目" },
  { value: "AI+", label: "开发实践" },
];

export const projects = [
  {
    number: "01",
    title: "高校学生成绩分析与智能预警系统",
    description:
      "围绕高校学生学业风险预警场景，使用学生成绩数据构建改进随机森林预测模型，并设计管理员、教师和学生三类角色功能。",
    result: "支持风险查看、成绩分析、信息维护、重新预测与留言管理",
    tags: ["Python", "Flask", "Scikit-learn", "Random Forest", "HTML", "CSS"],
    color: "mint",
    link: "https://github.com/greenhand886",
  },
  {
    number: "02",
    title: "Job Agent 简历匹配与优化系统",
    description:
      "面向求职场景，尝试使用大模型能力实现简历解析、岗位 JD 分析、匹配度评估和简历优化建议生成。",
    result: "探索 AI Agent 在实际求职工具中的应用",
    tags: ["Python", "Streamlit", "LLM API", "Prompt Engineering"],
    color: "blue",
    link: "https://github.com/greenhand886",
  },
  {
    number: "03",
    title: "RAG 企业知识库问答系统",
    description:
      "学习企业内部知识库问答系统的基本流程，包括文档管理、文本切分、向量检索和问答生成。",
    result: "理解并实践 RAG 系统的整体开发流程",
    tags: ["Flask", "Vue3", "MySQL", "RAG", "向量检索"],
    color: "orange",
    link: "https://github.com/greenhand886",
  },
];

export const skills = [
  {
    title: "Python 与数据分析",
    text: "使用 Python 完成数据处理、分析建模与基础 Web 服务开发。",
    tools: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
  },
  {
    title: "AI 应用实践",
    text: "关注大模型工具在知识问答、智能 Agent 与实际工作流中的应用。",
    tools: ["RAG", "AI Agent", "Prompt Engineering"],
  },
  {
    title: "Web 系统开发",
    text: "具备前后端基础开发与项目部署能力，能够完成静态或轻量 Web 项目。",
    tools: ["Flask", "Vue3", "MySQL", "Git", "Vite"],
  },
];

export const internship = {
  company: "平阳威丰电子有限公司",
  role: "数据分析助理实习生",
  tasks: [
    "收集主流平台的产品数据，满足公司目标产品的数据分析需求。",
    "使用 Excel 对库存数据、缺货记录和补货信息进行汇总，并协助生成日常业务统计表。",
    "使用 Python 对订单和库存表进行数据清洗，包括重复数据检查、缺失值处理、字段统一和基础汇总统计，提高数据整理效率。",
    "基于运营需求梳理产品数据，协助推动底层数据的发展与完善。",
  ],
};

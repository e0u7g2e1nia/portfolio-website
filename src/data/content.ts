// ─────────────────────────────────────────────
//  页面文字内容 — 改这个文件即可更新所有页面文字
// ─────────────────────────────────────────────

export const content = {

  // ── Hero 首屏 ────────────────────────────────
  hero: {
    name: "吴沂铮",
    nameEn: "Eugenia Wu",
    tagline: "复旦大学 · 社会学 · 产品思维丨审美知觉丨执行落地",
  },

  // ── Section 01 · AI 共创 ─────────────────────
  aiCollab: {
    sectionLabel: "Section 01 · AI 共创",
    title: "AI 共创",
    desc: "凭借产品思维和内容创作的能力，与AI协作构建产品、工作流和小工具。",
    projects: [
      {
        title: "互动叙事产品Demo",
        desc: "将原创长篇小说结构化，设计地图、可更新词条系统和剧情反转互动的模块，并上线互动叙事产品Demo。",
        tag: "Vibe-Coding",
      },
      {
        title: "工作流与小工具",
        desc: "借助Codex、Obsidian和快捷指令等工具，搭建碎片记录、日记生成、简历定制等工作流，并开发便捷取色器小工具。",
        tag: "Workflow & Tools",
      },
      {
        title: "AI 生图",
        desc: "使用GPT Image2生成人物一致、连续场景、可控风格的图片资产。",
        tag: "Generative",
      },
    ],
  },

  // ── Section 02 · 产品 ────────────────────────
  product: {
    sectionLabel: "Section 02 · 产品",

    loreal: {
      title: "欧莱雅商赛",
      titleEn: "L'Oréal Brandstorm",
      desc: "用“智能喷雾+凝珠+AI小程序”的产品组合，回应中国男性护发市场的三重痛点：复合头皮问题、多场景适配、个性化护理。",
      tags: ["产品设计","品牌策略","商业分析"],
      manchraftLabel: "ManCraft · App 设计",
      pptLabel: "参赛 PPT",
      videoLabel: "理念说明视频",
    },

    yishu: {
      title: "忆述光华",
      titleSub: "微信小程序",
      label: "忆述光华 · 小程序设计",
      desc: "复旦大学为老服务创业项目，为老年人提供回忆录采写、AI智能体分身和跨代社群服务。",
      tags: ["小程序设计","银发经济"],
    },
  },

  // ── Section 03 · 设计 ────────────────────────
  design: {
    sectionLabel: "Section 03 · 设计",

    book: {
      title: "《穿越烽火到和平》",
      desc: "从封面、内页排版到封底，全流程的回忆录装帧设计。",
    },

    video: {
      title: "Ditto舞台换装混剪视频",
      desc: "面向K—Pop泛文化受众，使用Premiere Pro生产创意舞台视频。",
    },

    brochure: {
      title: "忆述光华宣传册",
      desc: "从内容结构搭建到排版装帧，全流程的宣传册设计。",
    },

    galleryLabel: "平面设计 · 忆述光华",

    // 顺序与 DesignSection.tsx 里 DESIGN_ITEM_ASSETS 一一对应
    items: [
      { label: "展会宣传展板" },
      { label: "展会宣传展板" },
      { label: "易拉宝" },
      { label: "公众号推送" },
      { label: "公众号推送" },
      { label: "公众号推送" },
      { label: "公众号推送" },
      { label: "公众号推送" },
      { label: "公众号推送" },
      { label: "公众号推送" },
    ],
  },

  // ── Section 04 · 摄影 ────────────────────────
  photography: {
    sectionLabel: "Section 04 · 摄影",
    title: "Photography",
    desc: "凭借审美知觉，捕捉人像风景。",
  },

  // ── Section 05 · 自媒体 ──────────────────────
  social: {
    sectionLabel: "Section 05 · 自媒体",
    title: "Social Presence",
    desc: "社交媒体内容创作，分享生活方式与个人表达。",
    statsLabel: "总获赞数10000+ 阅读数200000+",
  },
};

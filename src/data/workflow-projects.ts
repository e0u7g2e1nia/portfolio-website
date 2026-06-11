const WF = "/assets/ai-collab/workflow";
const DIARY = `${WF}/工作流-碎片记录+日记整理+批注`;
const DROPPER = `${WF}/小工具-取色器`;

export type WorkflowProject = {
  name: string;
  icon?: string;
  modules?: { label: string; images: string[] }[];
  images?: string[];
  description: string;
  link?: { label: string; url: string };
};

export const workflowProjects: WorkflowProject[] = [
  {
    name: "碎片+日记+AI批注·工作流",
    modules: [
      {
        label: "手机端快捷记录",
        images: [
          `${DIARY}/01-01-手机端快捷唤起和记录碎片.gif`,
          `${DIARY}/01-02-手机端插入图片.gif`,
          `${DIARY}/01-03-手机端打开Obsidian.gif`,
        ],
      },
      {
        label: "Obsidian 快捷操作",
        images: [
          `${DIARY}/02-01手机端Obsidian快捷插入碎片.gif`,
          `${DIARY}/02-02-手机端Obsidian快捷打开日记.gif`,
        ],
      },
      {
        label: "电脑端操作",
        images: [
          `${DIARY}/03-01-电脑端Obsidian快捷打开日记.gif`,
          `${DIARY}/03-02-电脑端Obsidian快捷插入碎片.gif`,
        ],
      },
    ],
    description:
      "一个基于Obsidian/Codex/快捷指令的碎片+日记+AI批注的工作流：\n快捷地在Obsidian记录碎片 → 日记整理 → AI 批注 → 输出 Markdown 文件。",
    link: {
      label: "查看核心资产",
      url: "https://github.com/e0u7g2e1nia/obsidian-fragment-diary-workflow",
    },
  },

  {
    name: "取色器·小工具",
    icon: `${DROPPER}/取色器app图标.PNG`,
    images: [
      `${DROPPER}/按下快捷键取色.gif`,
      `${DROPPER}/点击按钮取色.gif`,
    ],
    description: "本地工具，支持全局快捷键唤起、点击取色、十六进制色值自动复制。",
    link: {
      label: "查看工具",
      url: "https://github.com/e0u7g2e1nia/ColorDropper",
    },
  },

  {
    name: "简历工作流",
    description:
      "一个基于 Obsidian/Web Clipper/Dataview/Codex Skill/LaTeX 的简历工作流：\n先把 JD 剪进 Obsidian → 自动整理成投递记录 → Dataview 汇总投递状态 → AI 从简历素材库里筛选经历生成 Markdown 简历 → LaTeX 输出一页 PDF。",
    link: {
      label: "查看Github上的项目核心资产",
      url: "https://github.com/e0u7g2e1nia/obsidian-resume-workflow",
    },
  },
];

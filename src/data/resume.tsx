/**
 * Personal site content. Keep the wording short and easy to update.
 */
export type WorkItem = {
  company: string;
  title: string;
  href: string;
  logoUrl: string;
  period: string;
};

export type ProjectItem = {
  title: string;
  links: { label: string; href: string }[];
};

export const DATA = {
  name: "Haibo Sun",
  description:
    "I’m a fourth-year Software Engineering student at the University of Waterloo. My internships have included systems software, operating systems, firmware, and hardware validation.",
  linkedin: "https://www.linkedin.com/in/h3sun/",
  github: "https://github.com/Haibo-S",
  education: {
    href: "https://uwaterloo.ca/",
    logoUrl: "logos/university-of-waterloo.png",
    program: "Software Engineering",
    year: "4th year",
  },
  work: [
    {
      company: "NVIDIA",
      title: "System Software Engineer",
      href: "https://www.nvidia.com/",
      logoUrl: "logos/nvidia.svg",
      period: "May–Aug 2026",
    },
    {
      company: "Tenstorrent",
      title: "Low-Level Kernel Software Developer",
      href: "https://tenstorrent.com/en",
      logoUrl: "logos/tenstorrent.png",
      period: "Jan–May 2026",
    },
    {
      company: "Huawei Canada",
      title: "Real-Time Operating Systems Developer",
      href: "https://www.huawei.com/ca/",
      logoUrl: "logos/huawei.svg",
      period: "May–Aug 2025",
    },
    {
      company: "Untether AI",
      title: "Systems Software Developer",
      href: "https://www.linkedin.com/company/untether-ai/",
      logoUrl: "logos/untether-ai.png",
      period: "Sep–Dec 2024",
    },
    {
      company: "onsemi",
      title: "Hardware Validation Developer",
      href: "https://www.onsemi.com/",
      logoUrl: "logos/onsemi.png",
      period: "Jan–Apr 2024",
    },
    {
      company: "Great Circle Solar",
      title: "Firmware Developer",
      href: "https://www.greatcirclesolar.com/",
      logoUrl: "logos/great-circle-solar.png",
      period: "May–Aug 2023",
    },
  ] as WorkItem[],
  projects: [
    {
      title: "ARM Real-Time Executive",
      links: [{ label: "GitHub", href: "https://github.com/Haibo-S/ARM-Real-Time-Executive" }],
    },
    {
      title: "Torus-NoC",
      links: [{ label: "GitHub", href: "https://github.com/Haibo-S/Torus-NoC" }],
    },
    {
      title: "Pipelined RISC-V Processor",
      links: [{ label: "GitHub", href: "https://github.com/Haibo-S/Pipelined-RISC-V-Processor" }],
    },
  ] as ProjectItem[],
} as const;

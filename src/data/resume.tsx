/**
 * Portfolio content lives here. These details are transcribed from Haibo's CV.
 */
export type WorkItem = {
  company: string;
  title: string;
  href: string;
  logoUrl: string;
  logoMark: string;
  logoColor: string;
  period: string;
};

export type ProjectItem = {
  title: string;
  href?: string;
  links: { label: string; href: string }[];
};

export const DATA = {
  name: "Haibo Sun",
  roleLabel: "Systems · Low-level software",
  description:
    "Fourth-year Software Engineering student at the University of Waterloo focused on computer architecture, operating systems, and low-level systems software.",
  linkedin: "https://www.linkedin.com/in/h3sun/",
  work: [
    {
      company: "NVIDIA",
      title: "System Software Engineer Intern",
      href: "https://www.nvidia.com/",
      logoUrl: "",
      logoMark: "N",
      logoColor: "#76b900",
      period: "May–Aug 2026",
    },
    {
      company: "Tenstorrent",
      title: "Low-Level Kernel Software Developer Intern",
      href: "https://tenstorrent.com/en",
      logoUrl: "",
      logoMark: "tt",
      logoColor: "#272727",
      period: "Jan–May 2026",
    },
    {
      company: "Huawei Canada",
      title: "Real Time Operating Systems Developer Intern",
      href: "https://www.huawei.com/ca/",
      logoUrl: "",
      logoMark: "H",
      logoColor: "#cf0a2c",
      period: "May–Aug 2025",
    },
    {
      company: "Untether AI",
      title: "Systems Software Developer Intern",
      href: "https://www.arm.com/partners/catalog/untether-ai",
      logoUrl: "",
      logoMark: "ua",
      logoColor: "#5a4280",
      period: "Sep–Dec 2024",
    },
    {
      company: "onsemi",
      title: "Hardware Validation Developer Intern",
      href: "https://www.onsemi.com/",
      logoUrl: "",
      logoMark: "on",
      logoColor: "#e83b43",
      period: "Jan–Apr 2024",
    },
    {
      company: "Great Circle Solar",
      title: "Firmware Developer Intern",
      href: "https://www.greatcirclesolar.com/",
      logoUrl: "",
      logoMark: "gc",
      logoColor: "#4a7151",
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

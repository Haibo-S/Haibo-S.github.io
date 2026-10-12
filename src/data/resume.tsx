/**
 * Personal site content. Keep the wording short and easy to update.
 */
export type WorkItem = {
  company: string;
  title: string;
  href: string;
  logoUrl: string;
  period: string;
  logoStyle?: "wordmark";
};

export type ProjectItem = {
  title: string;
  context: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const DATA = {
  name: "Haibo Sun",
  description:
    "I’m Haibo, a fourth-year Software Engineering student at Waterloo. I’m interested in computer architecture, digital design, and systems software near the hardware/software boundary.",
  linkedin: "https://www.linkedin.com/in/h3sun/",
  github: "https://github.com/Haibo-S",
  email: "h3sun@uwaterloo.ca",
  resume: "https://drive.google.com/file/d/1M-SLWqrObFI3Ar4eyAqcKVHtuODQTCMr/view?usp=sharing",
  education: {
    href: "https://uwaterloo.ca/",
    logoUrl: "logos/university-of-waterloo.png",
    school: "University of Waterloo",
    program: "Honours Bachelor of Software Engineering",
    programType: "Co-operative Program",
    period: "Sep 2022 – Apr 2027 (expected)",
    coursework: [
      "Computer Architecture",
      "Digital Hardware Systems",
      "Operating Systems",
      "On-Chip Interconnect",
    ],
  },
  aboutBackgrounds: [
    "images/about-bg-01.webp",
    "images/about-bg-02.webp",
    "images/about-bg-03.webp",
    "images/about-bg-04.webp",
    "images/about-bg-05.webp",
    "images/about-bg-06.webp",
    "images/about-bg-07.webp",
    "images/about-bg-08.webp",
    "images/about-bg-09.webp",
    "images/about-bg-10.webp",
    "images/about-bg-11.webp",
    "images/about-bg-12.webp",
  ],
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
      logoUrl: "logos/onsemi.svg",
      logoStyle: "wordmark",
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
      title: "x86-OS",
      context: "Operating systems · x86",
      description:
        "A small 32-bit x86 operating system built from scratch in C. It brings together multitasking, virtual memory, privilege levels, system calls, and a shell for loading programs.",
      image: "images/projects/x86-os.svg",
      imageAlt: "A visual overview of the x86-OS kernel, process memory, and a booted terminal.",
      tags: ["C", "32-bit x86", "Virtual memory"],
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/Haibo-S/x86-OS",
        },
      ],
    },
    {
      title: "C-Architect Compiler",
      context: "Compiler · MIPS",
      description:
        "A compiler for WLP4, a subset of C, paired with a MIPS assembler. The compiler scans and parses source, checks types, then generates assembly that the assembler turns into machine code.",
      image: "images/projects/c-architect-compiler.svg",
      imageAlt: "A compiler pipeline from WLP4 source code through parsing to MIPS instructions and machine code.",
      tags: ["C++", "WLP4", "MIPS"],
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/Haibo-S/C-Architect-Compiler",
        },
      ],
    },
    {
      title: "2D Torus Network-on-Chip",
      context: "SystemVerilog · NoC",
      description:
        "A parameterized 2D torus interconnect with deflection, backpressure, and credit-based flow control. The project also explores custom low-swing I/O for energy-efficient on-chip links.",
      image: "images/projects/torus-noc.svg",
      imageAlt: "A sixteen-node 2D torus network with wraparound links between the edges.",
      tags: ["SystemVerilog", "Network-on-chip", "Low-swing I/O"],
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/Haibo-S/Torus-NoC",
        },
      ],
    },
  ] as ProjectItem[],
} as const;

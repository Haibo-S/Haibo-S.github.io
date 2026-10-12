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
      title: "VHDL Traffic-Light Controller",
      context: "FPGA · Digital design",
      description:
        "A finite-state controller for a four-way intersection, implemented in VHDL for an Altera MAX 10 FPGA. It coordinates vehicle signals and responds to pedestrian crossing requests.",
      image: "images/projects/traffic-controller.svg",
      imageAlt: "Illustration of an FPGA traffic controller, four-way intersection, signal lights, and a timing trace.",
      tags: ["VHDL", "MAX 10", "Finite-state machines"],
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/Haibo-S/Traffic-Light-Controller",
        },
      ],
    },
    {
      title: "“Haibo” Wearable Assistant",
      context: "Team project · MakeUofT 2024",
      description:
        "A team-built wearable assistant that uses hand gestures and computer vision to control camera and speech features, with a private home-server path for recorded files.",
      image: "images/projects/wearable-gesture-controls.jpg",
      imageAlt: "Hand gestures annotated with computer-vision keypoints for the wearable assistant.",
      tags: ["Raspberry Pi", "OpenCV", "Embedded systems"],
      links: [
        {
          label: "Source on GitHub",
          href: "https://github.com/KrishPAdmin/MakeUofT-2024/tree/main",
        },
        {
          label: "Project story",
          href: "https://devpost.com/software/rasp-debuggers",
        },
      ],
    },
  ] as ProjectItem[],
} as const;

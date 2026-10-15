export type BlogCategory = "News & Events" | "Latest Insights";

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content?: string;
  image: string;
  category?: BlogCategory | string;
  date?: string;
}

export const mockBlogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "Security Advisory: Strengthen Your Cyber Defenses With Expert Guidance",
    summary:
      "In today's volatile cyber landscape, expert guidance helps organizations reduce risk and improve resilience.",
    image:
      "https://ssquad.com/wp-content/uploads/2025/05/securtity-advisory-570x600.jpg",
  },
  {
    id: "blog-2",
    title:
      "How Can Organizations Use The NIST Cybersecurity Framework To Strengthen Their Security?",
    summary:
      "Understand how the NIST framework provides a structured path to identify, protect, detect, respond, and recover.",
    image: "https://ssquad.com/wp-content/uploads/2020/11/nist-570x600.jpg",
  },
  {
    id: "blog-3",
    title: "Ransomware For Small Business: Everything You Need To Know About",
    summary:
      "Learn key ransomware risks and practical controls small and mid-sized businesses should implement first.",
    image:
      "https://ssquad.com/wp-content/uploads/2020/11/ransom_banner-570x600.jpg",
  },
];

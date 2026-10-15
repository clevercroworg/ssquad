import React from 'react';

export interface ManagementProfile {
  id: string;
  name: string;
  title: string;
  image: string;
  imagePosition?: string;
  imageStyle?: React.CSSProperties;
  linkedin: string;
  bio: string[];
}

export const managementData: ManagementProfile[] = [
  {
    id: "arun-gopakumar",
    name: "Arun Gopakumar",
    title: "CEO & Founder",
    image: "/management/arun.jpg",
    imagePosition: "30% center",
    linkedin: "https://www.linkedin.com/in/arun-gopakumar-4418652b/",
    bio: [
      "Arun is the Managing Director of Ssquad Global. Driven by his passion for building a world-class IT company to offer innovative solutions to public and private organizations, he founded Ssquad Global in 2012.",
      "Prior to Ssquad, Arun held leadership positions at several multinational companies. Under Arun's leadership, Ssquad has expanded its footprint to 14 countries globally. With more than 20+ years of experience, he has developed meaningful partnerships with some of the Fortune 500 companies & MNCs in various industries including telcos, financial institutions, retail and manufacturing, amongst others.",
      "At Ssquad, Arun plays a pivotal role in steering the Group's direction towards meeting its overall vision of becoming a trusted partner to deliver reliable technology services.",
      "Arun is also a member of Executives' Global Network (EGN) and PIKOM."
    ]
  },
  {
    id: "kiran-gopakumar",
    name: "Kiran Gopakumar",
    title: "Chief Operating Officer",
    image: "/management/kiran.jpg",
    linkedin: "https://www.linkedin.com/in/kiran-gopakumar-703a5552/",
    bio: [
      "Kiran Gopakumar is a versatile professional with over 15+ years of experience in Operations Management. As the COO at Ssquad Global, he oversees all aspects of the company's Day-to-Day Operations, ensuring efficiency, productivity, and cost-effectiveness.",
      "Kiran's strategic mindset and strong leadership skills have led to significant improvements in process optimization, supply chain management, and resource allocation. With a keen eye for identifying areas of improvement, he has implemented strategic initiatives that have resulted in significant cost savings and increased productivity. With a proven track record of streamlining operations and driving growth, he has successfully implemented innovative solutions that have positively impacted the organization's bottom line.",
      "Kiran's dedication to achieving operational excellence and his ability to inspire and motivate teams make him a valuable asset in driving success and exceeding business objectives."
    ]
  },
  {
    id: "aishah-mohd-suhaimi",
    name: "Aishah Mohd Suhaimi",
    title: "Board of Director",
    image: "/management/Aishah Mohd Suhaimi.jpeg",
    imagePosition: "center 30%",
    linkedin: "#",
    bio: [
      "Aishah MS is a Malaysian entrepreneur, investor, and corporate strategist with a track record of building businesses, structuring complex deals, and driving growth across Asia-Pacific, the GCC, and broader emerging markets.",
      "Over the course of her career, Aishah has co-founded and scaled ventures across luxury retail, govtech, healthcare, and digital infrastructure. She has served on boards and in senior advisory capacities across cybersecurity, technology, and professional services, advised major consulting groups on government-linked mandates, and played a central role in the turnaround and repositioning of publicly listed companies — delivering significant market cap growth through strategic clarity and execution.",
      "Her institutional work spans the intersection of private equity and family offices, where she advises on fund structures, cross-border capital deployment, and strategic mergers across the Malaysia-GCC corridor. She currently co-leads private equity initiatives bridging Asia-Pacific and the MENA region — a reflection of the trust she has earned across some of the world’s most relationship-driven capital markets.",
      "Aishah joins Ssquad’s Board of Directors bringing more than market access — she brings the commercial acumen, institutional relationships, and deal-making capability to position Ssquad for its next stage of growth across emerging and global markets. She holds a background in Management from Rutgers University, The State University of New Jersey, USA."
    ]
  },
  {
    id: "ravi-prakasha",
    name: "Ravi Prakasha",
    title: "Director - Technical Services",
    image: "/management/ravi.jpg",
    imagePosition: "36% center",
    linkedin: "https://www.linkedin.com/in/ravi-prakasha-291848b/",
    bio: [
      "Ravi Prakasha is an accomplished and experienced Technical Services Director with a passion for leveraging technology to drive business growth. With a solid background in computer knowledge and over 17+ years of professional experience, Ravi has established himself as a respected leader in the field.",
      "Throughout his career, Ravi has held key positions in leading technology companies, where he has demonstrated a strong ability to align technical strategies with business objectives. His expertise lies in overseeing the planning, implementation, and maintenance of complex technical systems and infrastructure.",
      "Ravi is well-versed in a wide range of technical domains, including network architecture, cloud computing, cybersecurity.",
      "As a Technical Services Director, Ravi's goal is to leverage his extensive technical expertise, leadership skills, and business acumen to drive technological innovation, enhance operational efficiency, and contribute to the overall success of the organisation he serves."
    ]
  },
  {
    id: "khairul-azam-ahmad",
    name: "Khairul Azam Ahmad",
    title: "Cybersecurity Advisor",
    image: "/management/khairul.jpg",
    linkedin: "#",
    bio: [
      "Khairul Azam is a seasoned cybersecurity and digital resilience leader with over 25 years of deep, multidimensional experience across cybersecurity strategy, threat operations, and national-level security programs. His leadership philosophy is rooted in a powerful belief: today's digital resilience secures tomorrow's freedoms. This forward-thinking approach has shaped his career and continues to guide his contributions to Ssquad Global.",
      "Khairul has worked extensively across critical national infrastructures, financial ecosystems, public sector agencies, and high-growth enterprises. His experience includes leading red-team operations for national infrastructure assets, advising central banks and regulatory bodies on advanced threat simulation, bridging hands-on technical expertise with policy-level insights, mentoring and developing next-generation cybersecurity talent, and architecting predictive defence platforms for emerging threat landscapes.",
      "In recent years, he has been at the forefront of cybersecurity innovation—building AI-driven threat modelling systems and leading ASEAN-wide cyber resilience initiatives aimed at strengthening regional preparedness at scale.",
      "As Cybersecurity Advisor at Ssquad Global, Khairul plays a pivotal role in guiding our journey to become one of APAC's top MSSP and Cyber Defence providers. His strategic vision, operational depth, and commitment to digital sovereignty reinforce our mission to deliver intelligence-led, proactive, and future-ready cybersecurity services to enterprises across the region."
    ]
  },
  {
    id: "mohamed-ali",
    name: "Mohamed Ali",
    title: "Head Of Service Delivery",
    image: "/management/mali.jpg",
    imagePosition: "center",
    imageStyle: { transform: "scale(1) translateY(2%)", backgroundColor: "#fbdada" },
    linkedin: "https://www.linkedin.com/in/pitchai-mohamed-ali-01307523/",
    bio: [
      "Mohamed Ali is a seasoned Information Technology professional with over 15+ years of experience in managing IT operations, support services, and delivering complex projects across diverse technical domains. Known for his consistent track record of meeting and exceeding client expectations, he combines deep technical knowledge with strong leadership, communication, and presentation skills.",
      "Throughout his career, Ali has worked across multiple levels of IT support—both independently and within high-performing teams—demonstrating a strong ability to solve complex technical challenges while ensuring seamless service delivery. His hands-on expertise, people-centric management style, and commitment to operational excellence make him a trusted leader in driving efficiency and client satisfaction across global IT environments."
    ]
  }
];

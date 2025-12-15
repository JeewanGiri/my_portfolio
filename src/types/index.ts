// Framer Motion Types
export type AnimationVariants = {
    hidden?: any;
    visible?: any;
    animate?: any;
    [key: string]: any;
};

// Contact Form Types
export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Project Types
export interface Project {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    features: string[];
    gradient: string;
    image?: string;
    github?: string;
    demo?: string;
}

// Experience Types
export interface Experience {
    company: string;
    position: string;
    period: string;
    location: string;
    highlights: string[];
    technologies: string[];
}

// Skill Types
export interface Skill {
    name: string;
    icon: any;
    color: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

// Contact Info Types
export interface ContactInfo {
    icon: any;
    label: string;
    value: string;
    href: string;
}

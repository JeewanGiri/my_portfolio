import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconExternalLink,
  IconBrandGithub,
  IconStar,
  IconCode,
} from "@tabler/icons-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "WHO Health Information System",
      category: "ENTERPRISE APPLICATION",
      description:
        "Comprehensive health information system with multi-role access, advanced analytics, and real-time data visualization for WHO.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Mantine UI",
        "Chart.js",
        "TanStack Query",
      ],
      features: [
        "Multi-role Architecture",
        "Real-time Analytics",
        "Interactive Dashboards",
        "Data Visualization",
      ],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🏥",
    },
    {
      title: "Homestay Management Platform",
      category: "FULL-STACK APPLICATION",
      description:
        "Modern platform for managing homestay listings with advanced filtering, booking management, and host dashboards.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "TanStack Query",
      ],
      features: [
        "Advanced Filtering",
        "Booking System",
        "Host Dashboard",
        "Responsive Design",
      ],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🏠",
    },
    {
      title: "Student Skill Tracker",
      category: "DASHBOARD APPLICATION",
      description:
        "Interactive dashboard for tracking student skills with beautiful charts, animations, and data visualization.",
      technologies: [
        "React",
        "TypeScript",
        "Mantine Charts",
        "Framer Motion",
        "SCSS",
      ],
      features: [
        "Skill Tracking",
        "Data Charts",
        "Progress Analytics",
        "Student Profiles",
      ],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "📊",
    },
    {
      title: "Modern Dashboard UI",
      category: "UI/UX PROJECT",
      description:
        "Stunning dashboard template with smooth animations, glassmorphism effects, and premium design.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Mantine UI",
      ],
      features: [
        "Glassmorphism",
        "Smooth Animations",
        "Premium Design",
        "Dark Mode",
      ],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "🎨",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="section relative py-24" ref={ref}>
      <div className="container px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="mb-6 font-display">
              FEATURED <span className="gradient-text">PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cosmic mx-auto rounded-full mb-6" />
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#e2e8f0" }}
            >
              Showcase of my best work in building modern, scalable applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Outer Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-75 blur-2xl transition-all duration-700"
                  style={{
                    background: project.gradient,
                  }}
                />

                {/* Main Glassmorphic Card */}
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Glass Card Container */}
                  <div className="relative h-full rounded-[28px] overflow-hidden cosmic-card">
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ background: project.gradient }}
                    />

                    {/* Top Glass Reflection */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                    {/* Side Glass Reflection */}
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-transparent to-transparent" />
                    {/* Header Section with Gradient Background */}
                    <div className="relative h-72 overflow-hidden">
                      {/* Animated Gradient Background */}
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                        style={{ background: project.gradient }}
                      />

                      {/* Glassmorphic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/20 to-black/40 backdrop-blur-sm" />

                      {/* Floating Light Orbs */}
                      <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-12 left-12 w-3 h-3 bg-white/80 rounded-full blur-sm animate-pulse" />
                        <div className="absolute top-24 right-16 w-2 h-2 bg-white/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute bottom-24 left-1/3 w-2.5 h-2.5 bg-white/70 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.6s' }} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        {/* Top Section - Category & Links */}
                        <div className="flex items-start justify-between">
                          {/* Glass Category Badge */}
                          <motion.div
                            className="px-5 py-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <span className="text-xs font-display font-bold text-white tracking-widest drop-shadow-lg">
                              {project.category}
                            </span>
                          </motion.div>

                          {/* Glass Action Buttons */}
                          <div className="flex gap-3">
                            <motion.a
                              href="#"
                              className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/25 transition-all"
                              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <IconBrandGithub size={20} strokeWidth={2} />
                            </motion.a>
                            <motion.a
                              href="#"
                              className="p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/25 transition-all"
                              whileHover={{ scale: 1.15, rotate: -5, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <IconExternalLink size={20} strokeWidth={2} />
                            </motion.a>
                          </div>
                        </div>

                        {/* Bottom Section - Icon & Title */}
                        <div>
                          <motion.div
                            className="text-8xl mb-5 drop-shadow-2xl filter brightness-110"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {project.icon}
                          </motion.div>
                          <h3 className="text-3xl font-display font-bold text-white mb-2 drop-shadow-2xl leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Decorative Glass Orb */}
                      <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-white/10 backdrop-blur-3xl blur-2xl" />
                    </div>

                    {/* Content Section with Glassmorphism */}
                    <div className="relative flex-1 flex flex-col p-8">
                      {/* Glass Panel for Content */}
                      <div className="relative rounded-2xl cosmic-card p-6 shadow-xl">
                        {/* Inner Glass Shine */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* Description */}
                        <p className="text-base leading-relaxed mb-6 text-white/90 font-light">
                          {project.description}
                        </p>

                        {/* Features Grid */}
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-4">
                            {/* Glass Icon Badge */}
                            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-purple-300/30 shadow-lg">
                              <IconStar size={16} className="text-white drop-shadow-lg" />
                            </div>
                            <span className="text-xs font-display font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                              Key Features
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {project.features.map((feature, fIndex) => (
                              <motion.div
                                key={fIndex}
                                className="flex items-start gap-2.5 text-sm group/feature p-2 rounded-lg hover:bg-white/10 transition-all"
                                whileHover={{ x: 6 }}
                              >
                                <span className="text-purple-300 mt-0.5 text-lg group-hover/feature:scale-125 transition-transform drop-shadow-lg">
                                  ▹
                                </span>
                                <span className="text-white/80 group-hover/feature:text-white transition-colors font-light">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                        {/* Tech Stack */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            {/* Glass Icon Badge */}
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-md border border-cyan-300/30 shadow-lg">
                              <IconCode size={16} className="text-white drop-shadow-lg" />
                            </div>
                            <span className="text-xs font-display font-bold tracking-widest text-white/95 uppercase drop-shadow-md">
                              Tech Stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {project.technologies.map((tech, tIndex) => (
                              <motion.span
                                key={tIndex}
                                className="px-4 py-2 text-xs rounded-xl bg-white/10 backdrop-blur-md border border-white/20 font-display text-white/90 shadow-lg hover:bg-white/20 hover:border-white/40 hover:shadow-xl transition-all cursor-default font-medium"
                                whileHover={{ scale: 1.08, y: -3 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Glass Accent */}
                    <div className="h-1.5 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Corner Glass Highlights */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-50" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full opacity-50" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <motion.a
              href="#contact"
              className="neon-btn neon-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconStar size={20} />
              WANT TO SEE MORE? LET'S TALK!
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

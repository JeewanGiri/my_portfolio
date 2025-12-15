import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconCode,
  IconRocket,
  IconStar,
  IconTrophy,
} from "@tabler/icons-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const stats = [
    {
      icon: IconRocket,
      number: "1+",
      label: "Years Experience",
      color: "#8b5cf6",
    },
    {
      icon: IconCode,
      number: "10+",
      label: "Projects Completed",
      color: "#3b82f6",
    },
    { icon: IconStar, number: "15+", label: "Technologies", color: "#ec4899" },
    {
      icon: IconTrophy,
      number: "100%",
      label: "Client Satisfaction",
      color: "#06b6d4",
    },
  ];

  return (
    <section id="about" className="section relative" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-6 font-display">
              ABOUT <span className="gradient-text">ME</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cosmic mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#e2e8f0" }}
              >
                I'm a passionate{" "}
                <strong className="text-white font-semibold">
                  Frontend Developer
                </strong>{" "}
                with over{" "}
                <strong className="text-nebula-purple">
                  1+ year of professional experience
                </strong>
                , specializing in building modern, scalable, and visually
                stunning web applications.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "#e2e8f0" }}
              >
                My expertise lies in creating{" "}
                <strong className="text-white">
                  enterprise-grade dashboards
                </strong>{" "}
                and{" "}
                <strong className="text-white">data-driven interfaces</strong>{" "}
                using React, Next.js, and TypeScript and{" "}
                <strong className="text-nebula-pink">smooth animations</strong>.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "#e2e8f0" }}
              >
                At{" "}
                <strong className="text-white">
                  YouMinds Creations Pvt. Ltd
                </strong>
                , I've worked on the{" "}
                <strong className="text-nebula-purple">
                  WHO Enterprise Health Information System
                </strong>
                , a complex multi-role platform featuring advanced analytics,
                interactive dashboards, and real-time data visualization.
              </p>

              <p className="text-lg leading-relaxed text-nebula-cyan font-semibold">
                I believe in writing clean, maintainable code and creating
                delightful user experiences that make a difference.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 mt-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                    whileHover={{ scale: 1.05, y: -8 }}
                  >
                    {/* Outer Glow */}
                    <div
                      className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"
                      style={{ background: stat.color }}
                    />

                    {/* Glass Card */}
                    <div className="relative rounded-[20px] overflow-hidden cosmic-card p-6 text-center">
                      {/* Top Glass Reflection */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                      {/* Icon Badge */}
                      <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-4">
                        <Icon
                          size={40}
                          style={{ color: stat.color }}
                          className="drop-shadow-lg"
                        />
                      </div>

                      <div className="text-4xl font-display font-bold gradient-text mb-2 drop-shadow-lg">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-300 font-light">
                        {stat.label}
                      </div>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

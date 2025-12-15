import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SimpleGrid } from "@mantine/core";

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const contactInfo = [
    {
      icon: IconMail,
      label: "EMAIL",
      value: "jeewangiri123456@gmail.com",
      href: "mailto:jeewangiri123456@gmail.com",
    },
    {
      icon: IconBrandGithub,
      label: "GITHUB",
      value: "github.com/JeewanGiri",
      href: "https://github.com/JeewanGiri",
    },
    {
      icon: IconBrandLinkedin,
      label: "LINKEDIN",
      value: "linkedin.com/in/jeewan-giri",
      href: "https://linkedin.com/in/jeewan-giri-397778253",
    },
  ];

  return (
    <section id="contact" className="section relative" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-6 font-display">
              GET IN <span className="gradient-text">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cosmic mx-auto rounded-full mb-6" />
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#e2e8f0" }}
            >
              Have a project in mind? Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-wider">
                  LET'S CONNECT
                </h3>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "#e2e8f0" }}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Whether you need a
                  frontend developer or want to build something amazing
                  together, let's talk!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <SimpleGrid cols={2} spacing="md">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        {/* Outer Glow */}
                        <div className="absolute -inset-0.5 rounded-[16px] opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500" />

                        {/* Glass Card */}
                        <div className="relative rounded-[16px] overflow-hidden cosmic-card p-4 flex items-center gap-4">
                          {/* Top Reflection */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                          <div className="p-3 rounded-xl bg-purple-500/20 backdrop-blur-md border border-purple-300/30 text-nebula-purple group-hover:bg-purple-500/30 transition-colors shadow-lg">
                            <Icon size={24} className="drop-shadow-lg" />
                          </div>
                          <div>
                            <div className="text-xs font-display tracking-wider text-slate-400">
                              {info.label}
                            </div>
                            <div className="text-white font-medium group-hover:text-white transition-colors drop-shadow-md">
                              {info.value}
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </SimpleGrid>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

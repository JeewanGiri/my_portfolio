import { motion } from "framer-motion";
import {
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  return (
    <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Greeting */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-3 cosmic-card text-sm font-display font-semibold tracking-wider">
                👋 WELCOME TO MY UNIVERSE
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="mb-6 font-display">
              <span className="gradient-text">JEEWAN</span>
              <br />
              <span className="gradient-text">GIRI</span>
            </motion.h1>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl md:text-4xl font-display font-semibold mb-4">
                FRONTEND <span className="gradient-text">DEVELOPER</span>
              </h2>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
                style={{ color: "#e2e8f0" }}
              >
                Crafting stellar web experiences with{" "}
                <span className="text-nebula-purple font-semibold">React</span>,{" "}
                <span className="text-nebula-blue font-semibold">Next.js</span>{" "}
                &{" "}
                <span className="text-nebula-pink font-semibold">
                  TypeScript
                </span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mb-12 max-w-xl mx-auto lg:mx-0 "
            >
              {[
                { number: "1+", label: "Years Exp" },
                { number: "10+", label: "Projects" },
                { number: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="cosmic-card text-center p-4 "
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-display font-bold gradient-text mb-2 ">
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: "#e2e8f0" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 mt-8"
            >
              <a href="#projects" className="neon-btn neon-btn-primary">
                <IconBrandGithub size={20} />
                VIEW PROJECTS
              </a>
              <a href="#contact" className="neon-btn">
                <IconDownload size={20} />
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: IconBrandGithub,
                  href: "https://github.com/JeewanGiri",
                  label: "GitHub",
                },
                {
                  icon: IconBrandLinkedin,
                  href: "https://linkedin.com/in/jeewan-giri-397778253",
                  label: "LinkedIn",
                },
                {
                  icon: IconMail,
                  href: "mailto:jeewangiri123456@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-card p-3 inline-flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={itemVariants}
          >

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-nebula-purple rounded-full flex justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-2 bg-gradient-cosmic rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

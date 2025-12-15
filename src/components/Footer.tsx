import { motion } from "framer-motion";
import {
  IconHeart,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconRocket,
} from "@tabler/icons-react";
import { Box, Divider } from "@mantine/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
  ];

  return (
    <Box>
      <Divider my={"sm"} />
      <footer className="relative py-16 mt-20 border-t border-nebula-purple/20 ">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cosmic" />

        <div className="container ">
          <div className="max-w-6xl mx-auto">
            {/* Top Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo/Name */}
              <motion.div
                className="inline-flex items-center gap-3 mb-6 "
                whileHover={{ scale: 1.05 }}
              >
                <IconRocket size={32} className="text-nebula-purple" />
                <h3 className="text-4xl font-display font-bold gradient-text tracking-wider">
                  JEEWAN GIRI
                </h3>
                <IconRocket size={32} className="text-nebula-cyan" />
              </motion.div>

              {/* Tagline */}
              <p
                className="text-lg mb-8 font-display tracking-wide"
                style={{ color: "#e2e8f0" }}
              >
                FRONTEND DEVELOPER • REACT SPECIALIST • UI/UX ENTHUSIAST
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-card p-4 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12 pb-8 border-b border-nebula-purple/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link, index) => (
                  <motion.a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="font-display text-sm tracking-wider hover:text-nebula-purple transition-colors"
                    style={{ color: "#e2e8f0" }}
                    whileHover={{ y: -2 }}
                  >
                    {link.toUpperCase()}
                  </motion.a>
                )
              )}
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* Copyright */}
              <div
                className="flex items-center justify-center gap-2"
                style={{ color: "#e2e8f0" }}
              >
                <span>© {currentYear} Designed with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconHeart
                    size={18}
                    className="text-nebula-pink fill-current"
                  />
                </motion.div>
                <span>by Jeewan Giri</span>
              </div>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap items-center justify-center gap-2 text-xs font-display tracking-wider"
                style={{ color: "#94a3b8" }}
              >
                <span>BUILT WITH</span>
                <span className="text-nebula-purple">REACT</span>
                <span>•</span>
                <span className="text-nebula-blue">TYPESCRIPT</span>
                <span>•</span>
                <span className="text-nebula-pink">FRAMER MOTION</span>
                <span>•</span>
                <span className="text-nebula-cyan">MANTINE UI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;

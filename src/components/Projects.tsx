import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  Text,
  Title,
  Badge,
  Group,
  Stack,
  Button,
  SimpleGrid,
  ThemeIcon,
  Anchor,
} from "@mantine/core";
import {
  IconExternalLink,
  IconBrandGithub,
  IconStar,
  IconCode,
} from "@tabler/icons-react";

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

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
      link: "https://github.com/JeewanGiri?tab=repositories",
    },
    {
      title: "Homestay Management Platform",
      category: "FULL-STACK APPLICATION",
      description:
        "Modern platform for managing homestay listings with advanced filtering, booking management, and host dashboards.",
      technologies: [
        "React",
        "TypeScript",
        "Mantine UI",
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
      link: "https://github.com/JeewanGiri?tab=repositories",
    },
    {
      title: "Weather App",
      category: "web application",
      description:
        "A user-friendly weather app that provides real-time weather information for any location.",
      technologies: ["Html", "Css", "Javascript"],
      features: [
        "Real-time Weather Updates",
        "User-Friendly Interface",
        "Responsive Design",
      ],
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      icon: "🌞",
      link: "https://github.com/JeewanGiri/weather_app",
    },
  ];

  return (
    <section ref={ref} id="projects" style={{ padding: "120px 0" }}>
      <Stack align="center" mb={80}>
        <Title order={2} size="3rem">
          Featured <span className="gradient-text">Projects</span>
        </Title>
        <Text c="dimmed" maw={600} ta="center">
          Real-world projects built with scalable architecture and premium UI
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{ position: "relative" }}
            >
              {/* Glow */}
              <motion.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 0.7 } }}
                className="absolute -inset-1 rounded-3xl blur-xl"
                style={{ background: project.gradient }}
              />

              <Card
                radius="xl"
                padding="xl"
                shadow="xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    background: project.gradient,
                    borderRadius: 20,
                    padding: 24,
                    marginBottom: 24,
                  }}
                >
                  <Group justify="space-between" align="flex-start">
                    <Badge radius="xl" variant="light" color="white">
                      {project.category}
                    </Badge>
                    <Group gap="xs">
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <ThemeIcon radius="xl" variant="light">
                          <IconBrandGithub size={18} />
                        </ThemeIcon>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                        <ThemeIcon radius="xl" variant="light">
                          <IconExternalLink size={18} />
                        </ThemeIcon>
                      </motion.div>
                    </Group>
                  </Group>

                  <Text fz={56} mt="md">
                    {project.icon}
                  </Text>
                  <Title order={3} c="white">
                    {project.title}
                  </Title>
                </div>

                <Text c="gray.3" mb="md">
                  {project.description}
                </Text>

                <Stack gap={6} mb="md">
                  <Group gap="xs">
                    <IconStar size={16} />
                    <Text fw={600}>Key Features</Text>
                  </Group>
                  {project.features.map((feature) => (
                    <Text key={feature} c="gray.4" size="sm">
                      • {feature}
                    </Text>
                  ))}
                </Stack>

                <Stack gap={8}>
                  <Group gap="xs">
                    <IconCode size={16} />
                    <Text fw={600}>Tech Stack</Text>
                  </Group>
                  <Group gap="xs">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" radius="md">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Stack>

                <Anchor href={project.link}>
                  <Button mt="xl" radius="xl" variant="light">
                    View Project
                  </Button>
                </Anchor>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </SimpleGrid>
    </section>
  );
};

export default Projects;

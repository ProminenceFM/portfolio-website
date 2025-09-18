"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    
    {
      title: "A Financial Web Application",
      description:
        "A bank application with real-time updates on money flow, carry out daily transactions, provides analysis of the transactions.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://ibankonline.firstbanknigeria.com/",
    },
    {
      title: "A Judicial System",
      description:
        "A full-stack solution that provides the management of liberal licenses and provides legal solutions. Judicial services are also offered",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://www.allarbitrates.com/",
    },
    {
      title: "A Movie Ethusiast App",
      description:
        "A Movie ethusiast app that provides real-time updates on movies and allows you to manipulate yu watchlist as you prefer.",
      image: "/weather-analytics-dashboard-with-charts.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://flowdiv-movie.netlify.app/",
    },
    {
      title: "A Travel Service App",
      description:
        "A modern travel service platform that provide tour and travel services, and Visa features built with the latest web technologies.",
      image: "/social-media-app-interface.png",
      liveUrl: "https://www.flytate.com",
    },
    {
      title: "A Furniture E-Commerce Website",
      description:
        "A ecommerce that showcases the valued delivered from Furniture product and services. It was built with modern technology including Framer Motion.",
      image: "/furn.png",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      liveUrl: "https://noblegoldfurnitures.com/",
    },
    {
      title: "Mr. Matcha",
      description:
        "A modern platform that showcases and links to a market place giving description of services from Mr. Matcha",
      image: "/tere.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://mr-matcha.netlify.app/location",
    },
     {
      title: "Visa And Travel Service App",
      description:
        "A travel and Visa consultation service platform that provide tour and travel services, and Visa features built with React, Typescript and Tailwind.",
      image: "/travel.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://megalosgreensconsult.com/",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, and
            problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <motion.div
                  className="aspect-video overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {/* <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button> */}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projectdata } from "@/data/projects";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

function ProjectCard({ 
  title = "Project Title",
  description = "A brief description of the project goes here.",
  imageUrl = "/placeholder.svg?height=120&width=240",
  technologies = ["React", "Next.js"],
  projectUrl = "https://example.com",
  githubUrl = "https://github.com/yourusername/project"
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-[240px] overflow-hidden">
      <img 
        src={imageUrl} 
        alt={`Screenshot of ${title}`} 
        className="w-full h-24 object-cover"
      />
      <CardHeader className="p-3">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-[10px] px-1 py-0">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between">
        <Button size="sm" variant="secondary" className="text-xs h-7 px-2 " asChild>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3 h-3 mr-1" />
            View
          </a>
        </Button>
        <Button size="sm" variant="secondary" className="text-xs h-7 px-2" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 mr-1" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ProjectCards() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
         
          <ProjectCard 
            title="Project One"
            description="A cool project that does amazing things."
            imageUrl="/placeholder.svg?height=120&width=240"
            technologies={["React", "Node.js"]}
            projectUrl="https://project-one.com"
            githubUrl="https://github.com/yourusername/project-one"
          />
          <ProjectCard 
            title="Project Two"
            description="Another awesome project with great features."
            imageUrl="/placeholder.svg?height=120&width=240"
            technologies={["Vue.js", "Express"]}
            projectUrl="https://project-two.com"
            githubUrl="https://github.com/yourusername/project-two"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <ProjectCard 
            title="Project Three"
            description="An innovative solution to a complex problem."
            imageUrl="/placeholder.svg?height=120&width=240"
            technologies={["Angular", "Django"]}
            projectUrl="https://project-three.com"
            githubUrl="https://github.com/yourusername/project-three"
          />
          <ProjectCard 
            title="Project Four"
            description="A cutting-edge app with unique capabilities."
            imageUrl="/placeholder.svg?height=120&width=240"
            technologies={["Svelte", "Flask"]}
            projectUrl="https://project-four.com"
            githubUrl="https://github.com/yourusername/project-four"
          />
        </div>
      </div>
    </div>
  )
}
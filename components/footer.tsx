import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Aluko Folarin</h3>
            <p className="text-sidebar-foreground/80">Software Engineer</p>
          </div>

          <div className="flex gap-4">
            <Button onClick={()=>window.open("ehttps://github.com/ProminenceFM", "_blank")} variant="ghost" size="icon" className="hover:bg-sidebar-accent">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button onClick={()=>window.open("https://www.linkedin.com/in/aluko-folarin/", "_blank")} variant="ghost" size="icon" className="hover:bg-sidebar-accent">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button onClick={()=>window.open("mailto:folarinaluko123@yahoo.com")} variant="ghost" size="icon" className="hover:bg-sidebar-accent">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sidebar-border text-center">
          <p className="text-sidebar-foreground/60">© {new Date().getFullYear()} Aluko Folarin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} API Showcase. Built with care.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "@tanstack/react-router";
import { Github, MessageCircle, Twitter, BookOpen } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A modern, learning-oriented Linux distribution. Minimal, developer-focused,
              and built to help you understand your system from the inside out.
            </p>
          </div>

          <FooterColumn title="Quick Links">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/download">Download</FooterLink>

            <FooterLink to="/about">About</FooterLink>
          </FooterColumn>

          <FooterColumn title="Resources">
            <FooterLink to="/documentation">Documentation</FooterLink>
            <FooterLink to="/documentation">Getting Started</FooterLink>
            <FooterLink to="/documentation">FAQ</FooterLink>
            <FooterLink to="/contribute">Contribute</FooterLink>
          </FooterColumn>

          <FooterColumn title="Community">
            <FooterLink to="/community">Overview</FooterLink>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Discussions
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Report an Issue
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zyphor OS. Released under an open source license.
            Created by Mark Jason P. Espelita.
          </p>
          <div className="flex items-center gap-2">
            <SocialIcon href="https://github.com/" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Chat">
              <MessageCircle className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Docs">
              <BookOpen className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-3">{title}</h4>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-muted-foreground hover:text-foreground transition w-fit"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-brand/50 hover:bg-white/5 transition"
    >
      {children}
    </a>
  );
}

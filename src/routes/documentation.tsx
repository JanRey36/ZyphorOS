import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  BookOpen,
  Download,
  Box,
  HelpCircle,
  Menu,
  X,
  Github,
  Lightbulb,
  AlertTriangle,
  Terminal,
  User,
  Shield,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cn } from "@/lib/utils";
import zccImage from "@/documentation/zyphor-os/assets/images/zcc.jpg.jpg";
import profileImage1 from "@/documentation/zyphor-os/assets/images/profile-login-1.jpg";
import profileImage2 from "@/documentation/zyphor-os/assets/images/profile-login-2.jpg";
import profileImage3 from "@/documentation/zyphor-os/assets/images/profile-login-3.jpg";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Zyphor OS" },
      {
        name: "description",
        content:
          "Learn how to install, configure and master Zyphor OS. Guides, package management, CLI reference and troubleshooting.",
      },
      { property: "og:title", content: "Zyphor OS Documentation" },
      {
        property: "og:description",
        content: "Guides, CLI reference and troubleshooting for Zyphor OS.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DocsPage,
});

type NavItem = {
  id: string;
  label: string;
  Icon: React.FC<{ className?: string }>;
  isHomeLink?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { id: "__home", label: "Home", Icon: Home, isHomeLink: true },
      { id: "introduction", label: "Introduction", Icon: BookOpen },
      { id: "installation", label: "Installation", Icon: Download },
    ],
  },
  {
    title: "How To",
    items: [
      { id: "profile-management", label: "Manage Profile", Icon: User },
      { id: "firewall-management", label: "Manage Firewall", Icon: Shield },
    ],
  },
  {
    title: "Custom Packages",
    items: [
      { id: "zyphor-cli", label: "Zyphor CLI", Icon: Box },
      { id: "zyphor-command-center", label: "Zyphor Command Center", Icon: Box },
      { id: "zylearn", label: "ZyLearn", Icon: Box },
      { id: "zyphor-updates", label: "Zyphor Updates", Icon: Box },
      { id: "zysh", label: "Zysh", Icon: Box },
    ],
  },
  {
    title: "Contributing",
    items: [
      { id: "contributing-packages", label: "Packages", Icon: Box },
    ],
  },
] as const;

const sectionIds = navSections
  .flatMap((s) => s.items)
  .filter((item) => !(item as any).isHomeLink)
  .map((item) => item.id);

interface RepoData {
  html_url: string;
  description: string;
  topics: string[];
}

interface ReleaseData {
  tag_name: string;
}

function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false);

  useEffect(() => {
    const REPO = "zyphor-os/zyphor-os-desktop";

    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => r.json())
      .then((data: RepoData) => setRepoData(data))
      .catch(() => { });

    fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((r) => r.json())
      .then((data: ReleaseData) => setReleaseData(data))
      .catch(() => { });
  }, []);

  useEffect(() => {
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleNavClick = (id: string) => {
    setSidebarOpen(false);
    setActiveSection(id);
    isManualScroll.current = true;
    
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    
    // Re-enable intersection observer after smooth scroll completes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  return (
    <SiteLayout>
      <div className="flex relative">

        <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border/60 bg-surface/30">
          <SidebarContent
            navSections={navSections}
            activeSection={activeSection}
            repoData={repoData}
            onNavClick={handleNavClick}
          />
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <aside
          className={cn(
            "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-72 flex flex-col border-r border-border/60 bg-background overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
          aria-label="Documentation navigation"
        >
          <SidebarContent
            navSections={navSections}
            activeSection={activeSection}
            repoData={repoData}
            onNavClick={handleNavClick}
          />
        </aside>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-16 z-30 flex items-center gap-3 px-4 py-3 border-b border-border/60 bg-background/80 backdrop-blur lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium text-muted-foreground">
              Documentation
            </span>
          </div>

          <article className="flex-1 mx-auto w-full max-w-5xl px-6 py-10 lg:px-12">

            <section
              id="introduction"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <div className="flex items-center gap-2 mb-3">
                {releaseData?.tag_name ? (
                  <span className="inline-flex items-center rounded-full bg-brand/15 text-brand text-xs font-semibold px-2.5 py-0.5 ring-1 ring-brand/30">
                    {releaseData.tag_name}
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-surface-2 text-muted-foreground text-xs font-semibold px-2.5 py-0.5 ring-1 ring-border/60 animate-pulse">
                    v….
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Introduction
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                Everything you need to know to get up and running quickly.
              </p>

              {repoData && (
                <>
                  {repoData.description && (
                    <p className="mt-4 text-muted-foreground">
                      {repoData.description}
                    </p>
                  )}
                  {repoData.topics && repoData.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {repoData.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-full bg-surface-2 text-muted-foreground text-xs px-2.5 py-0.5 ring-1 ring-border/40"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}

              <br />

              <InfoAlert>
                Tip: visit the{" "}
                <a
                  href="https://github.com/zyphor-os/zyphor-os-desktop"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-brand transition"
                >
                  GitHub repository
                </a>{" "}
                for the latest source code and release notes.
              </InfoAlert>
            </section>

            <section
              id="installation"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Installation</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Watch this installation video after you download the .iso
                bootable file.
              </p>
              <div className="mt-5 relative w-full aspect-video rounded-xl overflow-hidden border border-border/60 bg-surface/40">
                <iframe
                  src="https://drive.google.com/file/d/1QqyUYzDJKbLRnqAmLOLGIoHBECEsIeuK/preview"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Zyphor OS Installation Guide"
                />
              </div>
            </section>

            <section
              id="profile-management"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Profile Management</SectionHeading>
              <div className="mt-5 text-muted-foreground leading-relaxed">
                Zyphor OS provides an integrated Profile Management feature through{" "}
                <button
                  type="button"
                  onClick={() => handleNavClick("zyphor-command-center")}
                  className="text-brand hover:underline font-medium"
                >
                  Zyphor Command Center
                </button>
                , allowing users to personalize and manage their system profile
                with ease. Users can update their profile information and upload
                a custom profile image that is automatically optimized for system
                use. The selected profile image is synchronized across the desktop
                environment, including the Start Menu panel icon and the LightDM
                login screen, providing a more personal and consistent user
                experience throughout Zyphor OS.
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden border border-border/60 bg-surface/40">
                  <img src={profileImage1} alt="Profile Login 1" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border/60 bg-surface/40">
                  <img src={profileImage2} alt="Profile Login 2" className="w-full h-auto" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border/60 bg-surface/40">
                  <img src={profileImage3} alt="Profile Login 3" className="w-full h-auto" />
                </div>
              </div>
            </section>

            <section
              id="firewall-management"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Manage Firewall</SectionHeading>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zyphor OS uses <strong className="font-semibold text-foreground">UFW (Uncomplicated Firewall)</strong> to provide
                a simple and reliable way to manage firewall rules and protect your system
                from unauthorized network access.
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Enable the Firewall</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Turn on the firewall to start protecting your system from unauthorized incoming connections.</p>
                  <CodeBlock className="mt-3">sudo ufw enable</CodeBlock>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Check Firewall Status</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Check whether the firewall is active and view the currently configured firewall rules.</p>
                  <CodeBlock className="mt-3">sudo ufw status</CodeBlock>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Allow a Port</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Allow incoming connections to a specific port. For example, the following command allows SSH connections on port 22.</p>
                  <CodeBlock className="mt-3">sudo ufw allow 22/tcp</CodeBlock>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Deny a Port</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Block incoming connections to a specific port.</p>
                  <CodeBlock className="mt-3">sudo ufw deny 22/tcp</CodeBlock>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Remove a Firewall Rule</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Remove an existing firewall rule when it is no longer needed.</p>
                  <CodeBlock className="mt-3">sudo ufw delete allow 22/tcp</CodeBlock>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/30 p-5">
                  <h3 className="font-semibold text-lg">Disable the Firewall</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Temporarily disable UFW if firewall protection is not required.</p>
                  <CodeBlock className="mt-3">sudo ufw disable</CodeBlock>
                </div>

                <WarnAlert className="mt-6">
                  <strong className="font-semibold block mb-1">Warning:</strong>
                  Before enabling UFW on a remote server, make sure the required
                  management ports, such as SSH (port 22), are allowed. Otherwise,
                  you may lose remote access to the system.
                </WarnAlert>
              </div>
            </section>

            <section
              id="zyphor-cli"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Zyphor CLI</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Installation:{" "}
                <InlineCode>zyphor pkg install zyphor-cli</InlineCode>
              </p>

              <InfoAlert className="mt-4">
                Note: Zyphor CLI is pre-installed and available by default after
                operating system installation.
              </InfoAlert>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Zyphor CLI Abstraction Layer
                </strong>{" "}
                — A unified command framework that transforms complex Linux
                operations into simple, consistent, and easy-to-remember
                commands for developers, administrators, and everyday users.
              </p>

              <CodeBlock className="mt-4">zyphor help</CodeBlock>

              <div className="mt-6 overflow-x-auto rounded-xl border border-border/60">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 bg-surface/60">
                      <th className="px-4 py-3 text-left font-semibold text-foreground w-[18%]">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground w-[35%]">
                        Command
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cliCommands.map((row, i) => (
                      <tr
                        key={i}
                        className={cn(
                          "border-b border-border/40 transition",
                          i % 2 === 0 ? "bg-surface/20" : "bg-transparent",
                        )}
                      >
                        <td className="px-4 py-3 font-mono text-xs text-brand/80 font-medium whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="px-4 py-3">
                          <InlineCode>{row.command}</InlineCode>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="zyphor-command-center"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Zyphor Command Center</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Installation:{" "}
                <InlineCode>zyphor pkg install zyphor-comand-center</InlineCode>
              </p>

              <InfoAlert className="mt-4">
                Note: Zyphor Command Center is pre-installed and available by
                default after operating system installation.
              </InfoAlert>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Zyphor Command Center
                </strong>{" "}
                — A graphical management interface built on top of Zyphor CLI,
                providing an intuitive point-and-click experience for
                non-technical users. Perform system updates, install software,
                manage services, configure development environments, mount
                network shares, run diagnostics, and customize system settings
                without memorizing terminal commands.
              </p>

              <div className="mt-5 rounded-xl border border-border/60 bg-surface/40 overflow-hidden">
                <img
                  src={zccImage}
                  alt="Zyphor Command Center screenshot"
                  className="w-full h-auto block"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".img-placeholder")) {
                      const placeholder = document.createElement("div");
                      placeholder.className =
                        "img-placeholder flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground";
                      placeholder.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
                        <span class="text-sm">Zyphor Command Center</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </section>

            <section
              id="zylearn"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>ZyLearn</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Installation:{" "}
                <InlineCode>zyphor pkg install zylearn</InlineCode>
              </p>

              <WarnAlert className="mt-4">
                Note: ZyLearn is{" "}
                <strong className="font-semibold">NOT</strong> pre-installed
                and available by default after operating system installation.
              </WarnAlert>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">
                  ZyLearn
                </strong>{" "}
                is an interactive learning tool designed to teach Linux
                distribution development through practical, real-world
                experience. Rather than relying solely on documentation or
                videos, ZyLearn provides a working project that users can
                explore, modify, and build themselves.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                When launched, ZyLearn automatically clones the{" "}
                <InlineCode>zyphor-os-minimal</InlineCode> project into the
                current directory and includes a comprehensive{" "}
                <InlineCode>GUIDE.md</InlineCode> file containing step-by-step
                instructions for Linux operating system development.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                ZyLearn serves as a hands-on educational environment for
                students, Linux enthusiasts, and aspiring distribution
                maintainers who want to understand how modern Linux
                distributions are built from the ground up.
              </p>

              <h3 className="mt-8 text-lg font-semibold tracking-tight">
                Available Commands
              </h3>

              <div className="mt-4 overflow-x-auto rounded-xl border border-border/60">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 bg-surface/60">
                      <th className="px-4 py-3 text-left font-semibold text-foreground w-[30%]">
                        Command
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {zyLearnCommands.map((row, i) => (
                      <tr
                        key={i}
                        className={cn(
                          "border-b border-border/40",
                          i % 2 === 0 ? "bg-surface/20" : "bg-transparent",
                        )}
                      >
                        <td className="px-4 py-3 align-top">
                          <InlineCode>{row.command}</InlineCode>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground leading-relaxed align-top">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="zyphor-updates"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Zyphor Updates</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Installation:{" "}
                <InlineCode>zyphor pkg install zyphor-updates</InlineCode>
              </p>

              <WarnAlert className="mt-4">
                Note: Zyphor Updates is{" "}
                <strong className="font-semibold">NOT</strong> pre-installed
                and available by default after operating system installation.
              </WarnAlert>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">
                  Zyphor Updates
                </strong>{" "}
                is the official post-installation package for Zyphor OS. It
                provides a curated collection of software, developer tools,
                desktop enhancements, system utilities, multimedia
                applications, and Zyphor-specific components that extend the
                base operating system experience.
              </p>
            </section>

            <section
              id="zysh"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Zysh</SectionHeading>
              <p className="mt-3 text-muted-foreground">
                Installation:{" "}
                <InlineCode>zyphor pkg install zysh</InlineCode>
              </p>

              <WarnAlert className="mt-4">
                Note: Zysh is not included in the default Zyphor OS
                installation. It is automatically installed as part of the{" "}
                <strong className="font-semibold">zyphor-updates</strong>{" "}
                package.
              </WarnAlert>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">Zysh</strong>{" "}
                is the official Zsh customization layer for Zyphor OS. It
                enhances the standard Zsh shell with Zyphor-specific branding,
                version information, color schemes, and terminal experience
                improvements. Rather than replacing Zsh, Zysh operates on top
                of it, extending and customizing the shell to provide a
                consistent and recognizable command-line environment across the
                Zyphor OS ecosystem.
              </p>
            </section>

            <section
              id="contributing-packages"
              className="mb-16 [scroll-margin-top:5.5rem] lg:[scroll-margin-top:4.5rem]"
            >
              <SectionHeading level={2}>Contributing to Packages</SectionHeading>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Zyphor OS maintains its own collection of official packages that are developed specifically for the distribution. These packages include system utilities, desktop enhancements, command-line tools, themes, configuration packages, applications, and other components that make up the Zyphor OS experience.
              </p>
              
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground list-decimal list-inside ml-2">
                <li><InlineCode>zyphor-cli</InlineCode> - shell script</li>
                <li><InlineCode>zyphor-command-center</InlineCode> - python</li>
                <li><InlineCode>zyphor-command-center-web</InlineCode> - php</li>
                <li><InlineCode>zylearn</InlineCode> - C</li>
                <li><InlineCode>zyphor-updates</InlineCode> - Debian config file</li>
                <li><InlineCode>zysh</InlineCode> - shell script</li>
                <li><InlineCode>zyshell</InlineCode> - C (removed temporary)</li>
                <li><InlineCode>fastfetch-config-1</InlineCode> - filesystem config and Debian config file</li>
                <li><InlineCode>grub-screensaver-1</InlineCode> - filesystem config and Debian config file</li>
                <li><InlineCode>zyphor-display-mac-v1</InlineCode> - filesystem config and Debian config file (optional - for v1 Stable)</li>
                <li><InlineCode>zyphor-os-release</InlineCode> - filesystem config and Debian config file</li>
                <li><InlineCode>zyphor-repo-config</InlineCode> - filesystem config and Debian config file</li>
                <li><InlineCode>zyphor-whats-new</InlineCode> - filesystem config, html and Debian config file</li>
                <li><InlineCode>zyphor-wallpapers-default-2026-2027</InlineCode> - filesystem config, images and Debian config file</li>
                <li><InlineCode>zyphor-wallpapers-nature</InlineCode> - filesystem config, images and Debian config file</li>
                <li><InlineCode>zyphor-wallpapers-pragmata</InlineCode> - filesystem config, images and Debian config file</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">How to Contribute?</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Want to help improve Zyphor OS? Awesome! You can contribute by updating existing packages, creating new ones, fixing bugs, improving the documentation, or adding new features.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc list-inside ml-2">
                <li><strong className="font-semibold text-foreground">Step 1:</strong> Fork the <InlineCode>https://github.com/zyphor-os/zyphor-os-desktop</InlineCode> repository.</li>
                <li><strong className="font-semibold text-foreground">Step 2:</strong> Clone your fork:<br/><span className="ml-5 mt-1 block"><InlineCode>git clone https://github.com/YOUR_USERNAME/zyphor-os-desktop</InlineCode></span></li>
                <li><strong className="font-semibold text-foreground">Step 3:</strong> Open the <InlineCode>/pkg</InlineCode> folder.</li>
                <li><strong className="font-semibold text-foreground">Step 4:</strong> Find the package you want to update, or create a new one.</li>
                <li><strong className="font-semibold text-foreground">Step 5:</strong> Make your changes and test them.</li>
                <li><strong className="font-semibold text-foreground">Step 6:</strong> Commit your changes and push them to your GitHub fork.</li>
                <li><strong className="font-semibold text-foreground">Step 7:</strong> Open a Pull Request so the Zyphor OS maintainers can review your work.</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">How to Test a Package?</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The easiest way to test a package is by installing <InlineCode>zyphor-cli</InlineCode>. It comes with a command that builds packages for you:<br/>
                <span className="mt-2 block"><InlineCode>zyphor build package PACKAGE_NAME</InlineCode></span>
              </p>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">
                For example, if you're updating the <InlineCode>zylearn</InlineCode> package in Ada Lovelace LTS:
              </p>

              <ol className="mt-4 space-y-3 text-sm text-muted-foreground list-decimal list-inside ml-2">
                <li><InlineCode>cd pkg/v2/zylearn</InlineCode></li>
                <li>Update the version number in <InlineCode>DEBIAN/control</InlineCode>.</li>
                <li>Edit the files you want to change.</li>
                <li>Go back to the package directory:<br/><span className="ml-5 mt-1 block"><InlineCode>cd ..</InlineCode></span></li>
                <li>Build the package:<br/><span className="ml-5 mt-1 block"><InlineCode>zyphor build package zylearn</InlineCode></span></li>
                <li>A <InlineCode>.deb</InlineCode> file will be created, ready for testing.</li>
              </ol>

              <WarnAlert className="mt-6">
                💡 Always test your package in a virtual machine or another safe environment before installing it on your main system.
              </WarnAlert>
            </section>

            <footer className="border-t border-border/60 pt-6 pb-8 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zyphor OS
            </footer>

          </article>
        </div>
      </div>
    </SiteLayout>
  );
}

function SidebarContent({
  navSections,
  activeSection,
  repoData,
  onNavClick,
}: {
  navSections: NavSection[];
  activeSection: string;
  repoData: RepoData | null;
  onNavClick: (id: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border/60 bg-surface/30 shrink-0">
        <BookOpen className="h-5 w-5 text-brand shrink-0" />
        <span className="font-semibold text-sm tracking-tight">Documentation</span>
      </div>

      {repoData?.html_url && (
        <div className="px-5 py-3 border-b border-border/40 shrink-0">
          <a
            href={repoData.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-3 px-2" aria-label="Docs navigation">
        {navSections.map((section) => (
          <div key={section.title} className="mb-1">
            <p className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {section.title}
            </p>
            <ul>
              {section.items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    {"isHomeLink" in item ? (
                      <Link
                        to="/"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                      >
                        <item.Icon className="h-3.5 w-3.5 shrink-0" />
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavClick(item.id)}
                        className={cn(
                          "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-left",
                          isActive
                            ? "bg-brand/15 text-brand font-medium ring-1 ring-brand/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                        )}
                      >
                        <item.Icon
                          className={cn(
                            "h-3.5 w-3.5 shrink-0",
                            isActive ? "text-brand" : "",
                          )}
                        />
                        {item.label}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}

function SectionHeading({
  level,
  children,
}: {
  level: 2 | 3;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as "h2" | "h3";
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight",
        level === 2 ? "text-2xl sm:text-3xl" : "text-xl",
      )}
    >
      {children}
    </Tag>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[0.85em] bg-surface-2/80 text-brand px-1.5 py-0.5 rounded-md ring-1 ring-border/40">
      {children}
    </code>
  );
}

function CodeBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <pre
      className={cn(
        "rounded-xl border border-border/60 bg-surface/60 px-5 py-4 font-mono text-sm text-muted-foreground overflow-x-auto",
        className,
      )}
    >
      {children}
    </pre>
  );
}

function InfoAlert({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-brand/30 bg-brand/8 px-4 py-3.5 text-sm text-brand/80",
        className,
      )}
      role="note"
    >
      <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-brand" />
      <div>{children}</div>
    </div>
  );
}

function WarnAlert({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3.5 text-sm text-amber-400/90",
        className,
      )}
      role="note"
    >
      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />
      <div>{children}</div>
    </div>
  );
}

const cliCommands = [
  {
    category: "SYSTEM",
    command: "zyphor system upgrade",
    description:
      "Upgrade all installed system packages to their latest available versions from configured repositories, ensuring security updates, bug fixes, and feature improvements are applied.",
  },
  {
    category: "SYSTEM",
    command: "zyphor system clean",
    description:
      "Remove package caches, temporary files, and unused dependencies to free disk space and keep the system optimized.",
  },
  {
    category: "SYSTEM",
    command: "zyphor system info",
    description:
      "Display detailed information about the operating system, kernel version, hardware resources, and system environment.",
  },
  {
    category: "SETUP",
    command: "zyphor setup dev <target>",
    description:
      "Automatically configure a complete development environment for the selected programming language or technology stack.",
  },
  {
    category: "SETUP",
    command: "zyphor setup dev php",
    description:
      "Install and configure PHP, Composer, Node.js, and other tools commonly required for modern PHP application development.",
  },
  {
    category: "SETUP",
    command: "zyphor setup dev node",
    description:
      "Install Node.js runtime and package management tools for building JavaScript and TypeScript applications.",
  },
  {
    category: "SETUP",
    command: "zyphor setup dev composer",
    description:
      "Install Composer and configure the environment for managing PHP packages and project dependencies.",
  },
  {
    category: "SETUP",
    command: "zyphor setup dev git",
    description:
      "Generate SSH keys, configure Git settings, and prepare secure authentication for GitHub and Git-based workflows.",
  },
  {
    category: "SETUP",
    command: "zyphor setup theme light",
    description:
      "Apply the Windows-10 inspired desktop theme for a bright and familiar user experience.",
  },
  {
    category: "SETUP",
    command: "zyphor setup theme dark",
    description:
      "Apply the Kali-Dark inspired desktop theme optimized for developers and low-light environments.",
  },
  {
    category: "PACKAGE",
    command: "zyphor pkg install <pkg>",
    description:
      "Install software packages from configured repositories while automatically resolving required dependencies.",
  },
  {
    category: "PACKAGE",
    command: "zyphor pkg remove <pkg>",
    description:
      "Uninstall a package and optionally remove associated dependencies that are no longer required.",
  },
  {
    category: "PACKAGE",
    command: "zyphor pkg search <key>",
    description:
      "Search available repositories for packages matching a keyword, name, or partial package identifier.",
  },
  {
    category: "PACKAGE",
    command: "zyphor pkg list",
    description:
      "Display all currently installed packages along with their versions and installation status.",
  },
  {
    category: "SERVICE",
    command: "zyphor service restart <name>",
    description:
      "Restart a running service to apply configuration changes or recover from operational issues.",
  },
  {
    category: "NETWORK / STORAGE",
    command: "zyphor smb mount",
    description:
      "Connect and mount a remote SMB/CIFS network share, making it accessible like a local directory.",
  },
  {
    category: "FTP",
    command: "zyphor ftp upload",
    description:
      "Transfer files securely from the local system to a configured FTP server.",
  },
  {
    category: "SSH",
    command: "zyphor ssh connect",
    description:
      "Establish a secure encrypted shell session to a remote server for administration and maintenance.",
  },
  {
    category: "SSH",
    command: "zyphor ssh cmd",
    description:
      "Execute commands on a remote server over SSH without opening an interactive terminal session.",
  },
  {
    category: "DOCTOR",
    command: "zyphor doctor scan",
    description:
      "Analyze the system for configuration issues, missing dependencies, broken packages, and common problems.",
  },
  {
    category: "DOCTOR",
    command: "zyphor doctor fix",
    description:
      "Attempt to automatically repair issues detected during a diagnostic scan.",
  },
  {
    category: "DOCTOR",
    command: "zyphor doctor report",
    description:
      "Generate a comprehensive diagnostic report for troubleshooting and technical support purposes.",
  },
  {
    category: "BUILD",
    command: "zyphor build package [dir]",
    description:
      "Build a Debian package from a project directory, simplifying software packaging and distribution.",
  },
  {
    category: "BUILD",
    command: "zyphor build repo",
    description:
      "Generate repository metadata files such as Packages.gz for hosting a Debian-compatible package repository.",
  },
  {
    category: "CORE",
    command: "zyphor help",
    description:
      "Display the complete Zyphor CLI command reference, categories, usage examples, and available options.",
  },
];

const zyLearnCommands = [
  {
    command: "zylearn setup skeleton",
    description:
      "Install the Zyphor OS learning skeleton environment in the current directory. This command downloads and prepares the zyphor-os-minimal project, including the GUIDE.md documentation that walks learners through Linux distribution development step by step.",
  },
  {
    command: "zylearn show logs",
    description:
      "Display recorded learning activity logs, including completed lessons, executed learning tasks, and progress information generated by ZyLearn.",
  },
  {
    command: "zylearn clear logs",
    description:
      "Remove all stored learning activity logs and reset ZyLearn progress history for a fresh learning experience.",
  },
  {
    command: "zylearn --help",
    description:
      "Display command usage information, available commands, options, and examples for the ZyLearn learning environment.",
  },
  {
    command: "zylearn --version",
    description: "Show the installed ZyLearn version and release information.",
  },
];

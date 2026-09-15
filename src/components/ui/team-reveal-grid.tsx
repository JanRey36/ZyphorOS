import { Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TeamRevealMember {
  id: string;
  name: string;
  role?: string;
  image: string;
  imageAlt?: string;
  contributions: number;
  profileUrl: string;
}

interface TeamRevealGridProps {
  members: readonly TeamRevealMember[];
  className?: string;
}

/**
 * A presentational contributor grid. Data fetching and team-role assignment
 * intentionally stay with the page that supplies the members.
 */
export function TeamRevealGrid({ members, className }: TeamRevealGridProps) {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);

  return (
    <div className={cn("grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-4", className)}>
      {members.map((member) => {
        const active = activeMemberId === member.id;

        return (
          <article
            key={member.id}
            className={cn("group relative min-w-0 text-center", active && "z-10")}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActiveMemberId(member.id);
            }}
            onPointerLeave={(event) => {
              if (
                event.pointerType === "mouse" &&
                !event.currentTarget.contains(document.activeElement)
              ) {
                setActiveMemberId(null);
              }
            }}
            onFocus={() => setActiveMemberId(member.id)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setActiveMemberId(null);
              }
            }}
          >
            <div
              className={cn(
                "relative aspect-square rounded-2xl border border-border/70 bg-surface p-1.5 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.8)] transition-all duration-300",
                active &&
                  "-translate-y-1 rounded-b-none border-b-0 border-brand/50 shadow-[0_18px_38px_-22px_var(--brand)]",
              )}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.imageAlt ?? member.name}
                  className={cn(
                    "h-full w-full object-cover transition duration-500",
                    active ? "scale-105 grayscale-0" : "scale-100 grayscale",
                  )}
                />

                <button
                  type="button"
                  aria-label={`Show ${member.name}'s contributor details`}
                  aria-expanded={active}
                  onClick={() => setActiveMemberId(active ? null : member.id)}
                  className="absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                />
              </div>

              <div
                aria-hidden={!active}
                className={cn(
                  "absolute -left-px -right-px top-full overflow-hidden rounded-b-2xl border-x border-b border-border/70 bg-surface text-center opacity-0 transition-[max-height,opacity] duration-300",
                  active
                    ? "max-h-24 border-brand/50 opacity-100"
                    : "pointer-events-none max-h-0 border-transparent",
                )}
              >
                <div className="flex flex-col items-center pt-3 pb-1">
                  <p className="text-xs font-medium text-foreground">
                    {member.contributions} contribution
                    {member.contributions !== 1 ? "s" : ""}
                  </p>
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={active ? 0 : -1}
                    className={cn(
                      "mt-2 inline-flex items-center justify-center gap-2 rounded-lg btn-ghost px-4 py-1 text-xs font-semibold",
                      active ? "pointer-events-auto" : "pointer-events-none",
                    )}
                  >
                    <Github className="h-3 w-3" /> GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div
              className={cn("mt-4 transition-transform duration-300", active && "translate-y-16")}
            >
              <h3 className="break-all text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-brand">
                {member.name}
              </h3>
              {member.role && (
                <p className="mt-1 text-xs font-medium leading-snug text-muted-foreground">
                  {member.role}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

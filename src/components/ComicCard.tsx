import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ComicCardProps {
  slug?: string;
  title: string;
  date?: string;
  description: string;
  emoji: string;
  accent: "primary" | "secondary" | "accent" | "orange" | "green";
  index: number;
  images?: string[];
}

const accentMap: Record<ComicCardProps["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  orange: "bg-orange text-orange-foreground",
  green: "bg-green text-green-foreground",
};

const tiltMap = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];

// Comic-style image classes
const comicImageClasses = "w-full h-44 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] contrast-125 sepia-10";

export const ComicCard = ({ slug, title, date, description, emoji, accent, index, images }: ComicCardProps) => {
  const tilt = tiltMap[index % tiltMap.length];
  const displayImage = images && images.length > 0 ? images[0] : undefined;
  const Wrapper: React.ComponentType<{ to?: string; className?: string; "aria-label"?: string; children?: React.ReactNode }> = slug ? Link : "article";
  const wrapperProps = slug ? { to: `/proyecto/${slug}` } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "panel overflow-hidden flex flex-col cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary",
        tilt
      )}
      aria-label={slug ? `Ver detalles de ${title}` : undefined}
    >
      <div className={cn("relative h-44 border-b-[3px] border-foreground overflow-hidden", accentMap[accent])}>
        <div className="absolute inset-0 halftone opacity-40" />
        {displayImage ? (
          <>
            <img
              src={displayImage}
              alt={title}
              className={comicImageClasses}
            />
            {/* Emoji como etiqueta en esquina */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-background border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center text-2xl z-10 transform rotate-12">
              {emoji}
            </div>
          </>
        ) : (
          <span className="text-7xl drop-shadow-[3px_3px_0_hsl(var(--ink))] relative z-10 flex items-center justify-center h-full" aria-hidden>
            {emoji}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col gap-2">
        {date && (
          <span className="self-start font-display text-xs bg-foreground text-background px-2.5 py-1 rounded-md">
            {date}
          </span>
        )}
        <h3 className="text-xl leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {slug && (
          <span className="mt-2 self-start font-display text-sm text-primary">
            Leer más →
          </span>
        )}
      </div>
    </Wrapper>
  );
};

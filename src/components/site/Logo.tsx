import logoAsset from "@/assets/zyphor-logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logoAsset.url}
        alt="Zyphor OS"
        width={size}
        height={size}
        className="rounded-lg ring-1 ring-white/10 group-hover:ring-brand/50 transition"
        style={{ width: size, height: size }}
      />
      <span className="font-display font-semibold tracking-tight text-lg">
        Zyphor<span className="text-brand"> OS</span>
      </span>
    </Link>
  );
}

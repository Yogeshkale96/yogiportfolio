export default function TechBadge({ name, Icon, color }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group/item">
      <Icon className="text-sm" style={{ color }} />
      <span className="text-xs font-inter text-muted group-hover/item:text-white transition-colors">
        {name}
      </span>
    </div>
  )
}

import { cn } from '@/lib/utils';

interface GridCardProps {
  /** Grid column span classes (e.g., "col-span-2 md:col-span-4") */
  colSpan: string;
  /** Grid row span classes (optional, e.g., "row-span-2 md:row-span-3") */
  rowSpan?: string;
  /** Background color or gradient class */
  bg?: string;
  /** Border classes */
  border?: string;
  /** Padding classes for inner container */
  padding?: string;
  /** Additional classes for the card container */
  className?: string;
  /** Inline styles for the card container */
  style?: React.CSSProperties;
  /** Children content */
  children: React.ReactNode;
}

/**
 * Reusable grid card wrapper component.
 * Provides consistent styling for bento-grid layout items.
 */
export function GridCard({
  colSpan,
  rowSpan,
  bg,
  border,
  padding,
  className,
  style,
  children,
}: GridCardProps) {
  return (
    <div className={cn(colSpan, rowSpan, 'flex flex-col')}>
      <div
        className={cn(
          'group relative flex flex-col overflow-hidden rounded-xl flex-grow',
          bg,
          border,
          padding,
          className
        )}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}

export default GridCard;

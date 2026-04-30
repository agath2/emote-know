import type { SVGOverlayProps, Region } from '../types/index';

// TODO: Replace with your actual Figma coordinates
// Format: [x, y, width, height] for rects, [cx, cy, rx, ry] for ellipses
const REGIONS: {
  id: Region;
  shape: 'rect' | 'ellipse' | 'polygon';
  props: Record<string, number | string>;
  label: string;
}[] = [
  { id: 'brow_inner', shape: 'polygon', props: { points: '0,0 0,0 0,0' },         label: 'Inner Brow' },
  { id: 'brow_outer', shape: 'rect',    props: { x: 0, y: 0, width: 0, height: 0 }, label: 'Outer Brow' },
  { id: 'upper_lid',  shape: 'ellipse', props: { cx: 0, cy: 0, rx: 0, ry: 0 },     label: 'Upper Lid' },
  { id: 'cheek',      shape: 'ellipse', props: { cx: 0, cy: 0, rx: 0, ry: 0 },     label: 'Cheek' },
  { id: 'nose',       shape: 'polygon', props: { points: '0,0 0,0 0,0' },           label: 'Nose' },
  { id: 'upper_lip',  shape: 'rect',    props: { x: 0, y: 0, width: 0, height: 0 }, label: 'Upper Lip' },
  { id: 'lip_corner', shape: 'ellipse', props: { cx: 0, cy: 0, rx: 0, ry: 0 },     label: 'Lip Corner' },
  { id: 'lower_lip',  shape: 'rect',    props: { x: 0, y: 0, width: 0, height: 0 }, label: 'Lower Lip' },
  { id: 'jaw',        shape: 'ellipse', props: { cx: 0, cy: 0, rx: 0, ry: 0 },     label: 'Jaw' },
];

function RegionShape({
  shape,
  props,
  isActive,
  isFocused,
  onClick,
  label,
}: {
  shape: 'rect' | 'ellipse' | 'polygon';
  props: Record<string, number | string>;
  isActive: boolean;
  isFocused: boolean;
  onClick: () => void;
  label: string;
}) {
  const fill = isFocused
    ? 'rgba(251, 191, 36, 0.55)'   // amber when focused
    : isActive
    ? 'rgba(34, 197, 94, 0.35)'    // green when active
    : 'transparent';

  const stroke = isFocused ? '#f59e0b' : isActive ? '#16a34a' : 'transparent';

  const sharedProps = {
    fill,
    stroke,
    strokeWidth: 2,
    onClick,
    className: isActive ? 'cursor-pointer' : 'cursor-default',
    role: isActive ? 'button' : undefined,
    'aria-label': isActive ? label : undefined,
    style: { transition: 'fill 0.2s ease, stroke 0.2s ease' },
  };

  if (shape === 'rect') return <rect {...props} {...sharedProps} />;
  if (shape === 'ellipse') return <ellipse {...props} {...sharedProps} />;
  if (shape === 'polygon') return <polygon {...props} {...sharedProps} />;
  return null;
}

export function SVGOverlay({ activeRegions, focusedRegion, onRegionClick }: SVGOverlayProps) {
  return (
    // viewBox should match your Figma frame dimensions
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 300 350"
      xmlns="http://www.w3.org/2000/svg"
    >
      {REGIONS.map(({ id, shape, props, label }) => (
        <RegionShape
          key={id}
          shape={shape}
          props={props}
          isActive={activeRegions.includes(id)}
          isFocused={focusedRegion === id}
          onClick={() => activeRegions.includes(id) && onRegionClick(id)}
          label={label}
        />
      ))}
    </svg>
  );
}

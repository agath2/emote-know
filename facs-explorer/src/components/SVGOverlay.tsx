import React from 'react';
import type { SVGOverlayProps, Region } from '../types';

interface RegionShape {
  id: Region;
  shape: 'rect' | 'ellipse' | 'polygon';
  props: Record<string, number | string>;
  label: string;
}

// All coordinates derived from Figma frame (2550 x 3300)
// Ellipse props converted from Figma x/y/w/h: cx = x + w/2, cy = y + h/2, rx = w/2, ry = h/2
const REGION_SHAPES: RegionShape[] = [
  // ── Brow Inner (AU1) — rect ──
  {
    id: 'brow_inner',
    shape: 'rect',
    props: { x: 792.5, y: 884, width: 997, height: 301 },
    label: 'Inner Brow',
  },

  // ── Brow Lowerer (AU4) — triangle ──
  {
    id: 'brow_inner',
    shape: 'polygon',
    props: {
      points: `${904 + 742 / 2},${824} ${904},${824 + 420} ${904 + 742},${824 + 420}`,
    },
    label: 'Brow Lowerer',
  },

  // ── Brow Outer Left (AU2) ──
  {
    id: 'brow_outer',
    shape: 'rect',
    props: { x: 458, y: 916, width: 335, height: 301 },
    label: 'Outer Brow Left',
  },

  // ── Brow Outer Right (AU2) ──
  {
    id: 'brow_outer',
    shape: 'rect',
    props: { x: 1790, y: 916, width: 340, height: 301 },
    label: 'Outer Brow Right',
  },

  // ── Upper Lid Left (AU5) ──
  {
    id: 'upper_lid',
    shape: 'ellipse',
    props: { cx: 535 + 515 / 2, cy: 1217 + 166 / 2, rx: 515 / 2, ry: 166 / 2 },
    label: 'Upper Lid Left',
  },

  // ── Upper Lid Right (AU5) ──
  {
    id: 'upper_lid',
    shape: 'ellipse',
    props: { cx: 1490 + 522 / 2, cy: 1217 + 166 / 2, rx: 522 / 2, ry: 166 / 2 },
    label: 'Upper Lid Right',
  },

  // ── Lid Tightener Left (AU7) ──
  {
    id: 'upper_lid',
    shape: 'ellipse',
    props: { cx: 547 + 492 / 2, cy: 1244 + 308 / 2, rx: 492 / 2, ry: 308 / 2 },
    label: 'Lid Tightener Left',
  },

  // ── Lid Tightener Right (AU7) ──
  {
    id: 'upper_lid',
    shape: 'ellipse',
    props: { cx: 1505 + 492 / 2, cy: 1244 + 308 / 2, rx: 492 / 2, ry: 308 / 2 },
    label: 'Lid Tightener Right',
  },

  // ── Cheek Left (AU6) ──
  {
    id: 'cheek',
    shape: 'ellipse',
    props: { cx: 516 + 553 / 2, cy: 1517 + 348 / 2, rx: 553 / 2, ry: 348 / 2 },
    label: 'Cheek Left',
  },

  // ── Cheek Right (AU6) — mirrored ──
  {
    id: 'cheek',
    shape: 'ellipse',
    props: { cx: 2550 - (516 + 553 / 2), cy: 1517 + 348 / 2, rx: 553 / 2, ry: 348 / 2 },
    label: 'Cheek Right',
  },

  // ── Nose (AU9) — triangle ──
  {
    id: 'nose',
    shape: 'polygon',
    props: {
      points: `${900 + 746 / 2},${1300} ${900},${1300 + 962} ${900 + 746},${1300 + 962}`,
    },
    label: 'Nose',
  },

  // ── Nasolabial Fold Left (AU11) ──
  {
    id: 'cheek',
    shape: 'rect',
    props: { x: 740, y: 1978, width: 195, height: 410 },
    label: 'Nasolabial Fold Left',
  },

  // ── Nasolabial Fold Right (AU11) ──
  {
    id: 'cheek',
    shape: 'rect',
    props: { x: 1607, y: 1978, width: 195, height: 410 },
    label: 'Nasolabial Fold Right',
  },

  // ── Upper Lip ──
  {
    id: 'upper_lip',
    shape: 'ellipse',
    props: { cx: 904 + 742 / 2, cy: 2197 + 381 / 2, rx: 742 / 2, ry: 381 / 2 },
    label: 'Upper Lip',
  },

  // ── Lower Lip ──
  {
    id: 'lower_lip',
    shape: 'ellipse',
    props: { cx: 900 + 742 / 2, cy: 2396 + 401 / 2, rx: 742 / 2, ry: 401 / 2 },
    label: 'Lower Lip',
  },

  // ── Lip Corner Left ──
  {
    id: 'lip_corner',
    shape: 'rect',
    props: { x: 670, y: 2388, width: 234, height: 259 },
    label: 'Lip Corner Left',
  },

  // ── Lip Corner Right ──
  {
    id: 'lip_corner',
    shape: 'rect',
    props: { x: 1650, y: 2396, width: 234, height: 259 },
    label: 'Lip Corner Right',
  },

  // ── Jaw ──
  {
    id: 'jaw',
    shape: 'rect',
    props: { x: 935, y: 2760, width: 672, height: 342 },
    label: 'Jaw',
  },
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
    ? 'rgba(251, 191, 36, 0.55)'
    : isActive
    ? 'rgba(34, 197, 94, 0.35)'
    : 'transparent';

  const stroke = isFocused ? '#f59e0b' : isActive ? '#16a34a' : 'transparent';

  const sharedProps = {
    fill,
    stroke,
    strokeWidth: 8,
    onClick,
    className: isActive ? 'cursor-pointer' : 'cursor-default',
    role: isActive ? ('button' as const) : undefined,
    'aria-label': isActive ? label : undefined,
    style: { transition: 'fill 0.2s ease, stroke 0.2s ease' },
  };

  if (shape === 'rect') return <rect {...(props as React.SVGProps<SVGRectElement>)} {...sharedProps} />;
  if (shape === 'ellipse') return <ellipse {...(props as React.SVGProps<SVGEllipseElement>)} {...sharedProps} />;
  if (shape === 'polygon') return <polygon {...(props as React.SVGProps<SVGPolygonElement>)} {...sharedProps} />;
  return null;
}

export function SVGOverlay({ activeRegions, focusedRegion, onRegionClick }: SVGOverlayProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 2550 3300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {REGION_SHAPES.map((region, index) => (
        <RegionShape
          key={`${region.id}-${index}`}
          shape={region.shape}
          props={region.props}
          isActive={activeRegions.includes(region.id)}
          isFocused={focusedRegion === region.id}
          onClick={() => activeRegions.includes(region.id) && onRegionClick(region.id)}
          label={region.label}
        />
      ))}
    </svg>
  );
}

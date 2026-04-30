import type { AUCardProps } from '../types/index';

export function AUCard({ auNumber, auData, isActive, isFocused, onClick }: AUCardProps) {
  return (
    <button
      onClick={() => isActive && onClick(auNumber)}
      disabled={!isActive}
      className={`
        w-full text-left rounded-xl p-3 border transition-all duration-200
        ${isFocused
          ? 'border-amber-400 bg-amber-50 shadow-md scale-[1.02]'
          : isActive
          ? 'border-green-300 bg-green-50 hover:border-green-400 hover:shadow-sm cursor-pointer'
          : 'border-stone-100 bg-stone-50 opacity-40 cursor-default'}
      `}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={`
          text-xs font-mono font-bold px-1.5 py-0.5 rounded
          ${isFocused ? 'bg-amber-200 text-amber-800' : isActive ? 'bg-green-200 text-green-800' : 'bg-stone-200 text-stone-500'}
        `}>
          AU{auNumber}
        </span>
        <span className="text-sm font-semibold text-stone-700">{auData.fac_name}</span>
      </div>
      <p className="text-xs text-stone-500 leading-snug">
        {auData.muscular_basis.join(', ')}
      </p>
    </button>
  );
}

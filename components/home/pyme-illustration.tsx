"use client";

import * as React from "react";

const BARS = [
  { height: 70, label: "Q1" },
  { height: 105, label: "Q2" },
  { height: 145, label: "Q3" },
  { height: 195, label: "Q4" },
  { height: 240, label: "Q5" },
];

const BAR_WIDTH = 44;
const BAR_GAP = 28;
const BAR_START_X = 130;
const AXIS_Y = 320;
const TREND_DELAY = 200 + BARS.length * 140 + 200;
const ARROW_DELAY = TREND_DELAY + 1100;

export function PymeIllustration() {
  const [stage, setStage] = React.useState(0);

  React.useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BARS.forEach((_, i) => {
      timers.push(setTimeout(() => setStage((s) => Math.max(s, i + 1)), 200 + i * 140));
    });
    timers.push(setTimeout(() => setStage((s) => Math.max(s, BARS.length + 1)), TREND_DELAY));
    timers.push(setTimeout(() => setStage((s) => Math.max(s, BARS.length + 2)), ARROW_DELAY));
    return () => timers.forEach(clearTimeout);
  }, []);

  const trendPoints = BARS.map((bar, i) => {
    const cx = BAR_START_X + i * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2;
    const cy = AXIS_Y - bar.height - 14;
    return { x: cx, y: cy };
  });

  const trendPath = trendPoints
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  const lastPoint = trendPoints[trendPoints.length - 1];
  const trendShown = stage >= BARS.length + 1;
  const arrowShown = stage >= BARS.length + 2;

  return (
    <div className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100/30 p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-brand-200/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-accent-200/25 blur-3xl"
      />

      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full max-w-md"
        role="img"
        aria-label="El crédito Wecome impulsa el crecimiento de tu negocio"
      >
        <defs>
          <linearGradient id="bar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E89A1D" />
            <stop offset="100%" stopColor="#FCD9A0" />
          </linearGradient>
          <radialGradient id="coin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E89A1D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E89A1D" stopOpacity="0" />
          </radialGradient>
        </defs>

        <line
          x1="60"
          y1={AXIS_Y}
          x2="450"
          y2={AXIS_Y}
          stroke="#1A1A1A"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {[80, 160, 240].map((offset) => (
          <line
            key={offset}
            x1="60"
            y1={AXIS_Y - offset}
            x2="450"
            y2={AXIS_Y - offset}
            stroke="#1A1A1A"
            strokeOpacity="0.05"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        ))}

        {BARS.map((bar, i) => {
          const x = BAR_START_X + i * (BAR_WIDTH + BAR_GAP);
          const visible = stage >= i + 1;
          const h = visible ? bar.height : 0;
          return (
            <rect
              key={i}
              x={x}
              y={AXIS_Y - h}
              width={BAR_WIDTH}
              height={h}
              rx="6"
              fill="url(#bar-grad)"
              style={{
                transition:
                  "height 700ms cubic-bezier(0.34, 1.4, 0.5, 1), y 700ms cubic-bezier(0.34, 1.4, 0.5, 1)",
              }}
            />
          );
        })}

        <path
          d={trendPath}
          stroke="#1A1A1A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={trendShown ? 0 : 1}
          style={{ transition: "stroke-dashoffset 1100ms cubic-bezier(0.65, 0, 0.35, 1)" }}
        />

        <g
          style={{
            opacity: arrowShown ? 1 : 0,
            transform: `translate(${lastPoint.x}px, ${lastPoint.y}px) scale(${arrowShown ? 1 : 0.4})`,
            transformOrigin: `${lastPoint.x}px ${lastPoint.y}px`,
            transition:
              "opacity 350ms ease-out, transform 450ms cubic-bezier(0.34, 1.7, 0.5, 1)",
          }}
        >
          <circle r="11" fill="#1A1A1A" />
          <circle r="5" fill="#FCD9A0" />
        </g>

        <g transform="translate(60, 200)">
          <circle r="48" fill="url(#coin-glow)">
            <animate
              attributeName="r"
              values="44;52;44"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
          <g style={{ transformOrigin: "0 0" }}>
            <circle r="28" fill="#E89A1D">
              <animate
                attributeName="r"
                values="27;29;27"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="22" fill="#FCD9A0" />
            <text
              textAnchor="middle"
              y="9"
              fontSize="26"
              fontWeight="700"
              fill="#1A1A1A"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              $
            </text>
          </g>
        </g>

        <g stroke="#E89A1D" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M 95 200 Q 110 200, 122 230" strokeDasharray="3 6" opacity="0.6">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-18"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        <g
          fill="#1A1A1A"
          fillOpacity="0.4"
          fontSize="11"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
        >
          {BARS.map((bar, i) => {
            const cx = BAR_START_X + i * (BAR_WIDTH + BAR_GAP) + BAR_WIDTH / 2;
            return (
              <text key={bar.label} x={cx} y={AXIS_Y + 20}>
                {bar.label}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

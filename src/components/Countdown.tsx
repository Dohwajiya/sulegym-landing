"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ✅ 목표 날짜: 2026년 3월 26일 00:00:00 (KST)
// 변경하려면 이 값을 수정하세요.
const TARGET_DATE = new Date("2026-03-26T00:00:00+09:00");

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const LABELS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function TimeDisplay({ values }: { values: [string, string, string, string] }) {
  return (
    <div className="flex items-start justify-center gap-3 sm:gap-5 md:gap-8">
      {LABELS.map((label, i) => (
        <div key={label} className="flex items-start gap-3 sm:gap-5 md:gap-8">
          {i > 0 && (
            <span className="text-2xl sm:text-4xl md:text-5xl font-light text-muted select-none">
              :
            </span>
          )}
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold tabular-nums">
              {values[i]}
            </span>
            <span className="text-[10px] sm:text-xs text-accent uppercase tracking-[0.2em] mt-2">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * 카운트다운 타이머 컴포넌트
 * 목표 날짜를 변경하려면 파일 상단의 TARGET_DATE를 수정하세요.
 */
export default function Countdown() {
  // 초기값 null → 서버에서는 플레이스홀더, 클라이언트에서 1초 간격 업데이트
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // setInterval 콜백 내에서만 setState 호출 (외부 구독 패턴)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 서버 렌더링 시 또는 첫 interval 실행 전
  if (!timeLeft) {
    return <TimeDisplay values={["--", "--", "--", "--"]} />;
  }

  return (
    <TimeDisplay
      values={[
        pad(timeLeft.days),
        pad(timeLeft.hours),
        pad(timeLeft.minutes),
        pad(timeLeft.seconds),
      ]}
    />
  );
}

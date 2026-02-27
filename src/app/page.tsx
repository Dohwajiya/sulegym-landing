import Image from "next/image";
import Countdown from "../components/Countdown";

/**
 * SULÉGYM Coming Soon 랜딩 페이지
 *
 * 📌 로고 이미지 교체:
 *   - 전체 로고: public/images/logo.png 파일 교체
 *
 * 📌 텍스트 수정:
 *   - 서브타이틀: 아래 <p> 태그의 "Coming End of March" 수정
 *
 * 📌 카운트다운 날짜 변경:
 *   - src/components/Countdown.tsx 의 targetDate 수정
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh px-5 py-10 bg-black overflow-hidden">
      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14 animate-[fadeInUp_1.2s_ease-out_both]">

        {/* ============================================
            로고 이미지 — Image + filter + mix-blend-mode
            contrast(2): 어두운 배경을 순수 검정으로 강제
            mix-blend-lighten: 검정 영역을 페이지 배경과 동일하게 처리
            → 모바일 Safari 완벽 지원
            파일 위치: public/images/logo.png
            크기 조정: width/height 값 변경
            ============================================ */}
        <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-black">
          <Image
            src="/images/logo.png"
            alt="SULÉGYM Logo"
            fill
            className="object-contain mix-blend-lighten [filter:contrast(2)]"
            priority
          />
        </div>

        {/* ============================================
                        서브타이틀 — "Coming Soon"
            별도 텍스트 객체 (크기/색상/간격 조정 가능)
            ============================================ */}
        <p className="text-lg sm:text-2xl md:text-4xl font-normal text-[#888888] tracking-[0.15em] uppercase animate-[fadeInUp_1s_ease-out_0.4s_both]">
                    Coming Soon
        </p>

        {/* ============================================
            카운트다운 타이머 — 별도 컴포넌트
                        목표 날짜: 2026년 4월 1일 오후 5시
            변경: src/components/Countdown.tsx
            ============================================ */}
        <div className="animate-[fadeInUp_1s_ease-out_0.7s_both]">
          <Countdown />
        </div>

        {/* ============================================
                    런칭일 표시 — 카운트다운 아래
                                별도 텍스트 객체 (크기/색상/간격 조정 가능)
                                            ============================================ */}
                <p className="text-sm sm:text-base md:text-lg font-light text-[#666666] tracking-[0.1em] animate-[fadeInUp_1s_ease-out_1s_both]">
                          Grand Open — April 1, 2026
                </p>

      </div>
    </main>
  );
}

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
            로고 이미지 — CSS mask로 배경 제거
            mask-mode: luminance → 흰색=보임, 검정=투명
            파일 위치: public/images/logo.png
            크기 조정: width/height 값 변경
            ============================================ */}
        <div
          role="img"
          aria-label="SULÉGYM Logo"
          className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-white"
          style={{
            WebkitMaskImage: 'url(/images/logo.png)',
            maskImage: 'url(/images/logo.png)',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            maskMode: 'luminance',
          } as React.CSSProperties}
        />

        {/* ============================================
            서브타이틀 — "Coming End of March"
            별도 텍스트 객체 (크기/색상/간격 조정 가능)
            ============================================ */}
        <p className="text-lg sm:text-2xl md:text-4xl font-normal text-[#888888] tracking-[0.15em] uppercase animate-[fadeInUp_1s_ease-out_0.4s_both]">
          Coming End of March
        </p>

        {/* ============================================
            카운트다운 타이머 — 별도 컴포넌트
            목표 날짜: 2026년 3월 26일
            변경: src/components/Countdown.tsx
            ============================================ */}
        <div className="animate-[fadeInUp_1s_ease-out_0.7s_both]">
          <Countdown />
        </div>

      </div>
    </main>
  );
}

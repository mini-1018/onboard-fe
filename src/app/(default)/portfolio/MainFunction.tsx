import { useState } from "react";

export default function MainFunction() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="space-y-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-800">적용 기능</h2>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
              ${
                activeTab === "frontend"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
        >
          프론트엔드
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
              ${
                activeTab === "backend"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
        >
          백엔드
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-8 shadow-lg min-h-[400px]">
        {activeTab === "frontend" ? (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              프론트엔드 주요 기능
            </h3>
            <div className="space-y-6">
              <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
                <li>
                  <span className="font-semibold">SSR 데이터 최적화</span>
                  <p className="ml-6 mt-1">
                    서버에서 데이터를 미리 가져와 React Query Initial Data로
                    활용하여 초기 로딩 속도 개선
                  </p>
                </li>
                <li>
                  <span className="font-semibold">
                    무한 스크롤 페이지네이션
                  </span>
                  <p className="ml-6 mt-1">
                    랜딩페이지 및 게시글 리스트의 사용자 경험 개선을 위한 무한
                    스크롤 구현
                  </p>
                </li>
                <li>
                  <span className="font-semibold">상태 관리 최적화</span>
                  <p className="ml-6 mt-1">
                    Zustand를 활용한 게시글 수정 데이터 관리로 불필요한 API 요청
                    최소화
                  </p>
                </li>
                <li>
                  <span className="font-semibold">이미지 및 SEO 최적화</span>
                  <p className="ml-6 mt-1">
                    Next.js Image 컴포넌트와 메타태그를 활용한 성능 및 검색
                    최적화
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              백엔드 주요 기능
            </h3>
            <div className="space-y-6">
              <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
                <li>
                  <span className="font-semibold">모듈화 및 의존성 주입</span>
                  <p className="ml-6 mt-1">
                    NestJS를 활용한 체계적인 모듈화와 의존성 주입으로 개발
                    생산성 향상
                  </p>
                </li>
                <li>
                  <span className="font-semibold">쿼리 최적화</span>
                  <p className="ml-6 mt-1">
                    Prisma Select를 활용하여 필요한 데이터만 조회함으로써 응답
                    시간 단축
                  </p>
                </li>
                <li>
                  <span className="font-semibold">캐싱 전략</span>
                  <p className="ml-6 mt-1">
                    효율적인 캐싱 전략 적용으로 서버 부하 감소 및 응답 속도 개선
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

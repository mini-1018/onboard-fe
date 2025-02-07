import Image from "next/image";
import { useState } from "react";

export default function Perfomance() {
  const [activeTab, setActiveTab] = useState("frontend");
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        성능 최적화
      </h2>

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
          프론트엔드 최적화
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
          백엔드 최적화
        </button>
      </div>

      {/* Content */}
      <div className="flex space-x-8 w-full">
        <div className="bg-white rounded-lg p-8 shadow-lg shadow-primary h-[500px] w-1/2">
          {activeTab === "frontend" ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                프론트엔드 최적화
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-600">
                      99+
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">Lighthouse 성능 점수</p>
                </div>
                <ul className="space-y-3 list-disc list-inside text-gray-600 text-lg">
                  <li>
                    SSR + React Query Initial Data 활용으로 초기 로딩 속도 개선
                  </li>
                  <li>Next.js Image 컴포넌트를 활용한 이미지 최적화</li>
                  <li>메타태그 최적화를 통한 SEO 개선</li>
                  <li>무한 스크롤을 통한 페이지네이션으로 사용자 경험 향상</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                백엔드 최적화
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      ↓ms
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">응답 시간 단축</p>
                </div>
                <ul className="space-y-3 list-disc list-inside text-gray-600 text-lg">
                  <li>
                    Prisma Select를 활용한 필요 데이터만 조회하여 응답 시간 단축
                  </li>
                  <li>효율적인 캐싱 전략 적용으로 반복 요청 최소화</li>
                  <li>불필요한 데이터 요청 최소화로 서버 부하 감소</li>
                  <li>NestJS의 모듈화를 통한 효율적인 코드 구조 구현</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {activeTab === "frontend" ? (
          <div className="flex-1 flex items-center justify-center shadow-lg rounded-lg shadow-primary h-[500px]">
            <div className="w-[480px] h-[400px] relative">
              <Image
                src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%84%B1%EB%8A%A5%EC%A0%90%EC%88%98.jpg"
                alt="성능 개선 이미지"
                className="w-auto rounded-lg"
                fill
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center shadow-lg rounded-lg shadow-primary">
            <Image
              src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%84%B1%EB%8A%A5%EC%A0%90%EC%88%98.jpg"
              alt="성능 개선 이미지"
              className="w-auto object-cover rounded-lg"
              width={400}
              height={300}
            />
          </div>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
          className={`px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-[16px]
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
          className={`px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-[16px]
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
      <div className="flex flex-col 2xl:flex-row gap-8 h-auto 2xl:h-[500px]">
        {/* 왼쪽 설명 영역 */}
        <div className="w-full 2xl:w-1/2 bg-white rounded-lg p-8 shadow-lg shadow-primary">
          {activeTab === "frontend" ? (
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-semibold text-primary">
                프론트엔드 최적화
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-green-600">
                      99+
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-gray-600">
                    Lighthouse 성능 점수
                  </p>
                </div>
                <ul className="flex flex-col gap-6 md:gap-10 list-disc list-inside text-gray-600 text-sm md:text-lg">
                  <li>
                    Prisma Select를 활용한 필요 데이터만 조회하여 응답 시간 단축
                  </li>
                  <li>효율적인 캐싱 전략 적용으로 반복 요청 최소화</li>
                  <li>불필요한 데이터 요청 최소화로 서버 부하 감소</li>
                  <li>NestJS의 모듈화를 통한 효율적인 코드 구조 구현</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg md:text-2xl font-semibold text-primary">
                백엔드 최적화
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">
                      ↓ms
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-gray-600">
                    응답 시간 단축
                  </p>
                </div>
                <ul className="flex flex-col gap-6 md:gap-10 list-disc list-inside text-gray-600 text-sm md:text-lg">
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

        {/* 오른쪽 성능 지표 영역 */}
        {activeTab === "frontend" ? (
          <div className="flex-1 flex items-center justify-center shadow-lg rounded-lg shadow-primary h-[400px] 2xl:h-[500px]">
            <div className="w-full 2xl:w-[480px] h-[300px] 2xl:h-[400px] relative">
              <Image
                src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%84%B1%EB%8A%A5%EC%A0%90%EC%88%98.jpg"
                alt="성능 개선 이미지"
                className="rounded-lg"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full 2xl:w-1/2 flex flex-col gap-4 h-full">
            {/* 캐시 설정 박스 */}
            <div className="flex-1 flex flex-col shadow-lg rounded-lg shadow-primary px-4 md:px-20 py-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-xl font-bold text-primary">
                  캐시 설정
                </p>
                <div className="flex flex-col md:flex-row md:gap-6 gap-2">
                  <p className="text-xs md:text-sm text-gray-700">
                    K6 - VUs 1000
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm text-gray-700 font-bold">avg : </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      335.75ms <FaArrowRight />
                    </p>
                    <p className="text-sm text-red-500 font-bold">1.85ms</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-sm text-gray-700 font-bold">p(95) :</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      1.04s <FaArrowRight />
                    </p>
                    <p className="text-sm text-red-500 font-bold">3.71ms</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div>
                  <p>before</p>
                  <div className="w-full max-w-[600px] h-[28px] relative">
                    <Image
                      src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%BA%90%EC%8B%9C%EC%A0%84.png"
                      alt="성능 개선 이미지"
                      className="w-full object-contain"
                      fill
                    />
                  </div>
                </div>
                <div>
                  <p>after</p>
                  <div className="w-full max-w-[600px] h-[28px] relative">
                    <Image
                      src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%BA%90%EC%8B%9C%ED%9B%84.png"
                      alt="성능 개선 이미지"
                      className="w-full object-contain"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* select 조회 박스 */}
            <div className="flex-1 flex flex-col shadow-lg rounded-lg shadow-primary px-4 md:px-20 py-4">
              <div className="flex flex-col gap-2">
                <p className="text-lg md:text-xl font-bold text-primary">
                  select 조회
                </p>
                <div className="flex flex-col md:flex-row md:gap-6 gap-2">
                  <p className="text-xs md:text-sm text-gray-700">
                    K6 - VUs 1000
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm text-gray-700 font-bold">avg : </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      84.62ms <FaArrowRight />
                    </p>
                    <p className="text-sm text-red-500 font-bold">2.2ms</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-sm text-gray-700 font-bold">p(95) :</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      358.73ms <FaArrowRight />
                    </p>
                    <p className="text-sm text-red-500 font-bold">4ms</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div>
                  <p>before</p>
                  <div className="w-full max-w-[600px] h-[28px] relative">
                    <Image
                      src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/select%EC%A0%84.png"
                      alt="성능 개선 이미지"
                      className="w-full object-contain"
                      fill
                    />
                  </div>
                </div>
                <div>
                  <p>after</p>
                  <div className="w-full max-w-[600px] h-[28px] relative">
                    <Image
                      src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/select%ED%9B%84.png"
                      alt="성능 개선 이미지"
                      className="w-full object-contain"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

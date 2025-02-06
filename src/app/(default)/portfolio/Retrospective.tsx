import { useState } from "react";

export default function Retrospective() {
  const [activeTab, setActiveTab] = useState("troubles");
  return (
    <div className="space-y-8 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-800">프로젝트 회고</h2>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("troubles")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
            ${
              activeTab === "troubles"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          🤔 고민했던 점
        </button>
        <button
          onClick={() => setActiveTab("solutions")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
            ${
              activeTab === "solutions"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          💡 해결 방법
        </button>
        <button
          onClick={() => setActiveTab("lessons")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
            ${
              activeTab === "lessons"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          개선할 점
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-8 shadow-lg min-h-[400px]">
        {activeTab === "troubles" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              🤔 고민했던 점
            </h3>
            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">백엔드 고부하 한계</span>
                <p className="ml-6 mt-1 text-sm">
                  t2.micro 인스턴스의 단일 코어 성능 한계로 인해 고부하 상황에서
                  여러 문제가 발생할 수 있음을 고민하였습니다.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  미사용 S3 이미지 데이터 문제
                </span>
                <p className="ml-6 mt-1 text-sm">
                  프로필 수정 및 게시글 수정으로 인하여 더 이상 사용하지 않는
                  데이터가 추가만되고 삭제되지는 않는 점을 개선하기 위해
                  고민하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "solutions" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              💡 해결 방법
            </h3>
            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">
                  데이터베이스 리미트 설정 및 캐시 전략
                </span>
                <p className="ml-6 mt-1 text-sm">
                  단일 코어 환경의 한계를 고려하여, 부하를 줄이기 위한 방안으로
                  postgreSQL의 limit size를 5로 설정하고, 인메모리 캐시 전략을
                  도입하였습니다.
                </p>
              </li>

              <li>
                <span className="font-semibold">이미지 테이블 관리</span>
                <p className="ml-6 mt-1 text-sm">
                  status 컬럼을 boolean 타입으로 설정하여 이미지의 사용 여부를
                  구분하였고 매일 정해진 시간에 node-cron을 사용해 status가
                  false인 이미지를 자동으로 삭제하도록 설정하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "lessons" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">개선할 점</h3>
            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">다양한 백엔드 전략</span>
                <p className="ml-6 mt-1 text-sm">
                  이번 고부하 대책을 통해 제한된 인프라 상황에서 여러 백엔드
                  전략을 고민하였고 더 나은 성능을 위해 다음과 같은 방안을
                  계획하였습니다.
                </p>
                <p className="ml-6 mt-1 text-xs">
                  이중화: 더 많은 유저를 지원하기 위해 인스턴스 성능
                  업그레이드뿐 아니라, 로드 밸런싱을 통한 이중화 방안을
                  학습하고자 합니다.
                </p>

                <p className="ml-6 mt-1 text-xs">
                  Redis 활용: 트랜잭션이 빈번하거나 외부 데이터를 추가해야 하는
                  경우, Redis를 활용한 큐 전략과 캐시 전략 도입도 고려할
                  계획입니다.
                </p>
              </li>

              <li>
                <span className="font-semibold">
                  S3와 데이터베이스의 원자성
                </span>
                <p className="ml-6 mt-1 text-sm">
                  S3이미지 삭제와 데이터베이스 삭제의 원자성을 보장하기 위한
                  Outbox 또는 Saga 패턴 구현을 계획하였습니다.
                </p>
              </li>
              <li>
                <span className="font-semibold">에러 처리</span>
                <p className="ml-6 mt-1 text-sm">
                  데이터 응답 에러 메시지 세분화를 통해 사용자가 더 나은 경험을
                  할 수 있도록 개선하도록 계획하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

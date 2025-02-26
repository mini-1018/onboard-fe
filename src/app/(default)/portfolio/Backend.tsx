import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Backend() {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        백엔드
      </h2>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors
                ${
                  activeTab === "architecture"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
          >
            아키텍처
          </button>
          <button
            onClick={() => setActiveTab("erd")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors
                ${
                  activeTab === "erd"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
          >
            ERD
          </button>
        </div>

        {/* Content */}
        {activeTab === "architecture" ? (
          <div className="relative w-[100%] h-[50vw] xl:w-[70%] 2xl:h-[20vw] bg-white rounded-lg shadow-lg shadow-primary">
            <Image
              src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/BackA.png"
              alt="Architecture"
              fill
              className="object-contain p-4"
            />
          </div>
        ) : (
          <div className="relative w-[100%] h-[50vw] xl:w-[70%] 2xl:h-[30vw] bg-white rounded-lg shadow-lg shadow-primary">
            <div className="relative w-full h-full">
              <div className="relative min-w-full min-h-full px-4 group">
                <Image
                  src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/ERD.svg"
                  alt="ERD Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <ul className="space-y-10 list-disc pl-5 [&>li]:space-y-2 md:[&>li]:space-y-4 [&>li>p]:text-sm md:[&>li>p]:text-base">
        <li>
          <h3 className="text-base md:text-xl font-bold">
            데이터베이스 설계 및 최적화
          </h3>
          <p>
            k6를 통해 부하테스트를 진행하였으며 VUs(가상유저) 1000 기준으로 평균
            18.77ms, P(95) 88.99ms의 성능을 달성하였습니다.
          </p>
          <p>
            - 스키마 설계 : 3NF를 바탕으로 설계하였고 비키 속성들이 기본 키에
            완전히 종속되어 이행적 종속이 없도록 구성하였습니다.
          </p>
          <p>
            - 인덱싱 : 관계 필드 인덱싱 및 프리스마 어노테이션을 통한 자동
            인덱싱을 구현하였습니다.
          </p>
          <p>
            - 쿼리 최적화 : include 대신 select로 필요한 데이터만 선택하도록
            하였고 커서 기반 페이지네이션을 적용하였습니다.
          </p>
          <div className="pl-2 space-y-2 sm:space-y-0 sm:flex sm:gap-8">
            <div className="flex items-center gap-2">
              <dl className="flex items-center gap-2 text-sm md:text-base">
                <dt>Avg:</dt>
                <dd>1.17s</dd>
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm md:text-base"
                />
                <dd className="text-red-500">581.4ms</dd>
              </dl>
            </div>
            <div className="flex items-center gap-2">
              <dl className="flex items-center gap-2 text-sm md:text-base">
                <dt>P(95):</dt>
                <dd>3.13s</dd>
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm md:text-base"
                />
                <dd className="text-red-500">1.56s</dd>
              </dl>
            </div>
          </div>
          <p>
            - 캐싱 전략 : 루트 페이지의 게시글 목록을 조회하는 API와 같이 자주
            조회되는 엔드포인트와 GET 요청에들에 대하여 캐싱하도록
            구현하였습니다. 특히 자주 조회되는 엔드포인트에서 쿼리 파라미터를
            사용하는 경우 서비스 레이어에서 쿼리 파라미터에 따른 세부적인 캐싱을
            하도록 구현하였습니다.
          </p>
          <div className="pl-2 space-y-2 sm:space-y-0 sm:flex sm:gap-8">
            <div className="flex items-center gap-2">
              <dl className="flex items-center gap-2 text-sm md:text-base">
                <dt>Avg:</dt>
                <dd>581.4ms</dd>
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm md:text-base"
                />
                <dd className="text-red-500">18.77ms</dd>
              </dl>
            </div>
            <div className="flex items-center gap-2">
              <dl className="flex items-center gap-2 text-sm md:text-base">
                <dt>P(95):</dt>
                <dd>1.56s</dd>
                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm md:text-base"
                />
                <dd className="text-red-500">88.99ms</dd>
              </dl>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-base md:text-xl font-bold">트랜잭션</h3>
          <p>
            - S3와 DB의 이미지 데이터 무결성을 보장하기 위해 아웃박스 패턴을
            구현하였습니다. 아웃박스는 이벤트 타입과 페이로드를 통해 메시지를
            명확히 식별 할 수 있도록 하였으며, 실패 시 재시도 매커니즘을 통해
            자동 복구가 가능하도록 설계하였습니다.
          </p>
          <p>
            - 데이터 무결성 보장을 위해 레포지토리 레이어에서 트랜잭션 경계를
            설정하였습니다. 예를들어 사용자 생성 프로세스에서는 사용자 정보와
            사용자 이미지가 항상 함께 생성되거나 실패하도록 원자적 트랜잭션으로
            구현하였습니다.
          </p>
        </li>
        <li>
          <h3 className="text-base md:text-xl font-bold">에러처리</h3>
          <p>
            - 에러를 프론트엔드에서 다루기 편하게 커스텀하였고 에러 상태와 에러
            코드를 서비스 레이어에서 try catch로 예외 발생 시 throw 하도록
            하였습니다. 이후 글로벌 에러 핸들러에서 throw 된 에러를 응답으로
            전송합니다.
          </p>
        </li>
        <li>
          <h3 className="text-base md:text-xl font-bold">보안</h3>
          <p>
            - Redis를 활용하여 일정 시간동안 과도한 요청 발생 시 차단하고
            429에러를 클라이언트에게 응답하도록 Rate Limiting을 구현하였습니다.
          </p>
          <p>
            - 인증이 필요한 엔드포인트의 컨트롤러에 HttpOnly 쿠키에서 JWE 토큰을
            해독하고 페이로드를 Req에 담아 전달하는 Guard를 설정하였습니다. 이후
            서비스레이어에서 인가 및 예외를 발생시키도록 구현하였습니다.
          </p>
          <p>- NginX를 통해 SSL 인증서를 발급 받고 갱신하도록 하였습니다.</p>
        </li>
        <li>
          <h3 className="text-base md:text-xl font-bold">모니터링 및 로깅</h3>
          <p>
            도커를 통한 로그 확인 : 현재 ec2 프리티어의 인스턴스인 t2.micro를
            사용중입니다. 단일 코어로 성능이 제한적이기 때문에 pm2는 리소스 낭비
            및 복잡도 증가라 판단하여 도커를 통하여 로그를 확인하고있습니다.
          </p>
        </li>
      </ul>
    </div>
  );
}

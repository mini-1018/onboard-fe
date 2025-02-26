import Image from "next/image";

export default function Frontend() {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        프론트엔드
      </h2>
      <div className="space-y-6">
        <ul className="space-y-10 list-disc pl-5 [&>li]:space-y-2 md:[&>li]:space-y-4 [&>li>p]:text-sm md:[&>li>p]:text-base">
          <li>
            <h3 className="text-base md:text-xl font-bold">아키텍처</h3>
            <div className="relative w-[100%] h-[30vw] lg:w-[750px] md:h-[300px] bg-white rounded-lg shadow-lg shadow-primary">
              <Image
                src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/frontA.png"
                alt="Architecture"
                fill
                className="object-contain p-4"
              />
            </div>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">
              클라이언트-서버 통신 방식
            </h3>
            <p>
              REST API 방식으로 HTTP 메서드를 사용하여 클라이언트와 서버 간의
              통신을 구현하였습니다.
            </p>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">인증 / 보안</h3>
            <p>
              - 클라이언트의 모든 요청은 Next Server를 거치도록 설계하였습니다.
            </p>
            <p>
              - 로그인 유지 및 유저 권한이 필요한 API 요청에 필요한 정보가 담긴
              JWE를 HttpOnly 쿠키로 전달하도록 설계하였습니다.
            </p>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">상태관리</h3>
            <p>- ReactQuery : 서버 상태관리</p>
            <p>
              서버 상태 캐싱, 데이터 리프레시, 재요청, 에러 핸들링 등의 서버
              상태관리를 구현하였습니다.
            </p>
            <p>- Zustand : 클라이언트 상태관리</p>
            <p>전역에서 사용할 Error상태를 구현하였습니다.</p>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">에러처리</h3>
            <p>
              사용자 경험을 위해 서버에서 응답한 에러를 사용자에게 효율적으로
              제공하기위하여 고민하였고 ReactQuery, Zustand, Toast Ui를 이용하여
              피드백을 제공하도록 구현하였습니다. 에러 처리 흐름은 다음과
              같습니다.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto w-[100%] md:w-[50%]">
              <code className="text-sm">
                {`<QueryProvider>
    <ErrorCatcher />
    {children}
    <ToastContainer />
</QueryProvider>`}
              </code>
            </pre>
            <p>
              1. API 요청 후 에러가 발생하면 에러의 메시지와 상태코드, path로
              구성 된 커스텀된 에러 객체를 throw 합니다.
            </p>
            <p>
              2. 쿼리클라이언트(쿼리프로바이더)의 onError를 통해 zustand의 error
              스토어의 error를 throw된 에러 객체로 업데이트합니다.
            </p>
            <p>
              3. ErrorCatcher는 useEffect를 통해 error 스토어의 error를 구독하고
              있고 값이 업데이트되면 toast ui에 메시지를 띄워 사용자에게
              피드백을 제공합니다.
            </p>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">모니터링 및 로깅</h3>
            <p>- Sentry</p>
            <p>애플리케이션 레벨 에러들을 그룹핑하고 발생 컨텍스트를 분석</p>
            <p>- Vercel</p>
            <p>서버 사이드 로깅과 배포, 빌드와 같은 인프라 로깅</p>
          </li>
          <li>
            <h3 className="text-base md:text-xl font-bold">성능 최적화</h3>
            <p>
              Lighthouse를 통해 성능을 테스트하였고 결과로 FCP(첫 번째 컨텐츠
              페인트), LCP(최대 컨텐츠 페인트) 각각 0.4s 이며 평균 99점의
              성능지표를 달성하였습니다. 성능 최적화를 위해 다음과 같은 방법을
              사용하였습니다.
            </p>
            <p>
              - 초기 로딩 속도 향상을 위해 모든 페이지의 초기 데이터를 SSR로
              제공하였습니다.
            </p>
            <p>
              - 무한스크롤 방식의 페이지네이션을 구현하여 초기 로딩 속도 및
              사용자 경험을 개선하였습니다.
            </p>
            <p>
              - 코드 스플리팅을 통해 페이지 로드 시 필요한 코드만 로드하도록
              하였습니다.
            </p>
            <p>- Tailwind css 사용하여 반응형 디자인을 구현하였습니다.</p>
            <p>
              - 이미지 컴포넌트를 통한 자동 WebP/AVIF 변환, 리사이징, 품질
              최적화, 지연로딩 등을 구현하였습니다.
            </p>
            <p>
              - JS 공백제거, 변수명 최소화와 같은 자동 압축 및 CDN 캐싱, 해시
              생성을 Vercel을 통해 최적화 하였습니다.
            </p>
            <p>
              - SSR의 강점을 활용하여 전 페이지에 SEO 메타태그를 적용하였고
              Robot.txt, site map 등을 통해 google 및 naver에 검색 가능하도록
              하였습니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

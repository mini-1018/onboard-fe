export default function Retrospective() {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        프로젝트 회고
      </h2>
      <ul className="space-y-6 list-disc pl-5">
        <li>
          <h3 className="text-base md:text-xl font-bold">
            인증/인가 시스템 구현
          </h3>
          <p>
            토큰 기반과 세션 기반 중 어떤 방식이 프로젝트에 적합할지, 그리고
            구현 과정에서 많은 고민을 하였습니다. 토큰과 세션 모두 완벽한 방법은
            없고 각 방법에서 인증 구현 뿐만아니라 서버의 리소스도 고려해야했기에
            프로젝트에서 가장 어려웠던 문제였습니다.
          </p>
          <ul className="space-y-4 list-['-'] pl-2 mt-4 [&>li]:pl-2 [&>li]:space-y-2 md:[&>li]:space-y-4 [&>li>p]:text-sm md:[&>li>p]:text-base">
            <li>
              <h4 className="text-base md:text-lg font-bold">토큰 기반 인증</h4>
              <p>
                인증 방식을 결정할 때 가장 먼저 고려한 것은 보안이었습니다. 금융
                서비스처럼 매우 민감한 정보를 다루는 것이 아니기에, 절대적인
                보안성보다는 확장성과 사용자 편의성 사이의 균형을 찾고자
                했습니다. 결론은 금융과 같은 민감한 정보를 다루는게 아니기
                때문에 확장성과 편리성을 생각하여 토큰 방식으로 선택했습니다.
              </p>
            </li>
            <li>
              <h4 className="text-base md:text-lg font-bold">NextAuth</h4>
              <p>
                NextAuth를 선택한 이유는 과거 팀프로젝트에서 인증 시스템을
                구현하는데 SSR에서의 rewrite를 설정과 passport 검증 로직 구현
                등에 많은 시간을 소비하였기 때문입니다. NextAuth를 통해
                인증로직을 효과적으로 줄일 수 있었습니다.
              </p>
              <p>
                EC2 프리티어로 성능이 제한적이며 Docker 빌드 및 Rate Limiting을
                Redis로 운영하는 등 메모리가 많이 소모되기 때문에 Refresh 토큰을
                Redis와 같은 DB로 관리하는데 부담이 있었습니다. NextAuth의
                JWT전략은 이러한 상황에서 이상적인 서버 부하를 줄여주는 효과를
                얻을 수 있습니다.
              </p>
              <p>
                NextAuth에서 사용하는 JWE는 타 라이브러리로 디코딩이 되지않는
                점으로 보았을 때 토큰의 위변조가 일반 토큰들보다 어려워
                보안적으로 이점을 얻을 수 있다고 판단했습니다.
              </p>
            </li>
            <li>
              <h4 className="text-base md:text-lg font-bold">
                구현 과정에서의 고민
              </h4>
              <p>
                토큰 수명과 갱신 전략을 설계할 때도 많은 고민이 있었습니다. 너무
                긴 수명은 보안 위험을, 너무 짧은 수명은 사용자 경험 저하를
                가져올 수 있기 때문입니다.
              </p>
              <p>
                결국 토큰의 최대 수명(maxAge)은 24시간으로, 갱신
                시점(updateAge)은 12시간으로 설정하여 sliding session으로
                구현했습니다. 이렇게 하면 활발히 서비스를 이용하는 사용자는 자동
                갱신으로 끊김 없는 경험을 유지하면서도, 토큰 탈취 시 위험을
                24시간으로 제한할 수 있었습니다.
              </p>
              <p>
                CSRF와 XSS 공격에 대한 방어도 중요한 고려사항이었습니다.
                NextAuth의 CSRF 토큰과 함께 HttpOnly 쿠키를 사용하여 XSS
                공격으로부터 보호하도록 하였습니다.
              </p>
            </li>
            <li>
              <h4 className="text-base md:text-lg font-bold">개선 방향</h4>
              <p>
                서버 성능 향상(스케일 업)과 더불어, Auth0와 JWT.io에서 권장하는
                보안 모범 사례를 적용하여 Redis를 활용한 리프레시 토큰 로테이션
                및 재사용 감지 메커니즘을 구현함으로써 더 견고한 인증 시스템을
                구축하고자 합니다.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

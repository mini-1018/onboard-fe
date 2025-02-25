export default function Retrospective() {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        프로젝트 회고
      </h2>
      <div className="space-y-6">
        <h3 className="text-xl font-medium">인증/인가 시스템 구현</h3>
        <p>
          토큰 기반과 세션 기반 중 어떤 방식이 프로젝트에 적합할지, 그리고 어떤
          도구를 사용할지 많은 고민을 하였습니다. 토큰과 세션 모두 완벽한 방법은
          없고 각 방법에서 인증 구현 뿐만아니라 서버의 리소스도 고려해야했기에
          프로젝트에서 가장 어려웠던 문제였습니다.
        </p>
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <h4 className="text-lg font-medium">토큰 기반 인증</h4>
            <p>
              인증 방식을 결정할 때 가장 먼저 고려한 것은 보안이었습니다. 금융
              서비스처럼 매우 민감한 정보를 다루는 것이 아니기에, 절대적인
              보안성보다는 확장성과 사용자 편의성 사이의 균형을 찾고자 했습니다.
              결론은 금융과 같은 민감한 정보를 다루는게 아니기 때문에 확장성과
              편리성을 생각하여 토큰 방식으로 선택했습니다.
            </p>
          </li>
          <li>
            <h4 className="text-lg font-medium">NextAuth</h4>
            <p>
              NextAuth를 선택한 이유는 과거 팀프로젝트에서 인증 시스템을
              구현하는데 많은 시간을 소비하였기 때문입니다.
            </p>
            <p></p>
            <p></p>
            <p></p>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

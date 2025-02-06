import Image from "next/image";

export default function Introduction() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex gap-4 items-end border-b border-primary pb-6">
        <Image
          src="/images/onboard-large.png"
          alt="onboard"
          width={200}
          height={100}
        />
        <p className="text-sm font-bold text-gray-500">
          개발 기간: 2025.01.15 ~ 현재 / 1인 개발
        </p>
      </div>
      <div className="w-[50%]">
        <div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
            <div className="flex items-center gap-4">
              <Image
                src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%95%88%EC%9E%AC%EB%AF%BC.jpg"
                alt="profile"
                width={100}
                height={100}
              />
              <p className="text-sm text-gray-600 leading-relaxed">
                안녕하세요. 인내외양(忍耐外揚) 개발자 안재민입니다.
                <br />
                깔끔한 의사전달 능력을 활용한 조직 적응력과 문제를 차분히
                분석하는 인내력이 강점이며, 업무에 있어서 책임감을 가장
                중요시합니다.
                <br />
                9년간 군인으로서 국방의 의무를 다하며 아무리 어려운 문제를
                직면한다고 해도 인내와 의지만 있다면 해결하지 못할 것은 없다는
                사실을 몸소 체득하고 성장하였습니다. 선임자가 없는 군대의 업무
                방식을 무수히 경험해봄으로써 향상된 업무 적응력을 습득하였으며,
                이를 활용하여 귀사의 성장에 공헌하고 싶습니다.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">
              Description
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              OnBoard는 개발자들이 코딩 과정에서 겪은 문제나 고민을 공유하고,
              해결되지 않은 질문을 자유롭게 나눌 수 있는 커뮤니티입니다.
              <br />
              사이트 이름인 OnBoard는 게시판(Board)과 ‘승선’(On Board)의 중의적
              의미를 담고 있으며, 돛의 모양은 태그를 형상화하였습니다. 많은
              개발자들과 함께 더 넓은 바다를 항해하고자 하는 마음을 담아
              기획하였습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

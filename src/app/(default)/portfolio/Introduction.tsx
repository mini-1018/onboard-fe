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
              <p className="text-lg text-gray-600 leading-relaxed">
                안녕하세요! 생각하고 싶은 개발자 안재민입니다.
                <br />
                효율과 책임을 중요시하며, 우수한 커뮤니케이션 능력으로 조직 내
                협업을 중요하게 생각합니다.
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

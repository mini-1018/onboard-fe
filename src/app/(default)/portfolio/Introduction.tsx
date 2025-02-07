import { useEffect, useState } from "react";
import Image from "next/image";

export default function Introduction() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

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
      <div className="w-full flex gap-20">
        <div className="w-[50%]">
          <div className="space-y-6">
            <div className="space-y-4 shadow-sm py-5 px-10 rounded-lg shadow-primary">
              <h2 className="text-3xl font-semibold text-primary">About Me</h2>
              <div className="flex items-center gap-20">
                <Image
                  src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%95%88%EC%9E%AC%EB%AF%BC.jpg"
                  alt="profile"
                  width={150}
                  height={100}
                />
                <div className="text-sm text-gray-600 leading-relaxed w-[60%]">
                  <p className="text-lg font-bold text-center">
                    "안녕하세요. 인내외양(忍耐外揚) 개발자 안재민입니다."
                  </p>
                  <br />
                  <p>
                    깔끔한 의사전달 능력을 활용한 조직 적응력과 문제를 차분히
                    분석하는 인내력이 강점이며, 업무에 있어서 책임감을 가장
                    중요시합니다.
                  </p>
                  <br />
                  <p>
                    9년간 군인으로서 국방의 의무를 다하며 아무리 어려운 문제를
                    직면한다고 해도 인내와 의지만 있다면 해결하지 못할 것은
                    없다는 사실을 몸소 체득하고 성장하였습니다. 선임자가 없는
                    군대의 업무 방식을 무수히 경험해봄으로써 향상된 업무
                    적응력을 습득하였으며, 이를 활용하여 귀사의 성장에 공헌하고
                    싶습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="w-[40%] shadow-sm py-5 px-10 rounded-lg shadow-primary">
                <h2 className="text-2xl font-semibold text-primary">Contact</h2>
                <div className="space-y-3">
                  <p className="text-lg font-bold">Site</p>
                  <a href="https://onbrd.kr" target="_blank" rel="noreferrer">
                    https://onbrd.kr
                  </a>
                  <p className="text-lg font-bold">Github</p>
                  <a
                    href="https://github.com/mini-1018"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/mini-1018
                  </a>
                  <p className="text-lg font-bold">Email</p>
                  <a
                    href="mailto:anjaemin1018@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    anjaemin1018@gmail.com
                  </a>
                </div>
              </div>
              <div className="shadow-sm py-5 px-10 rounded-lg shadow-primary w-[60%]">
                <h2 className="text-2xl font-semibold text-primary">
                  Description
                </h2>
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>
                    OnBoard는 개발자들이 코딩 과정에서 겪은 문제나 고민을
                    공유하고, 해결되지 않은 질문을 자유롭게 나눌 수 있는
                    커뮤니티입니다.
                  </p>
                  <br />
                  사이트 이름인 OnBoard는 게시판(Board)과 '승선'(On Board)의
                  중의적 의미를 담고 있으며, 돛의 모양은 태그를
                  형상화하였습니다. 많은 개발자들과 함께 코딩항해를 하고자 하는
                  마음을 담아 기획하였습니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] p-12 bg-white rounded-lg shadow-primary space-y-4">
          <h2 className="text-3xl font-bold text-primary border-b border-primary pb-2">
            Contents
          </h2>

          <ul className="space-y-5 text-gray-700 text-2xl pl-4">
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              1. 소개
            </li>
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              2. 기술스택
            </li>
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              3. 프로젝트 구성
            </li>
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              4. 적용 기능
            </li>
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              5. 성능 최적화
            </li>
            <li
              className={`${
                animate ? "animate-slideUpAndFade" : ""
              } transition-opacity duration-500`}
            >
              6. 회고
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

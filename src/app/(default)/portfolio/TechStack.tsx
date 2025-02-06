export default function TechStack() {
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-primary">사용 기술</h2>

      <div className="flex justify-between gap-6 w-full">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Frontend</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next.js"
              />
              <p className="text-sm text-gray-600">SSR을 사용하여 최적화</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <p className="text-sm text-gray-600">타입 안정성 확보</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
              />
              <p className="text-sm text-gray-600">빠른 스타일링</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
                alt="React Query"
              />
              <p className="text-sm text-gray-600">데이터 페칭 최적화</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"
                alt="zustand"
              />
              <p className="text-sm text-gray-600">효율적인 상태 관리</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white"
                alt="Zod"
              />
              <p className="text-sm text-gray-600">타입 스키마 검증</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"
                alt="React Hook Form"
              />
              <p className="text-sm text-gray-600">폼 상태 관리 효율화</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Backend</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
                alt="NestJS"
              />
              <p className="text-sm text-gray-600">의존성 주입 및 모듈화</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="NodeJS"
              />
              <p className="text-sm text-gray-600">서버 런타임</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
                alt="Prisma"
              />
              <p className="text-sm text-gray-600">타입 안전한 ORM</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
                alt="Nginx"
              />
              <p className="text-sm text-gray-600">리버스 프록시</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/PM2-black?style=for-the-badge&logo=PM2&logoColor=white"
                alt="PM2"
              />
              <p className="text-sm text-gray-600">프로세스 관리</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Database</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="Postgres"
              />
              <p className="text-sm text-gray-600">관계형 데이터베이스</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Others</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
                alt="AWS"
              />
              <p className="text-sm text-gray-600">클라우드 인프라</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/EC2-red?style=for-the-badge&logo=PM2&logoColor=white"
                alt="EC2"
              />
              <p className="text-sm text-gray-600">서버 호스팅</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white"
                alt="Amazon S3"
              />
              <p className="text-sm text-gray-600">파일 스토리지</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <p className="text-sm text-gray-600">버전 관리</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

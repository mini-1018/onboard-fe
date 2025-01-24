export const stripMarkdown = (markdown: string) => {
  // 이미지 문법 제거
  const noImages = markdown.replace(/!\[.*?\]\(.*?\)/g, "");
  // 링크 문법 제거
  const noLinks = noImages.replace(/\[.*?\]\(.*?\)/g, "$1");
  // 기타 마크다운 문법 제거
  const noMarkdown = noLinks
    .replace(/[#*`~_]/g, "") // #, *, `, ~, _ 제거
    .replace(/\n/g, " ") // 줄바꿈을 공백으로 변환
    .trim(); // 앞뒤 공백 제거

  return noMarkdown;
};

export const extractFirstImage = (markdown: string): string => {
  // 마크다운 이미지 문법 매칭 ![alt](url)
  const imageMatch = markdown.match(/!\[\]\((.*?)\)/);

  // 매칭된 이미지가 있으면 URL 반환, 없으면 기본 이미지 URL 반환
  return imageMatch
    ? imageMatch[1]
    : "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";
};

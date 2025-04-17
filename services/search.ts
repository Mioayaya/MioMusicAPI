export const bilibiliSearch = async () => {
  const data = await fetch("https://bilibili.com");
  return data;
}
export const serverTips = (
  { port, hostname }: { port: number; hostname: string },
): void => {
  console.log(`Oak server running at http://${hostname}:${port}`);
};

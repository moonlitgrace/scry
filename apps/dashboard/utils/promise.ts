export async function waitFor(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

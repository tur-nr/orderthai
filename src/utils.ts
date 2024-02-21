function* chunkGen<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export function arrayChunk<T>(arr: T[], n: number): T[][] {
  return Array.from(chunkGen(arr, n));
}

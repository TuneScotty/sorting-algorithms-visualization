export type AlgorithmStep =
  | { type: "compare"; indices: [number, number]; swapped: boolean };

export type AlgorithmGenerator = Generator<AlgorithmStep, void, unknown>;

export type AlgorithmDefinition = {
  name: string;
  function: (array: number[]) => AlgorithmGenerator;
};
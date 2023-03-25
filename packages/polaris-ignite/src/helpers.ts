export type Constructor<T> = new (...args: any[]) => T;

export type AnyFunction = (...args: any) => any;

export type UnionToIntersection<Union> = (Union extends any ? (argument: Union) => void : never) extends (
  argument: infer Intersection,
) => void
  ? Intersection
  : never;

export type Return<T> = T extends AnyFunction
  ? ReturnType<T>
  : T extends AnyFunction[]
  ? UnionToIntersection<ReturnType<T[number]>>
  : never;

export const MissingWalletError = new Error("wallet is required");

export const getStructure = (template) => {
  const structure = { fields: [] as unknown[] };
  for (const [key, value] of Object.entries(template)) {
    const field: any = {};
    field.name = key;
    field.type = typeof value;
    structure.fields.push(field);
  }
  return structure;
};

export type isOnlyT<T, U = T> = T extends any ? ([U] extends [T] ? T : never) : never;

export type SingleEntryRecord<T extends Record<string, any>> = keyof T extends isOnlyT<keyof T>
    ? T
    : never;

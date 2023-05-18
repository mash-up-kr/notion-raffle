import { SingleEntryRecord } from './util';

export type ExposeOption<T extends Record<string, any>> = T extends SingleEntryRecord<T>
    ? T[keyof T]
    : never;
export type FSort = { sort: 'asc' | 'dsc' };
export type FLimit = { limit: number };

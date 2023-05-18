import { Types } from 'mongoose';

export type Queried<T> = T & { _id: Types.ObjectId };

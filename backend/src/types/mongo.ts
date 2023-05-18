import { Document, Types } from 'mongoose';

export type Queried<T> = T & Pick<Document, '_id'>;

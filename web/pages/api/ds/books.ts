import type { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '../../../../lib/data_types/books';

export const books_dataset = require('/../data_sets/books/books_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Book[]>) {
    res.status(200).json(books_dataset)
}

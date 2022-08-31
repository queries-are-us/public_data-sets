
import type { NextApiRequest, NextApiResponse } from 'next'
import { Book } from '../../../../../lib/data_types/books';
import { books_dataset } from '../books'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Book>
) {
    const { id } = req.query
    const dto = books_dataset.find((i: Book) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

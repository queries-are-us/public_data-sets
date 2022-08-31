
import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog } from '../../../../../lib/data_types/blogs';
import { blogs_dataset } from '../blogs'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Blog>
) {
    const { id } = req.query
    const dto = blogs_dataset.find((i: Blog) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

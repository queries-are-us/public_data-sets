import type { NextApiRequest, NextApiResponse } from 'next';
import { Blog } from '../../../../lib/data_types/blogs';

export const blogs_dataset = require('/../data_sets/blogs/blogs_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Blog[]>) {
    res.status(200).json(blogs_dataset)
}

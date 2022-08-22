
import type { NextApiRequest, NextApiResponse } from 'next'
import { Conference } from '../../../../../lib/data_types/conferences';
import { conferences_dataset } from '../conferences'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Conference>
) {
    const { id } = req.query
    const dto = conferences_dataset.find((i: Conference) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

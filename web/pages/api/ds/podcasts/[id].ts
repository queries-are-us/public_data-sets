
import type { NextApiRequest, NextApiResponse } from 'next'
import { Podcast } from '../../../../../lib/data_types/podcasts';
import { podcasts_dataset } from '../podcasts'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Podcast>
) {
    const { id } = req.query
    const dto = podcasts_dataset.find((i: Podcast) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

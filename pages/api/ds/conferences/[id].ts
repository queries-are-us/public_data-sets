
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConferenceData, conferences_dataset } from '../conferences'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ConferenceData>
) {
    const { id } = req.query
    const dto = conferences_dataset.find((i: ConferenceData) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

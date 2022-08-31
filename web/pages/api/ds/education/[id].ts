
import type { NextApiRequest, NextApiResponse } from 'next'
import { LearningPlatform } from '../../../../../lib/data_types/education';
import { education_dataset } from '../education'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LearningPlatform>
) {
    const { id } = req.query
    const dto = education_dataset.find((i: LearningPlatform) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

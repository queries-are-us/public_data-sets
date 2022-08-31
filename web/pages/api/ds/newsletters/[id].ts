
import type { NextApiRequest, NextApiResponse } from 'next'
import { Newsletter } from '../../../../../lib/data_types/newsletters';
import { newsletters_dataset } from '../newsletters'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Newsletter>
) {
    const { id } = req.query
    const dto = newsletters_dataset.find((i: Newsletter) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

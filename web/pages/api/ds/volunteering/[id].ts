
import type { NextApiRequest, NextApiResponse } from 'next'
import { VolunteeringData, volunteering_dataset } from '../volunteering'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<VolunteeringData>
) {
    const { id } = req.query
    const dto = volunteering_dataset.find((i: VolunteeringData) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

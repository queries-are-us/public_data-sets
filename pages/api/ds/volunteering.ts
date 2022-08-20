import type { NextApiRequest, NextApiResponse } from 'next';

export type VolunteeringData = {
    id: string
    tags: string
    title: string
    location: string
    website: string
    description: string
}

export const volunteering_dataset = require('/data_sets/volunteering/volunteering_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<VolunteeringData[]>) {
    res.status(200).json(volunteering_dataset)
}

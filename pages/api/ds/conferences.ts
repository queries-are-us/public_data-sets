import type { NextApiRequest, NextApiResponse } from 'next';

export type ConferenceData = {
    id: string
    tags: string
    title: string
    next_events: string
    location: string
    website: string
    description: string
}

export const conferences_dataset = require('../../../ds/conferences/conferences_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ConferenceData[]>) {
    res.status(200).json(conferences_dataset)
}

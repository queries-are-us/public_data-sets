import type { NextApiRequest, NextApiResponse } from 'next';
import { ConferenceData } from 'lib/data_types/conferences';

export const conferences_dataset = require('data_sets/conferences/conferences_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ConferenceData[]>) {
    res.status(200).json(conferences_dataset)
}

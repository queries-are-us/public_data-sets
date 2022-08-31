import type { NextApiRequest, NextApiResponse } from 'next';
import { Podcast } from '../../../../lib/data_types/podcasts';

export const podcasts_dataset = require('/../data_sets/podcasts/podcasts_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Podcast[]>) {
    res.status(200).json(podcasts_dataset)
}

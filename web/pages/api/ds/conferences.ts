import type { NextApiRequest, NextApiResponse } from 'next';
import { Conference } from '../../../../lib/data_types/conferences';

export const conferences_dataset = require('/../data_sets/conferences/conferences_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Conference[]>) {
    res.status(200).json(conferences_dataset)
}

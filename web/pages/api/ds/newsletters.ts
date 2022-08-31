import type { NextApiRequest, NextApiResponse } from 'next';
import { Newsletter } from '../../../../lib/data_types/newsletters';

export const newsletters_dataset = require('/../data_sets/newsletters/newsletters_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Newsletter[]>) {
    res.status(200).json(newsletters_dataset)
}

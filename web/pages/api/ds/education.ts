import type { NextApiRequest, NextApiResponse } from 'next';
import { LearningPlatform } from '../../../../lib/data_types/education';

export const education_dataset = require('/../data_sets/education/education_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<LearningPlatform[]>) {
    res.status(200).json(education_dataset)
}

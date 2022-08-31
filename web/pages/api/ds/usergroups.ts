import type { NextApiRequest, NextApiResponse } from 'next';
import { UserGroup } from '../../../../lib/data_types/usergroups';

export const usergroups_dataset = require('/../data_sets/usergroups/usergroups_dataset.json');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserGroup[]>) {
    res.status(200).json(usergroups_dataset)
}

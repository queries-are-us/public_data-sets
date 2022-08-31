
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserGroup } from '../../../../../lib/data_types/usergroups';
import { usergroups_dataset } from '../usergroups'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserGroup>
) {
    const { id } = req.query
    const dto = usergroups_dataset.find((i: UserGroup) => i.id === id);
    if (!dto) {
        return res.status(404);
    }
    res.status(200).json(dto);
}

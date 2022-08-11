
export default function handler(req, res) {
    const jsonData = require('../../../ds/conferences/conferences_dataset.json');
    res.status(200).json(jsonData)
}

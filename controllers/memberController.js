import { addMember } from '../models/memberModel.js';

export const createMember = (req, res) => {
  addMember(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Member added successfully" });
  });
};

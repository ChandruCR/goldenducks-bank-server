import express from 'express';
import accounts from "../data/statements.json";

const router = express.Router();
router.post("/", (req, res) => {
    const { credentials } = req.body;
    if (credentials.accountNumber) {
        let account = accounts.filter(account => (account.accountNumber === credentials.accountNumber.replace(/ /g, "")));
        if (account.length === 1) {
            if (account[0].password == credentials.password) {
                res.json({ user: { accountDetails: account[0] } });
            } else {
                res.status(400).json({ errors: { global: "Account Number and Password did not match" } });    
            }
        }else{
            res.status(400).json({ errors: { global: "Invalid Account Number" } });    
        }
    } else {
        res.status(400).json({ errors: { global: "Account Number Empty" } });
    }
});

export default router;

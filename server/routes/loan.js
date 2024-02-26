const express = require("express");
const router = express.Router();
const loanController = require("../controller/loan");

router.get("/getAllLoans", loanController.getAllLoans);
router.post("/createLoan/:userId", loanController.createLoan);
router.get("/getUserLoans/:userId", loanController.getUserLoans);
router.get("/getLoanDetails/:loanId", loanController.getLoanDetails);
router.post("/processRepayment/:loanId", loanController.processRepayment);

module.exports = router;
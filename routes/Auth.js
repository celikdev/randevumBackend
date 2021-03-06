import express from "express";
import dotenv from "dotenv";

dotenv.config();

//TODO:Router URL'leri Düzenlenecek

import {
  checkSMScode,
  checkVerifyCode,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendVerificationEmail,
  sendVerificationSMS,
  googleAuth,
} from "../controllers/Auth.js";
import { checkUserAuth } from "../middleware/Middleware.js";

const router = express.Router();

router.post("/login", loginWithEmailAndPassword);
router.post("/register", registerWithEmailAndPassword);

router.post("/google-auth", googleAuth);

router.post("/verification-email", sendVerificationEmail);
router.post("/verify-email-code", checkVerifyCode);
router.post("/verify-phone-number", sendVerificationSMS);
router.post("/check-sms-code", checkSMScode);

export default router;

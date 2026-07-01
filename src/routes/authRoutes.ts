// export default router;

import { Router } from "express";
import { container } from "../config/ioc.config";
import { TYPES } from "../config/ioc.types";
import { AccountController } from "../controllers/auth.controller";
import asyncHandler from "../middleware/asyncHandler.middleware";
import { authenticateToken } from "../middleware/authentication.middleware";
import { validate } from "../middleware/validate";
import { forgotPasswordSchema, loginSchema, resetPasswordSchema, signupSchema, verifyOtpSchema } from "../schemas/userSchema";
import { authLimiter } from "../middleware/rateLimiter.middleware";

const accountRouter = Router();

const accountController = container.get<AccountController>(
  TYPES.AccountController
);

/**
 * @swagger
 * tags:
 *   - name: Account
 *     description: Authentication
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Account]
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: admin@test.com
 *               password:
 *                 type: string
 *                 example: "Admin123!@#"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Validation error 
 *       401:
 *         description: Invalid email or password
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/login", authLimiter, validate(loginSchema), asyncHandler(accountController.login));

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create User
 *     tags: [Account]
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: "Admin123!@#"
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               isRegisteredByShop:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Invalid email or password
 *       409:
 *         description: Email already exists
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/signup", authLimiter, validate(signupSchema), asyncHandler(accountController.signup));


/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout the current user
 *     tags: [Account]
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
accountRouter.post("/logout", authenticateToken, asyncHandler(accountController.logout));

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh JWT Token
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 example: "refresh-token-value"
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
accountRouter.post("/refresh-token", authenticateToken, asyncHandler(accountController.refreshToken));


/**
 * @swagger
 * /auth/otp/send:
 *   post:
 *     summary: Send OTP to authenticated user
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       401:
 *         description: Unauthorized
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/otp/send", authLimiter, authenticateToken, asyncHandler(accountController.sentOtp));

/**
 * @swagger
 * /auth/verify-otp:
 *   post:
 *     summary: Verify OTP
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - otp
 *             properties:
 *               otp:
 *                 type: string
 *                 example: "7452"
 *                 description: OTP received on email
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP or expired OTP
 *       401:
 *         description: Unauthorized
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/verify-otp", authLimiter, authenticateToken, validate(verifyOtpSchema), asyncHandler(accountController.otpVerify));


/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request OTP for password reset
 *     tags: [Account] 
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Validation error
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/forgot-password", authLimiter, validate(forgotPasswordSchema), asyncHandler(accountController.forgotPassword));


/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset password using OTP
 *     tags: [Account]
 *     parameters:
 *       - in: header
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: Enter Client Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *               - newPassword
 *               - confirmPassword
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *                 description: Enter user email to receive OTP
 *               otp:
 *                 type: string
 *                 example: "7452"
 *                 description: OTP received on email
 *               newPassword:
 *                 type: string
 *                 example: "NewStrong@123"
 *               confirmPassword:
 *                 type: string
 *                 example: "NewStrong@123"
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Invalid OTP, expired OTP, or password mismatch
 *       404:
 *         description: User not found
 *       429:
 *         description: Too many requests
 *       500:
 *         description: Server error
 */
accountRouter.post("/reset-password", authLimiter, validate(resetPasswordSchema), asyncHandler(accountController.resetPassword));



export default accountRouter;

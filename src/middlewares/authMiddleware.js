import JWT from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js'
import AppError from '../utils/AppError.js'


const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return next(new AppError('You are not authorized to access this resource', 401));
    }
   JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        return next(new AppError('Invalid token', 401));
        }
    req.user = decoded;
    next();
    });
}); 
 
export default authMiddleware;

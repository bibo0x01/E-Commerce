import JWT from 'jsonwebtoken'
  
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  }
    return JWT.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN ,
    }); 
}

export default generateToken ; 

import jwt from 'jsonwebtoken'

export function generateToken(data){
   console.log(data,"fcgfxfxfgxxfxfgxfgxfgxf") 
   try{
     const token=jwt.sign({
        data
      },process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    
      return token

   }catch(error){
     console.log(error) 

   }
}

export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

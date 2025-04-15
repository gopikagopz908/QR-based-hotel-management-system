import jwt from 'jsonwebtoken'
export function generateToken(data){
   try{
     const token=jwt.sign({
        data
      },process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

      return token

   }catch(error){
     console.log(error)

   }
}
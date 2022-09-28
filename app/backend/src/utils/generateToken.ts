import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const generateToken = (email: string) => {
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
  return token;
};

export default generateToken;

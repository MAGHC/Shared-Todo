import dotenv from 'dotenv';

dotenv.config();

const required = (key: string, defaultValue: string | undefined = undefined) => {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`key ${key} 설정 안됨`);
  }
  return value;
};

export const config = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    expireDay: required('JWT_EXPIRES_DAY', '1d'),
  },

  bcrypt: {
    saltyValue: parseInt(required('BCRYPT_SALTY_VALUE', '12')),
  },
  host: {
    port: parseInt(required('HOST_PORT', '8080')),
  },
};

import * as bcryptjs from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const saltOrRounds = 10;
  const hash = await bcryptjs.hash(password, saltOrRounds);
  return hash;
};

export const isHashPass = async (password: string, hashPassword: string) => {
  return await bcryptjs.compareSync(password, hashPassword);
};

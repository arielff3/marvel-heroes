import md5 from 'js-md5';

export const apiKey = (): { ts: number; apikey: string; hash: string } => {
  const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
  const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  return { apikey: PUBLIC_KEY, ts: timestamp, hash: hash.hex() };
};
export default apiKey;

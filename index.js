import { config } from 'dotenv';

// 원하는 프로파일에 맞는 .env 파일 경로를 지정합니다.
const profile = process.env.PROFILE || 'local'; // 기본값은 'local'
config({ path: `.env.${profile}` });

console.log(`Loaded environment profile: ${profile}`);
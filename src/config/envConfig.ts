const envConfig = {
  auth_google_id: process.env.AUTH_GOOGLE_ID,
  auth_google_secret: process.env.AUTH_GOOGLE_SECRET,
  auth_secret: process.env.AUTH_SECRET,
  baseDevelopmentApi: process.env.NEXT_PUBLIC_BASE_API_DEVELOPMENT,
  baseProductionApi: process.env.NEXT_PUBLIC_BASE_API_PRODUCTION,
};

export default envConfig;

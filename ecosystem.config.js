// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'andsomore',
      script: 'node_modules/.bin/next',
      args: 'npm run serve',
      cwd: '/home/asm',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_URL: 'https://andsomore.com',
        NEXTAUTH_URL: 'https://andsomore.com',
        // NEXTAUTH_SECRET: 'sdf',
        // MONGO_URI: 'mongodb://localhost:27017/chai',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3001',
        'https://aesop-webapp-3uh9jtdl3-eman-fatimas-projects-07a3e151.vercel.app/', // Replace with your actual Vercel URL
        'https://*.vercel.app', // This allows all Vercel subdomains
        // Add your custom domain if you have one
        // 'https://yourdomain.com'
      ]
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
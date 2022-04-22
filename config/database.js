module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '178.18.201.98'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'incirio_haydikart'),
      user: env('DATABASE_USERNAME', 'incirio_haydikart'),
      password: env('DATABASE_PASSWORD', '?!}B1W_,{iXn'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

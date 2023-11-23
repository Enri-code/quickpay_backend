import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions & any = {
  type: 'postgres',
  synchronize: false,
  autoLoadEntities: true,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  cli: { migrationsDir: 'src/db/migrations' },
};

export default new DataSource(dataSourceOptions);

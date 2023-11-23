import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions & any = {
  type: 'postgres',
  synchronize: false,
  migrationsRun: true,
  autoLoadEntities: true,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['dist/db/migrations/*.{ts,js}'],
  entities: ['dist/**/*.entity.{js,ts}'],
};

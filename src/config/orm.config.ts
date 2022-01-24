import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: '123',
    port: 5432,
    host: '127.0.0.1',
    database: 'test1',
    synchronize: true,
    autoLoadEntities: true
}
export default config;
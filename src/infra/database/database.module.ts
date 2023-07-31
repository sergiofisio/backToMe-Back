import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from './prisma/repositories/prisma-user-database.module';
import { LostAnimalsDatabaseModule } from './prisma/repositories/prisma-lost-animal-database.module';
import { AdoptionAnimalsDatabaseModule } from './prisma/repositories/prisma-adoption-animal-database.module';
import { FoundAnimalsDatabaseModule } from './prisma/repositories/prisma-found-animals-database.module';
import { OngsDatabaseModule } from './prisma/repositories/prisma-ong-database.module';
import { ReportsDatabaseModule } from './prisma/repositories/prisma-report-database.module';
import { MessagesDatabaseModule } from './prisma/repositories/prisma-message-database.module';

@Module({
  imports: [
    UsersDatabaseModule,
    LostAnimalsDatabaseModule,
    AdoptionAnimalsDatabaseModule,
    FoundAnimalsDatabaseModule,
    OngsDatabaseModule,
    ReportsDatabaseModule,
    MessagesDatabaseModule
  ],
})
export class DatabaseModule {}

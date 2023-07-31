import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FileService } from '@infra/http/services/files/files.service';

@Module({
  controllers: [FilesController],
  providers: [FileService],
})
export class FilesModule {}

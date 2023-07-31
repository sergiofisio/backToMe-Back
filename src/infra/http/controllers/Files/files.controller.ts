import { FileService } from '@infra/http/services/files/files.service';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FilesController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/pdf',
    ];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return 'Tipo de arquivo não suportado. Por favor, envie apenas imagens ou documentos.';
    }

    return await this.fileService.uploadFile(file);
  }
}

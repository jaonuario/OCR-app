import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('ocr')
export class OcrController {
    
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    processImage(@UploadedFile() image: Express.Multer.File) {
        return;
    }
}

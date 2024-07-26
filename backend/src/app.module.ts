import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';
import { OcrService } from './ocr/ocr.service';
import { OcrController } from './ocr/ocr.controller';
import { OcrModule } from './ocr/ocr.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, InvoiceModule, OcrModule, AuthModule],
  controllers: [AppController, OcrController],
  providers: [AppService, OcrService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';

@Injectable()
export class OcrService {
    processImage(image) {
        return "This process extracts information from text contained in invoice images."
    }
}

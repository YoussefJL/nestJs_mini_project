import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { CV } from './entities/cv.entity';

@Injectable()
export class CvService {

  constructor(@InjectRepository(CV) private cvRepository: Repository<CV>){}
  
  async create(createCvDto: CreateCvDto) {
    const cv = await this.cvRepository.save(createCvDto);
    return cv;
  }

  async findAll() {
    return await this.cvRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}

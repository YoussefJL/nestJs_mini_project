import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {

  constructor(@InjectRepository(Skill) private skillRepository: Repository<Skill>){}

  async create(createSkillDto: CreateSkillDto) {
    const skill = await this.skillRepository.save(createSkillDto);
    return skill;
  }

  async findAll() {
    return await this.skillRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}

import { Controller,Get,Put,Post,Delete,Patch } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getPremier(){
      return 'Get';
  }

  @Post()
  postPremier(){
    return 'Post';

  }
  @Put()
  putPremier(){
    return 'Put';
  }
  @Delete()
  deletePremier(){
    return 'Delete';

  }
  @Patch()
  patchPremier(){
    return 'Patch';

  }
}

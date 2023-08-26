import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultasService } from './consultas.service';


@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}
  @Get('top-fidelizacion')
  async getTopFidelizacionInsignias() {
    const topInsignias = await this.consultasService.getTopFidelizacionInsignias();
    return topInsignias;
  }
  @Get('top-usabilidad')
  async getTopUsabilidadInsignias(): Promise<any[]> {
    return this.consultasService.getTopUsabilidadInsignias();
  }
}

import { RegistroActividad } from 'src/registro-actividad/entities/registro-actividad.entity';
import { RegistroBeneficio } from 'src/registro-beneficio/entities/registro-beneficio.entity';
import { RegistroInsignia } from 'src/registro-insignia/entities/registro-insignia.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  correo: string;

  @OneToMany(() => RegistroActividad, registro => registro.usuario)
  registroActividad: RegistroActividad[];

  @OneToMany(() => RegistroInsignia, regInsignia => regInsignia.insignia)
  insignias: RegistroInsignia[];

  @OneToMany(() => RegistroBeneficio, regBeneficio => regBeneficio.beneficio)
  cupones: RegistroBeneficio[];
}

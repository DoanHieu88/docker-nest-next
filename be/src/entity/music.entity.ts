import { AbstractEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('music')
export class Music extends AbstractEntity {
  @Column({ nullable: false })
  name: string;
}

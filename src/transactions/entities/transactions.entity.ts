import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

//Os campos da tabela de transactions serão: id, account_id, amount, created_at, updated_at.

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ name: 'account', type: 'string' })
  @Column()
  // @Column('varchar', { length: 200 })
  account_id: string;

  // @Column({ name: 'amount', type: 'float' })
  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

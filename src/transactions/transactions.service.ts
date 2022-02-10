import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { UpdateResult, DeleteResult } from 'typeorm';
import { Transactions } from './entities/transactions.entity';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { UpdateTransactionsDto } from './dto/update-transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private readonly transactionsRepository: Repository<Transactions>,
  ) {}

  async create({ account_id, amount }: CreateTransactionsDto) {
    const transaction = this.transactionsRepository.create();
    transaction.account_id = account_id;
    transaction.amount = amount;
    await this.transactionsRepository.save(transaction);
    console.log(transaction);
    return transaction;
  }

  async findAll() {
    return await this.transactionsRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} transactions`;
  // }

  // async update(transactions: Transactions) {
  //   return await this.transactionsRepository.update(transactions.id, transactions);
  // }

  // async delete(id) {
  //   return await this.transactionsRepository.delete(id);
  // }
}

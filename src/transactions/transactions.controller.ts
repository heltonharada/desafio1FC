import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
// import { UpdateTransactionsDto } from './dto/update-transactions.dto';
import { Transactions } from './entities/transactions.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionsDto: CreateTransactionsDto) {
    console.log(createTransactionsDto);
    return this.transactionsService.create(createTransactionsDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.transactionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTransactionsDto: UpdateTransactionsDto) {
  //   return this.transactionsService.update(+id, updateTransactionsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transactionsService.remove(+id);
  // }
}

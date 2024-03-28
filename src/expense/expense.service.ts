import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
// import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseReporitory: Repository<Expense>,
  ) {}
  create(createExpenseDto: CreateExpenseDto) {
    let expense: Expense = new Expense();
    expense.title = createExpenseDto.title;
    expense.amount = createExpenseDto.amount;
    expense.dateAdded = createExpenseDto.dateAdded;
    return this.expenseReporitory.save(expense);
  }

  findAll() {
    return this.expenseReporitory.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} expense`;
  // }

  // update(id: number, updateExpenseDto: UpdateExpenseDto) {
  //   return `This action updates a #${id} expense`;
  // }

  remove(id: number) {
    return this.expenseReporitory.delete(id);
  }
}

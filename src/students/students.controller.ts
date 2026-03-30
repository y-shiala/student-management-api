import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from 'src/dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const student = this.studentsService.findOne(+id);
    if (!student) {
    throw new NotFoundException(`Student with id ${id} not found`);
  }
    return student;
  }

  @Post()
  create(@Body() body: CreateStudentDto) {
    return this.studentsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateStudentDto) {
    return this.studentsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
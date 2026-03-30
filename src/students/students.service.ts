import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  private students = [
    { id: 1, name: 'Alice Wanjiru', email: 'alice@example.com', course: 'Computer Science' },
    { id: 2, name: 'Bob Kamau', email: 'bob@example.com', course: 'Software Engineering' },
  ];
  private nextId = 3;

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find(student => student.id === id);
  }

  create(data: any) {
    const student = { id: this.nextId++, ...data };
    this.students.push(student);
    return student;
  }

  update(id: number, data: any) {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return null;
    this.students[index] = { ...this.students[index], ...data };
    return this.students[index];
  }

  remove(id: number) {
    const index = this.students.findIndex(student => student.id === id);
    if (index === -1) return null;
    const deleted = this.students.splice(index, 1);
    return deleted[0];
  }
}
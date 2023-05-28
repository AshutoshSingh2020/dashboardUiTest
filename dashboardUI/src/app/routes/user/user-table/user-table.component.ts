import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  interestRate: string;
  investAmount: number;
}

const investAmt: number[] = [
  2000.00,
  3000.00,
  4000.00,
  5000.00,
  6000.00,
  7000.00,
  8000.00,
  9000.00,
  10000.00,
  11000.00,
  12000.00,
  13000.00,
  14000.00,
  15000.00,
  16000.00
];
const userName: string[] = [
  'Ragnar',
  'Lagartha',
  'Bjorn Lothbrok',
  'Rollo',
  'Floki',
  'Ivar',
  'Aslaug',
  'Athelstan',
  'Torvi',
  'Ubbe',
  'Michael Hirst',
  'Hvitserk',
  'Siggy Haraldson',
  'Gunnhild',
  'Judith',
  'Othere',
  'Kalf',
  'Ecbert',
  'Elizabeth',
];
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  userTableForm = this.fb.group({

  })

  hide = true
  displayedColumns: string[] = ['tranactionCode', 'Name', 'investAmount', 'interestRate', 'Option'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder,) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  reset() {
    this.userTableForm.reset()
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(length: number, chars: string | any[]): UserData {
  const name =
    userName[Math.round(Math.random() * (userName.length - 1))] +
    ' ' +
    userName[Math.round(Math.random() * (userName.length - 1))].charAt(0) +
    '.';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

  return {
    id: result,
    name: name,
    interestRate: Math.round(Math.random() * 100).toString(),
    investAmount: investAmt[Math.round(Math.random() * (investAmt.length - 1))],
  };
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','status'];
  url: 'http://localhost:3000/api/contacts';
  data:any;
  constructor(private http: HttpClient) {
    
    this.http.get(this.url).subscribe((res : any) => {
      this.data = res;
    });
  }

  ngOnInit() {
    this.dataSource = new MyTableDataSource(this.paginator, this.sort);
  }
}

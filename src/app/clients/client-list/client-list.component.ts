import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../../shared/client.service';
import { NotificationService } from 'src/app/shared/notification.service';

export interface PeriodicElement {
  cinNo: string;
  clientName: string;
  coContactno: string;
  coemail: string;
  itContactno: string;
  itemail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cinNo: '1', clientName: 'Hydrogen', coContactno: '1.0079',coemail:'ajsn@gmail.com', itContactno: '231',itemail: 'anhsa@gmail.com'},
  {cinNo: '2', clientName: 'Helium', coContactno: '4.0026', coemail:'bas@gmail.com', itContactno: '56',itemail: 'nahn@gmail.com'},
  
];

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private service: ClientService,
    private notificationService: NotificationService) { }

    listData = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['cinNo','clientName','coContactno','coemail','itContactno','itemail','actions'];
  @ViewChild(MatSort) sort!: MatSort ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;
  ngOnInit(): void {
    this.listData;
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ClientComponent,dialogConfig);
  }

  onEdit(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ClientComponent,dialogConfig);
  }

  onDelete(){
    if(confirm('Are you sure to delete the record?'))
    {
      //code to delete data field
      this.notificationService.warn('! Deleted Successfully');
    }
  }
}

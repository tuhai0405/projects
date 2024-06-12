import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INhanVien } from '../inhan-vien';
import { IDuAn } from '../idu-an';
import { DulieuService } from '../dulieu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-duan-them',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './duan-them.component.html',
  styleUrl: './duan-them.component.css'
})
export class DuanThemComponent implements OnInit {

  listNhanVien:INhanVien[] =[];

  constructor(private d:DulieuService) { }

  ngOnInit():void {
    this.d.layNhanVien().subscribe((datanv) => {
     
      this.listNhanVien = datanv as INhanVien[];
    }) ;
  }//ngOnInit
  
  xuly(da:IDuAn) {
    this.d.themDuAn(da).subscribe ( data => {
      console.log(da, data);
      alert('Thêm Thành Công!');
      //Chuyển đến danh sách dự án
    });
  }
}

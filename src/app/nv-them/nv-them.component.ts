import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';

@Component({
  selector: 'app-nv-them',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nv-them.component.html',
  styleUrl: './nv-them.component.css'
})
export class NvThemComponent {
  constructor(private d:DulieuService) { }
  xuly(nv:INhanVien) {
    this.d.themNhanVien(nv).subscribe ( data => {
      console.log(nv, data);
      alert('Thêm Thành Công!');
      //Chuyển đến danh sách nhân viên
    });
  }

}

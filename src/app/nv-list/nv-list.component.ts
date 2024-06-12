import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INhanVien } from '../inhan-vien';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [ CommonModule, RouterLink],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  list_nhan_vien:INhanVien[] = []
  ngOnInit():void {
    this.load();
  }

  load():void{
    fetch(`http://localhost:3000/nhan_vien`)
    .then (res => res.json())
    .then (data =>{
      this.list_nhan_vien = data;
    })
  }
}

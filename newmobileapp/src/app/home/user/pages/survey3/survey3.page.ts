import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey3',
  templateUrl: './survey3.page.html',
  styleUrls: ['./survey3.page.scss'],
})
export class Survey3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(): void{
    this.router.navigate(['user']);
  }
}

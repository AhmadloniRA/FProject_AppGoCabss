import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-dasboard-home',
  templateUrl: './dasboard-home.page.html',
  styleUrls: ['./dasboard-home.page.scss'],
})
export class DasboardHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLokasi() {
    this.router.navigate(['/tracking-lokasi']);
  }
}

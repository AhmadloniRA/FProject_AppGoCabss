import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login-content']);
  }

  goToDasboard() {
    this.router.navigate(['/dasboard']);
  }

  ionViewDidEnter() {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 150);
}

  handleRefresh(event: any) {
    // Simulasikan proses refresh, misalnya 1 detik
    setTimeout(() => {
      window.location.reload();  // reload halaman
      event.target.complete();   // hentikan indikator loading
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  phoneNumber: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.phoneNumber = ''; // Reset saat awal component dibuka pertama kali
  }

  ionViewWillEnter() {
    this.phoneNumber = ''; // Reset saat halaman kembali aktif
  }

  async goToOtp() {
    const phoneStr = this.phoneNumber?.toString().trim();

    if (!phoneStr) {
      await this.showAlert(
        'Nomor HP Dibutuhkan',
        'Mohon masukkan nomor HP terlebih dahulu.'
      );
      return;
    }

    if (phoneStr.length < 11 || phoneStr.length > 12) {
      await this.showAlert(
        'Nomor HP Tidak Valid',
        'Nomor HP harus terdiri dari 11 atau 12 digit angka.'
      );
      return;
    }

    this.router.navigate(['/otp-input']);
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Oke',
          role: 'cancel',
          cssClass: 'elegant-alert-button',
        },
      ],
      cssClass: 'elegant-alert',
      backdropDismiss: false,
    });
    await alert.present();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      window.location.reload();
      event.target.complete();
    }, 1000);
  }
}
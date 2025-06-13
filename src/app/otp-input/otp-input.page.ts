import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-otp-input',
  templateUrl: './otp-input.page.html',
  styleUrls: ['./otp-input.page.scss'],
})
export class OtpInputPage implements OnInit {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  onInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    // Jika ada angka, pindah ke input berikutnya
    if (value && index < this.otpInputs.length - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    // Jika tombol Backspace ditekan dan input kosong, pindah ke input sebelumnya
    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.otpInputs.toArray()[index - 1].nativeElement.focus();
    }
  }

// Validasi agar hanya angka bisa diketik
  validateNumber(event: KeyboardEvent) {
    const key = event.key;
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault(); // Blokir input selain angka
    }
  }
}
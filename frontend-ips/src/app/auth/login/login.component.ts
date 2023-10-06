import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('signInBtn') signInBtn!: ElementRef;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;
  @ViewChild('signInBtn2') signInBtn2!: ElementRef;
  @ViewChild('signUpBtn2') signUpBtn2!: ElementRef;

  ngAfterViewInit() {
    this.signUpBtn?.nativeElement.addEventListener('click', () => {
      document.querySelector('.container')?.classList.add('sign-up-mode');
    });
    
    this.signInBtn?.nativeElement.addEventListener('click', () => {
      document.querySelector('.container')?.classList.remove('sign-up-mode');
    });
    
    this.signUpBtn2?.nativeElement.addEventListener('click', () => {
      document.querySelector('.container')?.classList.add('sign-up-mode2');
    });
    
    this.signInBtn2?.nativeElement.addEventListener('click', () => {
      document.querySelector('.container')?.classList.remove('sign-up-mode2');
    });
  }
}
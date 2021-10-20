import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css'],
})
export class WelcomeHeaderComponent implements OnInit {
  @Input() welcomeName: string;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-pages',
  templateUrl: './model-pages.component.html',
  styleUrl: './model-pages.component.css'
})
export class ModelPagesComponent {
  @Input() title: string = 'Title';
}

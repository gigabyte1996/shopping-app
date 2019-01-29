import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
@NgModule({
  imports: [CommonModule, BrowserModule]
})
export class RecipesItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

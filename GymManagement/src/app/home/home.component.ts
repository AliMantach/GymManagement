import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MenuModule,MenubarModule,BadgeModule, AvatarModule ,RippleModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder){};
  items = [
    {
      label: 'File',
    
      items: [
        { label: 'New' },
        { label: 'Open' },
       
      ]
    },
    {
      label: 'Edit',
    
      items: [
        { label: 'Undo',  },
        { label: 'Redo' }
      ]
    },
    {
      label: 'Help',
     
      items: [
        { label: 'Contents' },
        { label: 'Search' },
        { label: 'New' },
        { label: 'Open' }
      ]
    }
  ];

}

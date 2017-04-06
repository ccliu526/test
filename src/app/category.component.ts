import {Component, OnInit} from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector:"categorys",
    template: `
    <h1>Categorys</h1>
    <ul>
        <li *ngFor = "let category of categorys">{{ category.Name }}</li>
    </ul>
    `,
    providers:[CategoryService]
})

export class CategoryComponent implements OnInit {
    categorys: Category[]; 

    constructor(private categoryService:CategoryService){
 }

     ngOnInit() {
        this.categoryService.getCategorys()
        .then(response => {
            this.categorys = response;
        });
    }
}
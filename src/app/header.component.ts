import { Component } from '@angular/core';

@Component({
    selector: "my-header",
    template: `<h1>my Header</h1>
    <a routerLink = "/company">Company</a> |
    <a routerLink = "/categorys">Categorys</a> |
    <a routerLink = "/login">login-Model Driven</a> |
    <a routerLink = "/loginT">login-Template Driven</a> |
    <a routerLink = "/swiper">swiper</a> |
    <hr/>`,
})

export class HeaderComponent {

}

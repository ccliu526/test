import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Category } from './category';

@Injectable()
export class CategoryService{

    private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'eyJhbGciOiAiSFMyNTYiLCJ0eXAiOiAiSldUIn0.ew0KICAiVGVuYW50SUQiOiAwLA0KICAiSUQiOiAwLA0KICAiTmFtZSI6ICLlkYLlrbjmt5wiLA0KICAiTG9naW5BY2NvdW50IjogImJhbnlAZGlnaXdpbi5iaXoiLA0KICAiVGVsIjogIiIsDQogICJFTWFpbCI6ICJ5dWNoZW55aUBkaWdpd2luLmJpeiIsDQogICJJc1N1cGVyVXNlciI6IHRydWUsDQogICJNZW1vIjogIjExMTEiLA0KICAiSXNEaXNhYmxlIjogZmFsc2UsDQogICJfRHVlRGF0ZSI6ICIyMDk5LTEyLTMxVDAwOjAwOjAwIiwNCiAgIl9TaG9ydE5hbWUiOiAi55Si5ZOB6YOo6ZaL55m8IiwNCiAgIl9Ib3N0IjogImh0dHA6Ly9sb2NhbGhvc3Q6ODM0OC8iLA0KICAiX0V4cGlyZXMiOiAiMjAxNy0wMy0xNlQyMToyMDo0OC4wNzI4NTcrMDA6MDAiDQp9.w1H7SIxWHC35Tl2As0fahntlu8TvPS2ved7knvm_lZk'});
    private apiUrl = 'http://a8webapi-staging.azurewebsites.net/Categorys';  // URL to web api
   
    constructor(private http: Http) { }

    getCategorys(): Promise<Category[]> {
        return this.http.get(this.apiUrl, { headers: this.headers })
                .toPromise()
                .then(response => response.json() as Category[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

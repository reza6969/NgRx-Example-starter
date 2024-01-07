import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../state/login-page.actions';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {

    constructor(private store: Store) {}
    onSubmit(username: string, password: string) {
        this.store.dispatch(login({ username: username, password: password }));
    }
}
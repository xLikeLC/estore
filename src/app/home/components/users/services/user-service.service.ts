import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {user} from "../../../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) {}

  createUser(user: user): Observable<any> {
    const url : string = 'http://localhost:5001/users/signup';
    return this.httpClient.post(url,user);
  }
}

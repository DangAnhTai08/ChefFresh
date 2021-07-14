import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'tai-chef';
  data: UserModel[] | undefined;

  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>("http://10.1.20.16:9999/api/users")
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.getAllUser().subscribe((next) => {
      if (next)
        this.data = next
    })
  }
}

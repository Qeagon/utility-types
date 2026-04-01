import { Component, OnInit, } from "@angular/core";
import {updateUser, getProductSummary, getPublicPerson, createConfig, createDictionary, setNonRedColor, setWarmColor, setAddress } from './utils/utility-function';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class AppComponent implements OnInit {

  ngOnInit(): void {

    updateUser({ name: "lisa"});
    updateUser({id: 1, email: "lisa@example.com"});

    getProductSummary({ id: 1, name: "Laptop"});

    getPublicPerson({ name: "Jan", age: 30 });

    createConfig({
      apiKey: "abc123",
      baseUrl: "https://api.example.com",
      timeout: 3000
    });

    createDictionary({
      alice: 95,
      bob: 87,
      charlie: 72
    });

    setNonRedColor("green");
    setNonRedColor("blue");

    setWarmColor("red");
    setWarmColor("yellow");

    setAddress("Hoofdstraat 1");
  }
}

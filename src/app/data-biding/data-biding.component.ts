import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Erick";
  public idade: number = 26;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNe_TLyYIQ7OnPHyYRoB-eGvSKS-ByJ2MGMGKHnKLbG1kBLLqB8WpTkmaBP-2dk1XNu8&usqp=CAU";
  public imgTitle: string = "Shin-Chan";

  public position: { x: number, y: number } = { x: 0, y: 0 };
  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}

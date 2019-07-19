import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Category } from './models/catetogy.model';
import { Element } from './models/element.model';

import mockData from '../assets/segments_data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segment';
  filterEnabled = false;
  fullAssigned = false;
  categories: any[];

  constructor(private modalService: NgbModal) {
    this.categories = mockData;
  }
  openHelp(content) {
    this.modalService.open(content);
  }

  public inputChange(catetogy: Category, item: any) {
    catetogy.total = 0;
    catetogy.elements.forEach(element => {
      catetogy.total = catetogy.total + element.elementValue;
    });

    //
    if (item.elementValue < 0 || item.elementValue > 100 || item.elementValue === null) {
      item.error = true;
    } else {
      item.error = false;
    }
  }

  public filter() {

    this.filterEnabled = true;
    this.fullAssigned = true;

    this.categories.forEach(
      x => {
        x.total = 0;
        x.elements.forEach(element => {
          if (element.elementValue !== null) {
            x.total = x.total + element.elementValue;
          }
        });

        if (x.total !== 100 && x.elements.length > 0) {
          this.fullAssigned = false;
        }
      }
    );
  }
}

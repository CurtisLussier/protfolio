import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Item} from '../Data/Item';
import {ItemList} from '../Data/ItemList';

@Component({
  selector: 'app-mainpage',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css'],
})
export class Mainpage implements OnInit{
  private itemList: ItemList;
  public items: Item[]= [];
  public selectedItem?: Item;

  constructor() {
    this.itemList = new ItemList();
    this.items = this.itemList.getItems();
  }

  ngOnInit(): void
  {
    this.selectedItem = this.items[0];
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
  }

  trackById(index: number, item: Item): string | number {
    return item.$Id ?? index;
  }
}

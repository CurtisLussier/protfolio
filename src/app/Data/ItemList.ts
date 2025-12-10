import {Item} from './Item';

export class ItemList extends Item
{
  public $itemlist:Item[]=
    [
      {$Id: 1, $ImagePath: "../public/Weather.png", $ImageName: "Wheather App", $Description: "Search the location and get all of the weather information you need", $dateCreated: "2023", $imageHeight: 335, $imageWidth: 300},
      {$Id: 2, $ImagePath: "../public/Calc.png", $ImageName: "Calculator", $Description: "A simple python calculator with a gui", $dateCreated: "2023", $imageHeight: 335, $imageWidth: 350},
      {$Id: 3, $ImagePath: "../public/Pong.png", $ImageName: "Pong", $Description: "A two player pong game that the player can play using pygame", $dateCreated: "2024", $imageHeight: 335, $imageWidth: 330},
      {$Id: 4, $ImagePath: "../public/Undertale.png", $ImageName: "Undertale", $Description: "Re-Made undertale in javafx", $dateCreated: "2023", $imageHeight: 335, $imageWidth: 260},
    ];
  getItems(): Item[]
  {
    return this.$itemlist;
  }

}

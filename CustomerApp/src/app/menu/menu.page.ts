import { MenuService } from './../services/menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

  selectedTab = "all"

  constructor( private menuService: MenuService) {}

  ngOnInit(){
    this.menuService.getBreakfastMenus().subscribe( res => {
      console.log('breakfast menus: ', res);
    });
    this.menuService.getDessertMenus().subscribe( res => {
      console.log('dessert menus: ', res);
    });
    this.menuService.getsaladMenus().subscribe( res => {
      console.log('salad menus: ', res);
    });
  }

  // segmentChanged(event:any){
  //   console.log(event.target.value)
  // }

}
 
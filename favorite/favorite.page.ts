import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SQLService} from '../services/sqlService/sql.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  posts: any[];

  constructor(private sqlService: SQLService, private navCtrl: NavController) { }

  ngOnInit() {
    this.sqlService.getDbState().subscribe(ready => {
      if (ready) {
          this.getPosts();
      }
  });
  }

  getPosts() {
    console.log('sikayetler cekildi');
    this.sqlService.db.executeSql('SELECT * FROM sikayetler').then((rs: any) => {
        console.log(rs);
        this.sqlService.asArray(rs).then((list) => {
            this.posts = list;
            console.log(this.posts);
        });
    }).catch(err => {
        console.log(err);
    });
}

}

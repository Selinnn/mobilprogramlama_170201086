import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Dev {
  id: number,
  name: string,
  skills: any[],
  img: string
}
@Injectable({
  providedIn: 'root'
})
export class SqlserviceService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  kurumlar = new BehaviorSubject([]);
  notes = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'kurumlar.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.olusturDatabase();
      });
    });
  }
 
  olusturDatabase() {
    this.http.get('assets/portal.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadKurumlar();
          this.loadNotes();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDurum() {
    return this.dbReady.asObservable();
  }
 
  getKurumlr(): Observable<Dev[]> {
    return this.kurumlar.asObservable();
  }
 
  getNotlar(): Observable<any[]> {
    return this.notes.asObservable();
  }

loadKurumlar() {
  return this.database.executeSql('SELECT * FROM kurum', []).then(data => {
    let kurumlar: Dev[] = [];

    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        let skills = [];
        if (data.rows.item(i).skills != '') {
          skills = JSON.parse(data.rows.item(i).skills);
        }

        kurumlar.push({ 
          id: data.rows.item(i).id,
          name: data.rows.item(i).name, 
          skills: skills, 
          img: data.rows.item(i).img
         });
      }
    }
    this.kurumlar.next(kurumlar);
  });
}

addKurum(name, skills, img) {
  let data = [name, JSON.stringify(skills), img];
  return this.database.executeSql('INSERT INTO kurum (name, skills, img) VALUES (?, ?, ?)', data).then(data => {
    this.loadKurumlar();
  });
}

getKurum(id): Promise<Dev> {
  return this.database.executeSql('SELECT * FROM kurum WHERE id = ?', [id]).then(data => {
    let skills = [];
    if (data.rows.item(0).skills != '') {
      skills = JSON.parse(data.rows.item(0).skills);
    }

    return {
      id: data.rows.item(0).id,
      name: data.rows.item(0).name, 
      skills: skills, 
      img: data.rows.item(0).img
    }
  });
}

deleteKurum(id) {
  return this.database.executeSql('DELETE FROM kurum WHERE id = ?', [id]).then(_ => {
    this.loadKurumlar();
    this.loadNotes();
  });
}

updateKurum(dev: Dev) {
  let data = [dev.name, JSON.stringify(dev.skills), dev.img];
  return this.database.executeSql(`UPDATE kurum SET name = ?, skills = ?, img = ? WHERE id = ${dev.id}`, data).then(data => {
    this.loadKurumlar();
  })
}

loadNotes() {
  let query = 'SELECT note.name, note.id, kurum.name AS creator FROM note JOIN kurum ON kurum.id = note.creatorId';
  return this.database.executeSql(query, []).then(data => {
    let notes = [];
    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        notes.push({ 
          name: data.rows.item(i).name,
          id: data.rows.item(i).id,
          creator: data.rows.item(i).creator,
         });
      }
    }
    this.notes.next(notes);
  });
}

addNote(name, creator) {
  let data = [name, creator];
  return this.database.executeSql('INSERT INTO note (name, creatorId) VALUES (?, ?)', data).then(data => {
    this.loadNotes();
  });
}
}
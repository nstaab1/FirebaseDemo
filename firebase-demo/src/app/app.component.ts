import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;
  course;
  author;
  coursesList: AngularFireList<{}>;

  constructor(db: AngularFireDatabase) {
    this.coursesList = db.list('/courses')
    this.courses = db.list('/courses').valueChanges();
    this.course = db.object('/courses/1').valueChanges();
    this.author = db.object('/authors/1').valueChanges();
  }

  add(course2: HTMLInputElement){
    this.coursesList.push(course2.value);
    course2.value = "";
  }

  addObject(){
    this.coursesList.push({
      name: 'My Name',
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components'},
        { title: 'Directives'},
        { title: 'Templates'}
      ]

    });
    console.log(this.courses);
  }


}

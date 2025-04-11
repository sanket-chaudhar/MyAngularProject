import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
bookArray : Book [] =[
  new Book (1,"english" , 234),
  new Book (2,"marathi" , 889),
  new Book (3,"english" , 800)

]
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
   @Input() childSelectedTask: Task;
   @Output() clickedDone = new EventEmitter();

   finishedEditing() {
    this.clickedDone.emit();
  }

}

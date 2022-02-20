import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  title = 'dw-navbar';

  @Input() readonly:boolean = true;
  @Input() data:any;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  save(){
    this.onSave.emit(this.data);
    console.log('Emitio evento save');
  }

  cancel(){
    this.onCancel.emit(this.data);
    console.log('Emitio evento cancel');
  }
}

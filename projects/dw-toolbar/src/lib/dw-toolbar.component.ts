import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dw-toolbar',
  template: `
    <div class="text-center">
          <button class="btn btn-primary" (click)="save()" [disabled]="disabled" >Guardar</button>
          <button class="btn btn-secondary" type="reset" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [
  ]
})
export class DwToolbarComponent implements OnInit {
  @Input() disabled:boolean = false;
  @Input() data:any;
  @Input() log:boolean=false;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.consolelog('antes  de emitir save');
    this.onSave.emit(this.data);
    this.consolelog('despues  de emitir save');
  }

  cancel(){
    this.consolelog('antes  de emitir cancel');
    this.onCancel.emit(this.data);
    this.consolelog('despues  de emitir cancel');
  }

  private consolelog(message:string)
  {
    if(this.log)
    {
      console.log(message);
    }
  }
}

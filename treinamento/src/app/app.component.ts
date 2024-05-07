import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = false;



  enableInput(){
    this.isDisabled = false;
  }


  disableInput(){
      this.isDisabled = true;

  }
}

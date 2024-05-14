import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  widthButton1 = '110px';
  widthButton2 = 130;
  styleObj = {
    width: '160px', 
    backgroundColor: 'grey',
  }

  updateStyleObj(){
    console.log('updateStyleObj');
    this.styleObj.width = '170px';
    this.styleObj.backgroundColor = 'lightblue';
  }
}


/*

inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = true;



  enableInput(){
    this.isDisabled = false;
  }


  disableInput(){
      this.isDisabled = true;

  }

  setPasswordTypeInput(){
    this.inputType = 'password';
  }

  setTextTypeInput(){
    this.inputType = 'text'
  }


  logInputText(){


    console.log(this.inputText);

  }

  handleInputKeyup(event: KeyboardEvent){
    
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);

  }


  handleInputEvent(event: Event){

    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
    console.log(event);

  }




    buttonTitle = 'Título de botão';
  buttonDisable = false;


  onButtonClick(){
    this.buttonTitle = 'TITULO ALTERADOOOOOOOO';
    this.buttonDisable = !this.buttonDisable;
  }

*/
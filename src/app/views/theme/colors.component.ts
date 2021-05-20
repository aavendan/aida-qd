import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  templateUrl: 'colors.component.html',
  styleUrls: ['colors.component.css']
})
export class ColorsComponent implements OnInit {

  question: string = 'What is the capital Belgium?'

  distractors = [
    {'text':'Brussels', 'type':'Answer', 'class':'text-info'}
  ];

  constructor(@Inject(DOCUMENT) private _document: any) {}

  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach((el: HTMLElement) => {
      const background = getStyle('background-color', el);
      const table = this._document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
      el.parentNode.appendChild(table);
    });
  }

  ngOnInit(): void {
    this.themeColors();
  }

  enabling(values:any): boolean {
    /* return !(this.distractors.length < 3)  && !(values.currentTarget.checked); */
    console.log(values)
    if(this.distractors.length < 3){
      return false;
    }
    return true;
    /*if(!values.currentTarget.checked) {

    } */
    
  }

  addDistractor(values:any, classValue: any):void {
    let distractor = values.currentTarget.value;
    
    if(values.currentTarget.checked) {
      this.distractors.push({'text':distractor,'type':'Distractor', 'class':classValue})
    } else {
      this.distractors = this.distractors.filter((item) => item.text !== distractor)
    }
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.distractors, event.previousIndex, event.currentIndex);
  }

  convert(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(blob, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

  download() {
    let output = this.distractors.map(obj => {
      return {'text': obj.text, 'type': obj.type}
    });

    let inQ = {'text': this.question, 'type': 'Question'};
    output.unshift(inQ)
    

    const c = JSON.stringify(output);
    const file = new Blob([c], {type: 'text/json'});
    this.convert(file,"fileName.json");
  }
}

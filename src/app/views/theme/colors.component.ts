import { Component, Inject, OnInit, ViewChild,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'colors.component.html',
  styleUrls: ['colors.component.css']
})
export class ColorsComponent implements OnInit {

  @ViewChild('question') questionRef:ElementRef;
  @ViewChild('answer') answerRef:ElementRef;


  SERVER_URL: string = "https://damp-beach-17296.herokuapp.com/http://193.190.127.206:5010/" 
  question: string = ''
  result: Array<any> = [];
  distractors: Array<any> = [];
  dsuccess = 0; dwarning = 0; ddanger = 0;
  loading: boolean;

  constructor(@Inject(DOCUMENT) private _document: any, private httpClient: HttpClient) {
    
  }

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
    /* this.themeColors(); */

    

  }

  generate() {

    this.question = this.questionRef.nativeElement.value;

    let answer = this.answerRef.nativeElement.value;
    this.distractors = [];
    this.distractors.push({'text':answer, 'type':'Answer', 'class':'text-info'})
    

    this.result = [];
    const formData = new FormData();
    formData.append('url', this.question);

    this.ddanger = 0;
    this.dsuccess = 0;
    this.dwarning = 0;
    this.loading = true;

    fetch(this.SERVER_URL, {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.text())
    .then(txt => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(txt, 'text/html');
      var results = htmlDoc.getElementsByTagName('tr')

      for (let index = 1; index < results.length; index++) {
        let element = results[index];
        let value = Math.round(parseFloat(element.getElementsByTagName('td')[1].textContent)*100);

        this.dsuccess += value>=75?1:0;
        this.dwarning += value<75 && value >= 30?1:0;
        this.ddanger += value<30?1:0;

        this.result.push({
          'name': element.getElementsByTagName('td')[0].textContent,
          'value': value
        })
      }

      this.loading = false;
    })
    .catch(function(err) {
      console.log(err);
    });
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

  addDistractor(values:any):void {
    let distractor = values.currentTarget.name;
    let valueDistractor = values.currentTarget.value;
    let classValue = valueDistractor>=75?'text-success':valueDistractor>=30?'text-warning':'text-danger';
    
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
    this.convert(file,"AIDA-distractorgenerator.json");
  }
}

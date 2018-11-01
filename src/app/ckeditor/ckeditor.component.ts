import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})

export class CkeditorComponent implements OnInit {
  public editorValue = '';
  constructor() { }

  ngOnInit() { }
  onChange() { }
  onEditorChange() { }
  onReady() { }
  onFocus() { }
  onBlur() { }
  onContentDom() { }
  onFileUploadRequest(event) {
    console.log('haha');
  }
  onFileUploadResponse() { }
  onPaste() { }
  onDrop() { }
}

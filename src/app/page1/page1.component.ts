import { Component, OnInit, ViewChild } from '@angular/core';
import { getTinymce } from '@tinymce/tinymce-angular/esm2015/TinyMCE';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component implements OnInit {

  tinymceInit = {
    menubar: false,
    plugins: ['save'],
    toolbar: 'save',
    base_url: '/tinymce',
    save_onsavecallback: function() {
      console.log('save_onsavecallback');
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
      console.log('onSave');
  }

}

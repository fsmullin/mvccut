import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent implements OnInit, AfterViewInit {
  formData: FormGroup;
  sermonVideo: string;
  sermonText: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      sermonLink: new FormControl('', [Validators.required]),
      sermonDesc: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
  }

  sermonLinkChange(ev) {
    this.sermonVideo = this.formData.get('sermonLink').value;
  }

  sermonTextChanged(ev) {
    console.log(ev);
    this.sermonText = ev.html;
  }
}

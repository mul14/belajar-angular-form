import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

  color = new FormControl('')

  feedbackForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    agree: [false, Validators.requiredTrue],
    colors: new FormArray([]),
  })

  get f() { return this.feedbackForm.controls }
  get t() { return this.f.colors as FormArray}

  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  add() {
    this.t.push(this.fb.group({
      colorName: ['']
    }));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}

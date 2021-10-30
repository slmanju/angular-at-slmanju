import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-view-edit-input',
  templateUrl: './view-edit-input.component.html',
  styleUrls: ['./view-edit-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ViewEditInputComponent
    }
  ]
})
export class ViewEditInputComponent implements ControlValueAccessor, OnInit {

  @Input('value') originalText = '';
  @Input('veTitle') veTitle = '';

  viewEdit = new FormControl('');
  editing = false;

  _onChange = (value: string) => {};
  _onTouched = () => {};
  disabled = false;

  constructor() {
  }

  ngOnInit(): void {}

  writeValue(value: string): void {
    this.originalText = value;
    this.viewEdit.setValue(this.originalText);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    if (disabled) {
      this.viewEdit.disable({ onlySelf: true, emitEvent: false });
    }
  }

  startEdit() {
    if (!this.disabled) {
      this.editing = true;
      this._onTouched();
    }
  }

  onSave() {
    this.originalText = this.viewEdit.value;
    this.editing = false;
    this._onChange(this.originalText);
  }

  onCancel() {
    this.viewEdit.setValue(this.originalText);
    this.editing = false;
  }
}

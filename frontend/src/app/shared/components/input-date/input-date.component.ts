import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type = 'text';
  @Input() minDate: Date;
  @Input() maxDate: Date;

  control = new FormControl();

  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  get value(): any {
    return this.control.value;
  }

  set value(value: any) {
    this.control.setValue(value);
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.setValidators(this.ngControl.validator);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.less']
})
export class DependentDropdownComponent {

  selectedCountry!: string;
  phoneNumber!: string;

  countryDialCodes :any= {
    "USA": "+1",
    "Canada": "+1",
    // Add more countries and their dial codes as needed
  };

  countrySelected() {
    if (this.selectedCountry && this.countryDialCodes[this.selectedCountry]) {
      const dialCode = this.countryDialCodes[this.selectedCountry];
      // Prepend the dial code to the phone number
      this.phoneNumber = dialCode + ' ';
    } else {
      this.phoneNumber = ''; // Clear phone number if no country selected or no dial code found
    }
  }
}

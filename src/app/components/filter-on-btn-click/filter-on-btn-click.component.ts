import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-on-btn-click',
  templateUrl: './filter-on-btn-click.component.html',
  styleUrls: ['./filter-on-btn-click.component.less']
})
export class FilterOnBtnClickComponent implements OnInit {


    // Original Data (it can come from API as well)
    data = [
      { id: 1, name: 'Item 1', risk: 'low' },
      { id: 2, name: 'Item 2', risk: 'high' },
      { id: 3, name: 'Item 3', risk: 'low' },
      { id: 4, name: 'Item 4', risk: 'high' },
      { id: 5, name: 'Item 5', risk: 'low' },
    ];
  
    // Filtered data that will be displayed
    filteredData:any = [];
    selectedRisk: string = '';
  
    // On component initialization, we display all the data
    ngOnInit(): void {
      this.filteredData = this.data;
      console.log(this.filteredData );
      
    }

      // Function to filter data based on risk type
  filterData(risk: string) {
    if (risk === 'low') {
      this.filteredData = this.data.filter(item => item.risk === 'low');
      console.log(this.filteredData );
    } else if (risk === 'high') {
      this.filteredData = this.data.filter(item => item.risk === 'high');
      console.log(this.filteredData );
    } else {
      this.filteredData = this.data; // Show all data
    }
  }
  toggleRisk(risk: string) {
    // Toggle selected risk state
    // this.selectedRisk = risk;
    
    // Filter data based on the risk type
    this.filteredData = this.data.filter(item => item.risk === risk);
    console.log(this.filteredData );
    
  }

}

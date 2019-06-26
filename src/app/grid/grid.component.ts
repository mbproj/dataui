import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';

import {CityService} from '../../services/city.service';
import {City} from '../../model/city.model';
import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("your license key");


@Component({
    templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {
    private cities: City[];
    private columnDefs: ColDef[];

    // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;

    constructor(private cityservice: CityService) {
        this.columnDefs = this.createColumnDefs();
    }

    ngOnInit() {
        this.cityservice.findAll().subscribe(
          cities => {
                this.cities = cities
            },
            error => {
                console.log(error);
            }
        )
    }

     // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
     onGridReady(params): void {
        this.api = params.api;
        this.columnApi = params.columnApi;

        this.api.sizeColumnsToFit();
    }

    // create some simple column definitions
    private createColumnDefs() {
        return [
            {field: 'id'},
            {field: 'name'},
            {field: 'countryCode'},
            {field: 'district'},
            {field: 'population'}
        ]
    }
}
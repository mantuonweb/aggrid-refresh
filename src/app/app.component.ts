import { Component } from '@angular/core';
import { CubeComponent } from './cube/cube.component';
import { ButtonComponent } from './button/button.component';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aggrid';
  gridApi;
  gridColumnApi;
  public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: this.rowData,
            columnDefs: this.columnDefs,
             //DynamicComponent.createColumnDefs(),
            context: {
                componentParent: this
            },
            enableColResize: true,
        };
    }
    onGridReady(event){
      this.gridApi = event.api;
      this.gridColumnApi = event.columnApi;
      event.api.sizeColumnsToFit();
      //event.api.sizeColumnsToFit();
      window.addEventListener("resize", function() {
        setTimeout(function() {
          event.api.sizeColumnsToFit();
        });
      });
    }
    // noinspection JSMethodCanBeStatic
    public methodFromParent(cell) {
      console.log(this.rowData,cell.node.data);
      this.rowData[cell.node.rowIndex].price = 8;
      this.gridApi.setRowData(this.rowData)
     // this.gridApi.insertItemsAtIndex(0, [rowData]);
       // alert(`"Parent Component Method from ${cell}!`);
    }
  //https://www.ag-grid.com/angular-getting-started/
  columnDefs = [
    { headerName: 'Make', field: 'make', filter: true, sortable: true,suppressMovable: true },
    { headerName: 'Model', field: 'model', filter: true, sortable: true,suppressMovable: true },
    { headerName: 'Price', field: 'price', filter: true, sortable: true, cellRendererFramework: CubeComponent ,suppressMovable: true},
    { headerName: 'Action', field: 'value', cellRendererFramework: ButtonComponent ,suppressMovable: true}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 2 ,action:'edit'},
    { make: 'Ford', model: 'Mondeo', price: 32000,action:'edit' },
    { make: 'Porsche', model: 'Boxter', price: 72000,action:'edit' }
  ];

}

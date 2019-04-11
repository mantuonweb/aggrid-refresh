import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'cube-cell',
    template: `{{valueCubed()}}`
})
export class CubeComponent implements ICellRendererAngularComp {
    private params: any;
    private cubed: number;

    // called on init
    agInit(params: any): void {
        this.params = params;
        //console.log(this.params);
        this.cubed = this.params.value * this.params.value * this.params.value;
    }

    // called when the cell is refreshed
    refresh(params: any): boolean {
        this.params = params;
        this.cubed = this.params.value * this.params.value * this.params.value;
        return true;
    }

    public valueCubed(): number {
        return this.cubed;
    }
}

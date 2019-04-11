import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    template: `<span><button style="height: 20px" (click)="invokeParentMethod()" class="btn btn-info">Invoke Parent</button></span>`,
    styles: [
        `.btn {
            line-height: 0.5
        }`
    ]
})
export class ButtonComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.methodFromParent(this.params)
    }

    refresh(): boolean {
        return false;
    }
}
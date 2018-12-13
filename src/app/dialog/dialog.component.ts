import {MatDialogRef} from "@angular/material";
import {Component} from "@angular/core";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})

export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    console.log("Order was saved !");
    this.dialogRef.close();
  }
}

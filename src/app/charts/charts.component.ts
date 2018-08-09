import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  printTable(): void {

    let printContents, popupWin;
    printContents = document.getElementById('printTable').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet"  type="text/css" href="../assets/css/common.css" /></head>');
    popupWin.document.write(`
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
    );
    // popupWin.document.write(`
    //     <html>
    //       <head>
    //         <title>Print tab</title>
    //         <style>

    //         </style>
    //       </head>
    //   <body onload="window.print();window.close()">${printContents}</body>
    //     </html>`
    // );
    popupWin.document.close();

    //window.print();
  }

  printChart(): void {
    // let printContents, popupWin;
    // printContents = document.getElementById('print-section').innerHTML;
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    // popupWin.document.open();
    // popupWin.document.write('<html><head><link rel="stylesheet"  type="text/css" href="../assets/css/common.css" /></head>');    
    // popupWin.document.write(`
    //   <body onload="window.print();window.close()">${printContents}</body>
    //     </html>`
    // );
    // // popupWin.document.write(`
    // //     <html>
    // //       <head>
    // //         <title>Print tab</title>
    // //         <style>

    // //         </style>
    // //       </head>
    // //   <body onload="window.print();window.close()">${printContents}</body>
    // //     </html>`
    // // );
    // popupWin.document.close();

    window.print();
  }

}

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare let google;

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    @ViewChild('pieChart', { static: true })
    pieChart: ElementRef;

    @Input()
    title: string;

    @Input()
    data: any[][];

    drawPieChart = () => {
        let data = google.visualization.arrayToDataTable(this.data);

        let options: any = {};

        if (this.title) {
            options.title = this.title;
        }

        let chart = new google.visualization.PieChart(this.pieChart.nativeElement);

        chart.draw(data, options);
    }


    constructor() { }

    ngOnInit(): void {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawPieChart);
    }
}

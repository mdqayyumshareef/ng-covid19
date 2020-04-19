import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare let google;

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

    @ViewChild('lineChart', { static: true })
    lineChart: ElementRef;

    @Input()
    title: string;

    @Input()
    data: any[][];

    drawLineChart = () => {
        let data = google.visualization.arrayToDataTable(this.data);

        let options: any = {
            curveType: 'function',
            legend: { position: 'bottom' }
        };

        if (this.title) {
            options.title = this.title;
        }

        let chart = new google.visualization.LineChart(this.lineChart.nativeElement);

        chart.draw(data, options);
    }

    constructor() { }

    ngOnInit(): void {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(this.drawLineChart);
    }

}

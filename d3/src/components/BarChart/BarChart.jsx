import { select, scaleBand, scaleLinear } from 'd3';
import './BarChart.css';

const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'India' },
    { id: 'd3', value: 12, region: 'China' },
    { id: 'd4', value: 13, region: 'Germany' },
]

export function BarChart() {
    const xScale = scaleBand()
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0,250])
    .padding(0.1);
    //the rangees in x values

    const yScale = scaleLinear()
    //domain is the min and max values of height
    .domain([0, 15])
    //start in top left corner
    .range([200, 0]);

    const container = select('svg')
        .classed('container', true)

    // to not select main div we create new element with class bar
    const bars = container.selectAll('.bar')
        .data(DUMMY_DATA)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', (data) => yScale(data.value))
        .attr('x', data => xScale(data.region))
        .attr('y', data=> 200- yScale(data.value));

    return (
        <>
            <svg />
        </>
    )
} 
import { select } from 'd3';
import { useRef } from "react";

const data = [23, 45, 34, 63, 32];

export function Basic() {
    const svgRef = useRef();
    const svg = select(svgRef.current);

    svg.selectAll("circle").data(data).join(
        enter => enter.append('circle'),
        update => update.attr("class", "updated"),
        exit => exit.remove(),
    );

    /*select all p in div, attach to them data, all missing p will be append
    for every new p it will set text, it accept data and display it
    */
    select('div')
        .selectAll('p')
        .data([1, 2, 3])
        .enter()
        .append('p')
        .text(dta => dta);


    return (
        <>
            <div></div>
            <svg ref={svgRef}></svg>
        </>
    )
} 
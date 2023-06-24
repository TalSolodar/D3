import { useEffect, useRef, useState } from "react";
import { select } from 'd3';


export function BasicReact() {
    const svgRef = useRef();
    const [data, setData] = useState([23, 45, 34, 63, 32]);

    useEffect(() => {
        // binding data to svg elements, add 5 circles
        //join allows us to define what to do with 3 kinds of elements: enter, update (no need)0, remove(no need)
        const svg = select(svgRef.current);
        svg
            .selectAll('circle')
            .data(data)
            .join(
                enter => enter.append('circle')
                    .attr("class", "new")
                    .attr("r", value=> value)
                    .attr("cx", value=> value*2)
                    .attr("cy", value => value*2)
                    .attr("stroke", "red"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            );

        //nothing is being updated in webpack, because create react app building everything from scratch when saving the file

    }, [data]);

    return (
        <>
            <button onClick={() => setData(prev => prev.map(i => i + 5))}>Update Data</button>
            <button onClick={() => setData(prev => prev.filter(i => i < 35))}>Filter Data</button>
            <svg ref={svgRef}></svg>
        </>
    )
} 
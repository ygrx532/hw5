import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";


export function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline} = props;
    // Task 1: TODO
    // 1. find the maximum of the Count attribute in the data
    const maxCount = max(data, d => d.Count);

    // 2. define the xScale and yScale
    const xScale = scaleLinear()
    .domain([0, maxCount])
    .range([0, width]);

    const yScale = scaleBand()
    .domain(data.map(d => d.AirlineName)) // Assuming Name is the attribute for airline names
    .range([0, height])
    .padding(0.2);

    // 3. return the bars; (Remember to use data.map());
    const color = d => d.AirlineID === selectedAirline ? "#992a5b" : "#2a5599";
    const onMouseOver = d => () => setSelectedAirline(d.AirlineID);
    const onMouseOut = () => setSelectedAirline(null);
    

    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        {data.map((d, i) => (
            <rect key={i} x={0} y={yScale(d.AirlineName)} width={xScale(d.Count)} height={yScale.bandwidth()}
                  fill={color(d)} onMouseOver={onMouseOver(d)} onMouseOut={onMouseOut} />
        ))}
        <XAxis xScale={xScale} width={width} height={height} />
        <YAxis yScale={yScale} height={height} offsetX={offsetX} />
    </g>
    
    // Task 3. TODO
    // 1. define an arrow function color; it takes a data item, d, as input. 
    // If d.AirlineID is equal to the selectedAirline, it returns "#992a5b"; 
    // otherwiese, it returns "#2a5599".
    // 2. define a function onMouseOver; it takes a data item, d, as input,
    // and sets the selectedAirline be the d.AirlineID
    // 3. define a function onMouseOut; it has no argument, and sets the selectedAirline be null.
    // 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
    // Note: the function of the onMouseOver properties should be an arrow function 
    // that wraps the onMouseOver you defined since it takes d as input.
    
    
}

export default BarChart;
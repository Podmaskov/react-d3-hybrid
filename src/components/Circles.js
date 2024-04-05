import React, { useRef, useState, useEffect } from "react";
import { getData } from "../utils/utils";
import { scaleLinear, select } from "d3";

let colors = ["#2176ae", "#57b8ff", "#b66d0d", "#fbb13c", "#fe6847"];

export const Circles = ({ width, height }) => {
  const [data, setData] = useState(getData());
  const svgRef = useRef();

  const handelClick = () => setData(getData());

  useEffect(() => {
    const maxRadius = 40;
    const xScale = scaleLinear().domain([0, 1]).range([0, width]);
    const yScale = scaleLinear().domain([0, 1]).range([height, 0]);
    const rScale = scaleLinear().domain([0, 1]).range([0, maxRadius]);

    select(svgRef.current)
      .selectAll("circle")
      .data(data)
      .transition()
      .duration(1000)
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => yScale(d.y))
      .attr("r", (d) => rScale(d.r))
      .attr("fill", (d) => colors[d.color]);
  }, [data, width, height]);
  return (
    <div>
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
        {data.map((d, i) => (
          <circle key={i} fill="#fff" />
        ))}
      </svg>
      <div>
        <button type="button" onClick={handelClick}>
          {" "}
          Refresh Data
        </button>
      </div>
    </div>
  );
};

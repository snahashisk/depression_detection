/* eslint-disable no-shadow */
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 10, color: "#008000" }, // Green
  { name: "B", value: 10, color: "#2E8B57" }, // Sea Green
  { name: "C", value: 10, color: "#3CB371" }, // Medium Sea Green
  { name: "D", value: 10, color: "#00FF7F" }, // Spring Green
  { name: "E", value: 10, color: "#7FFF00" }, // Chartreuse
  { name: "F", value: 10, color: "#ADFF2F" }, // Green Yellow
  { name: "G", value: 10, color: "#FFFF00" }, // Yellow
  { name: "H", value: 10, color: "#FFD700" }, // Gold
  { name: "I", value: 10, color: "#FFA500" }, // Orange
  { name: "J", value: 10, color: "#FF0000" }, // Red
];

const cx = 150;
const cy = 125;
const iR = 75;
const oR = 125;
const value = 10;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default class Charts extends PureComponent {
  render() {
    return (
      <div className="max-h-content m-2 flex items-center justify-center">
        <PieChart width={300} height={150}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(this.props.value, data, cx, cy, iR, oR, "#d0d000")}
        </PieChart>
      </div>
    );
  }
}

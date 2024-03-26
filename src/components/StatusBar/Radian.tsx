import { FC } from "react";

interface RadianProps {
  percent: number;
}

const Radian: FC<RadianProps> = ({ percent }) => {
  const colors = {
    green: "#7AE538",
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={80}
        style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
        height={80}
      >
        <mask id="mask">
          <circle fill="white" width="80" height="80" cx="40" cy="40" r={40} />
          <circle fill="black" width="80" height="80" cx="40" cy="40" r={30} />
        </mask>
        <circle
          fill="transparent"
          width="80"
          height="80"
          cx="40"
          cy="40"
          r={40}
          stroke={colors.green}
          strokeWidth={25}
          strokeDasharray={314}
          strokeDashoffset={-314 + 3.14 * percent}
          mask="url(#mask)"
        />
        <circle
          fill="transparent"
          width="80"
          height="80"
          cx="40"
          cy="40"
          r={40}
          stroke={colors.green}
          strokeWidth={5}
          mask="url(#mask)"
        />
      </svg>
      <p
        style={{
          position: "absolute",
          fontWeight: 500,
          fontSize: 30,
          color: colors.green,
        }}
      >
        {percent}
      </p>
    </div>
  );
};

export default Radian;

import { FC } from "react";
import cls from "../../style/layout.module.scss";

interface RadianProps {
  percent: number;
}

const Radian: FC<RadianProps> = ({ percent }) => {
  const colors = {
    green: "#7AE538",
  };
  return (
    <div className={cls.radian}>
      <svg>
        <mask id="mask">
          <circle fill="white" cx="40" cy="40" r={40} />
          <circle fill="black" cx="40" cy="40" r={30} />
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
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={
            -(2 * Math.PI * 40) + ((2 * Math.PI * 40) / 100) * percent
          }
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
          color: colors.green,
        }}
      >
        {Math.round(percent)}
      </p>
    </div>
  );
};

export default Radian;

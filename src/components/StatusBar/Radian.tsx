import { FC } from "react";
import cls from "../../style/layout.module.scss";

export enum RadianVariant {
  green = "#7AE538",
  orange = "#E58B38",
  blue = "#11F5E8",
}

interface RadianProps {
  percent: number;
  variant: RadianVariant;
  maxState?: number;
  text?: number;
}

const Radian: FC<RadianProps> = ({
  percent,
  variant,
  maxState = 100,
  text,
}) => {
  const calcProgress = (max: number) => {
    if (max <= percent) {
      return -(2 * Math.PI * 40) + ((2 * Math.PI * 40) / percent) * percent;
    }
    return -(2 * Math.PI * 40) + ((2 * Math.PI * 40) / maxState) * percent;
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
          stroke={variant}
          strokeWidth={25}
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={calcProgress(maxState)}
          mask="url(#mask)"
        />
        <circle
          fill="transparent"
          width="80"
          height="80"
          cx="40"
          cy="40"
          r={40}
          stroke={variant}
          strokeWidth={5}
          mask="url(#mask)"
        />
      </svg>
      <p
        style={{
          color: variant,
        }}
      >
        {text ? text : Math.round(percent)}
      </p>
    </div>
  );
};

export default Radian;

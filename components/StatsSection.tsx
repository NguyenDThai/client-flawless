"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { value: 1200, suffix: "+", label: "Loyal Customers" },
    { value: 4.9, decimals: 1, label: "Average Rating" },
    { value: 90, suffix: "%", label: "Repeat Buyers" },
    { value: 20, suffix: "+", label: "Countries Glowing" },
  ];

  return (
    <div ref={ref} className="flex items-center justify-between mt-5">
      {stats.map((stat, index) => (
        <div key={index}>
          <span className="text-blue-500 text-[40px]">
            {inView ? (
              <CountUp
                end={stat.value}
                duration={5}
                decimals={stat.decimals || 0}
                suffix={stat.suffix || ""}
              />
            ) : (
              "0"
            )}
          </span>
          <p className="text-[#364151]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

import React from "react";
import Chart from "../../Components/Chart/Chart";
import FeaturedInfo from "../../Components/FeauturedInfo/FeaturedInfo";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import { userData } from "../../dummyData";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics "
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Segment, Grid } from "semantic-ui-react";
import { useContext } from "react";
import UserContext from "../../UserContext";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const EventAnalytics = ({}) => {
  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const { userId } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    const url1 = `${process.env.REACT_APP_BASE_URL}api/analytics/${userId}`;
    const url2 = `${process.env.REACT_APP_BASE_URL}api/analytics/hostedEvents/${userId}`;

    try {
      const [response1, response2] = await Promise.all([
        fetch(url1),
        fetch(url2),
      ]);
      const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json(),
      ]);
      prepareChartData(data1, setChartData1);
      prepareChartData(data2, setChartData2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const prepareChartData = (data, setChartData) => {
    console.log("data", data);
    if (!data) {
      console.error("Data is undefined");
      return;
    }
    const categories = data.map((item) => item.event_category);
    const counts = data.map((item) => item.count);

    setChartData({
      labels: categories,
      datasets: [
        {
          label: "Events",
          data: counts,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 206, 86, 0.6)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Row columns={2} centered>
            <Grid.Column>
              {chartData1.labels ? (
                <Doughnut
                  data={chartData1}
                  width={250}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                        position: "top",
                      },
                      title: {
                        display: true,
                        fontSize: 20, // <--- this is not a managed option since CHART.JS 3
                        text: "Events attend by month",
                        color: "black",
                      },
                    },
                  }}
                />
              ) : (
                <div>No data</div>
              )}
            </Grid.Column>
            <Grid.Column>
              {chartData2.labels && (
                <Doughnut
                  data={chartData2}
                  width={250}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: {
                        display: true,
                        position: "top",
                      },
                      title: {
                        display: true,
                        fontSize: 20, // <--- this is not a managed option since CHART.JS 3
                        text: "Events hosted by month",
                        color: "black",
                      },
                    },
                  }}
                />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default EventAnalytics;

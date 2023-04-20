import React from "react";
import { Segment, Grid } from "semantic-ui-react";
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
import { Doughnut, Line } from "react-chartjs-2";

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

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const Linedata = {
  labels,
  datasets: [
    {
      label: "Profit booked",
      data: labels.map(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Events hosted month wise",
      data: labels.map(() => [10, 11, 23, 4, -6, 0, 10, 20]),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function HostedEvents() {
  // const chartOptions = {
  //   maintainAspectRatio: false,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Your Chart Title",
  //       font: {
  //         size: 20,
  //         weight: "bold",
  //         color: "black",
  //       },
  //     },
  //   },
  // };
  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Row columns={2} centered>
            <Grid.Column>
              <Doughnut
                data={data}
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
            </Grid.Column>
            <Grid.Column>
              <Doughnut
                data={data}
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
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} centered style={{ textAlign: "center" }}>
            <Grid.Column>
              <Line
                options={{
                  responsive: true,
                  redraw: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Chart.js Line Chart",
                    },
                  },
                }}
                data={Linedata}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default HostedEvents;

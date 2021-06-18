import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import numeral from "numeral";
import {fetchRequest} from "../../lib/Service";

const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function LineGraph({themeType, casesType = "cases", ...props}) {
    const [data, setData] = useState({});
    const options = {
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0,
            },
        },

        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: function (tooltipItem, data) {
                    return numeral(tooltipItem.value).format("+0,0");
                },
            },
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        format: "MM/DD/YY",
                        tooltipFormat: "ll",
                    },
                    ticks: {
                        fontColor: themeType === "dark" ? "#fff" : "#000",
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: themeType === "dark" ? "#fff" : "#000",
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return numeral(value).format("0a");
                        },
                    },
                },
            ],
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchRequest("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((data) => {
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                });
        };

        fetchData();
    }, [casesType]);

    return (
        <div className={props.className}>
            {data?.length > 0 && (
                <Line
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: casesType === 'cases'?'rgba(204, 16, 52, .4)':casesType==='recovered'?'rgba(125, 215, 29, .4)':'rgba(0, 0, 0, .4)',
                                borderColor: casesType === 'cases'?'rgb(204, 16, 52)':casesType==='recovered'?'rgb(125, 215, 29)':'rgb(0, 0, 0)',
                                data: data,
                            },
                        ],
                    }}
                />
            )}
        </div>
    );
}

export default LineGraph;

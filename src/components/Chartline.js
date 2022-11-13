import {LineChart,ResponsiveContainer,Legend, Tooltip,Line,XAxis,YAxis,CartesianGrid} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample chart data
const pdata = [
    {
        name: 'January',
        product: 4122454,
        view: 1545952
    },
    {
        name: 'February',
        product: 3258364,
        view: 3989123
    },
    {
        name: 'March',
        product: 5487987,
        view: 1877144
    },
    {
        name: 'April',
        product: 4254548,
        view: 2201235
    },
    {
        name: 'May',
        product: 4687987,
        view: 4100125
    },
    {
        name: 'June',
        product: 2456587,
        view: 3436587
    },
    {
        name: 'July',
        product: 2135498,
        view: 5497423
    },
    {
        name: 'August',
        product: 3462132,
        view: 4289523
    },
    {
        name: 'September',
        product: 2436512,
        view: 3687223
    },
    {
        name: 'October',
        product: 3635659,
        view: 3954482
    },
    {
        name: 'November',
        product: 2684532,
        view: 4815423
    },
    {
        name: 'December',
        product: 2975256,
        view: 4520359
    },
];

function Chart() {
    return (
        <div style={{marginTop: 200, marginLeft: 100, marginRight: -150, padding: 20}}>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="product"
                        stroke="yellow" activeDot={{ r: 8 }} />
                    <Line dataKey="view"
                        stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
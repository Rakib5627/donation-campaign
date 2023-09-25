


import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { getStoredCardApplication } from '../../Utility/localStorage';


const Statistics = () => {


    const storedCardIds = getStoredCardApplication();

    const selected = storedCardIds.length;
    const remaining = 12 - selected;
    const x = (selected*100/12).toFixed(2);
    const y = (remaining*100/12).toFixed(2);
    console.log(selected, remaining)

    const data = [
        { id: 1, name: 'Selected', value: selected },
        { id: 2, name: 'Remaining', value: remaining },
    ];

    const COLORS = ['#FF444A', '#00C49F'];



    return (
        <div className='mt-10 max-w-lg mx-auto text-center'>
            
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    fill="#8884d8"
                    dataKey="value">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <p className='text-white mr-40 text-center' style={{background : '#FF444A' }}>Selected-{x}%</p>
            <br />
            <p className=' text-white mr-40 text-center' style={{background : '#00C49F' }}>Remaining-{y}%</p>

        </div>
    );
};

export default Statistics;
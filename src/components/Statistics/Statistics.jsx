
import { Chart } from "react-google-charts";
import { getStoredCardApplication } from "../../Utility/localStorage";







const Statistics = () => {

    const storedCardIds = getStoredCardApplication();
    const selected = storedCardIds.length;
    const remaining = 12 - selected;


    const options = {
        title: "Donation Chart",
    };

    const data = [
        ["Donation Chart", "Total Donation"],
        ["Your Donation", selected],
        ["Total Donation", remaining],
    ];
    
    return (
        <div className='mt-10'>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />


        </div>
    );
};

export default Statistics;
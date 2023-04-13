import { Month } from "../styles/StrengthStats.Styled";
import { months } from "../assets/data/MockData";

const MonthSelect = ({value}) => {

    return (
        <Month defaultValue="select" >
            <option value="select" disabled>Select Month</option>
            {
                months.map((m) => {
                    if (m.value > value) {
                        return (
                            <option value={m.value} key={m.value}>{m.month}</option>
                        );
                    }
                })
            }
        </Month>
    );
}

export default MonthSelect;
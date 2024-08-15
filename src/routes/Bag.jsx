import { useSelector } from "react-redux";
import BagEmpty from "../components/BagEmpty";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";


const Bag = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
    })
    return (
        
<main>
    <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.length > 0 ? (
            finalItems.map(item => <BagItem key={item.id} item={item} />) // Add a unique key for each BagItem
        ) : (
            <BagEmpty/> // Message when there are no items
        )}
    </div>
    {finalItems.length > 0 && <BagSummary />} 
    </div>
</main>
    )
}

export default Bag;
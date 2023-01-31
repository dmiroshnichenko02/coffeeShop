import CoffeeOurPage from "../coffeeOurPage/CoffeeOurPage";
import CoffeeAboutOur from "../coffeeAboutOur/CoffeeAboutOur";
import CoffeeSearch from "../coffeeSearch/CoffeeSearch";
import CoffeeCards from "../coffeeCards/CoffeeCards";

import { useState } from "react";

const SecondPage = () => {
    const [data, setData] = useState([
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
        {name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: 6.99},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
        {name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: 6.99},
    ])
    const [filter, setFilter] = useState('');
    const [term, setTerm] = useState('');

    const onFilterSelect = (filters) => {
        setFilter(filters)
    }

    const onUppdateSearch = (term) => {
        setTerm(term)
    }

    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil')
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya')
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia')
            default:
                return items
        }
    }

    const visibleData = filterPost(searchEmp(data, term), filter)

    return (
        <>
            <header>
                <CoffeeOurPage />
            </header>
            <main>
                <CoffeeAboutOur />
                <CoffeeSearch onFilterSelect={onFilterSelect} onUppdateSearch={onUppdateSearch} />
                <CoffeeCards data={visibleData} />
            </main>
        </>
    )
}

export default SecondPage;
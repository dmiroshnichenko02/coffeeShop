import CoffeeOurPage from "../coffeeOurPage/CoffeeOurPage";
import CoffeeAboutOur from "../coffeeAboutOur/CoffeeAboutOur";
import CoffeeSearch from "../coffeeSearch/CoffeeSearch";
import CoffeeCards from "../coffeeCards/CoffeeCards";
import CoffeeService from "../service/CoffeeService";
import CoffeeLoading from "../loading/CoffeeLoading";
import ErrorMessage from "../errorMessage/ErrorMessage";

import { useState, useEffect } from "react";

const SecondPage = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('');
    const [coffeeEnd, setCoffeeEnd] = useState(false);
    const [term, setTerm] = useState('');
    const [page, setPage] = useState(1)

    const {getCoffeeCards, loading, error} = CoffeeService();

    useEffect (() => {
        onRequest(page)
    }, [page])

    const onRequest = (page) => {
        getCoffeeCards(page)
            .then(data => onCardsLoad(data))
    }
    console.log('rend')
    const onCardsLoad = (newData) => {
        let ended = false
        if (newData.length < 6) {
            ended = true
        }
        setData(data => [...data, ...newData]);
        setCoffeeEnd(coffeeEnd => ended)
    }

    const onLoadMore = () => {
        setPage(page => page + 1)
    }

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

    const load = loading ? <CoffeeLoading/> : null
    const errorMessage = error ? <ErrorMessage/> : null
    const view = !(loading && !error) ? <CoffeeCards data={visibleData} onLoadMore={onLoadMore} coffeeEnd={coffeeEnd}/> : null

    return (
        <>
            <header>
                <CoffeeOurPage />
            </header>
            <main>
                <CoffeeAboutOur />
                <CoffeeSearch onFilterSelect={onFilterSelect} onUppdateSearch={onUppdateSearch} />
                {load}
                {errorMessage}
                {view}
            </main>
        </>
    )
}

export default SecondPage;
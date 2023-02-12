import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import CoffeeOurPage from "../coffeeOurPage/CoffeeOurPage";
import CoffeeAboutOur from "../coffeeAboutOur/CoffeeAboutOur";
import CoffeeSearch from "../coffeeSearch/CoffeeSearch";
import CoffeeCards from "../coffeeCards/CoffeeCards";
import CoffeeService from "../service/CoffeeService";
import CoffeeLoading from "../loading/CoffeeLoading";
import ErrorMessage from "../errorMessage/ErrorMessage";


const SecondPage = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('');
    const [coffeeEnd, setCoffeeEnd] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [term, setTerm] = useState('');
    const [page, setPage] = useState(1)

    const { getCoffeeCards, loading, error } = CoffeeService();

    useEffect(() => {
        onRequest(page, true)
    }, [page])

    const onRequest = (page, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getCoffeeCards(page)
            .then(data => onCardsLoad(data))
    }

    const onCardsLoad = (newData) => {
        let ended = false
        if (newData.length < 6) {
            ended = true
        }
        setData(data => [...data, ...newData]);
        setNewItemLoading(newItemLoading => false)
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

    const load = loading ? <CoffeeLoading /> : null
    const errorMessage = error ? <ErrorMessage /> : null
    const view = !(loading && !error && data.length > 1) ? <CoffeeCards data={visibleData} onLoadMore={onLoadMore} coffeeEnd={coffeeEnd} /> : null

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Best coffee"
                />
                <title>Our best coffee</title>
            </Helmet>
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
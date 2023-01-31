import { useState } from 'react';

import './coffeeSearch.scss';

const CoffeeSearch = (props) => {

    const [term, setTerm] = useState('')

    const onUppdateSearch = (e) => {
        const term = e.target.value
        setTerm(term)
        props.onUppdateSearch(term)
    }

    return (
        <div className="search">
            <div className="container">
                <div className="search-wrapper">
                    <div className="search-item-looking">
                        <label htmlFor="search">Lookiing for</label>
                        <input id="search" type="text" placeholder="start typing here..." value={term} onChange={onUppdateSearch} />
                    </div>
                    <div className="search-item-filter">
                        <div className="search-filter">Or filter</div>
                        <div className="search-filter-wrapper">
                            <div className="search-filter-btn" onClick={(e) => props.onFilterSelect(e.target.textContent)}>All</div>
                            <div className="search-filter-btn" onClick={(e) => props.onFilterSelect(e.target.textContent)}>Brazil</div>
                            <div className="search-filter-btn" onClick={(e) => props.onFilterSelect(e.target.textContent)}>Kenya</div>
                            <div className="search-filter-btn" onClick={(e) => props.onFilterSelect(e.target.textContent)}>Columbia</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeSearch;
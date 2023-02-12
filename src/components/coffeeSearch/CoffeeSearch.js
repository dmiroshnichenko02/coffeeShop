import { useState } from 'react';

import './coffeeSearch.scss';

const CoffeeSearch = (props) => {

    const [term, setTerm] = useState('');
    const [data, setData] = useState([
        { name: 'All' },
        { name: 'Brazil' },
        { name: 'Kenya' },
        { name: 'Columbia' }
    ]);

    const onUppdateSearch = (e) => {
        const term = e.target.value
        setTerm(term)
        props.onUppdateSearch(term)
    }

    const items = data.map((item, i) => {
        return (
            <div className="search-filter-btn" onClick={(e) => props.onFilterSelect(e.target.textContent)} key={i}>{item.name}</div>
        )
    })

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
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeSearch;
import useHttp from "../hooks/httpHook"


const CoffeeService = () => {

    const { request, loading, error, clearError } = useHttp();

    const _page = 1;


    const getCoffeeCards = async (page = _page) => {
        const res = await request(`http://localhost:3000/result?_limit=6&_page=${page}`)
        return res.map(_transformCards)
    }

    const getCoffeeCard = async (num) => {
        const res = await request(`http://localhost:3000/result/${num}`)
        return _transformCards(res)
    }

    const getFavoriteCards = async () => {
        const res = await request(`http://localhost:3000/result?favorite_like=^true`)
        return res.map(_transformCards)
    }

    const _transformCards = (cards) => {
        return {
            id: cards.id,
            name: cards.name,
            country: cards.country,
            price: cards.price,
            thumbnail: cards.thumbnail
        }

    }

    return { getCoffeeCards, getFavoriteCards, getCoffeeCard, loading, error }
}

export default CoffeeService;
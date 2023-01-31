import useHttp from "../hooks/httpHook"


const CoffeeService = () => {

    const { request } = useHttp();

    // const _base = 0;
    // const _end = 6;

    const getCoffeeCards = async () => {
        const res = await request('http://localhost:3000/result')
        return res.map(_transformCards)
    }

    const getCoffeeCard = async (num) => {
        const res = await request(`http://localhost:3000/result/${num}`)
        return _transformCards(res)
    }

    const _transformCards = (cards) => {
        return {
            id: cards.id,
            name: cards.name,
            country: cards.country,
            price: cards.price,
        }

    }

    return { getCoffeeCards, getCoffeeCard }
}

export default CoffeeService;
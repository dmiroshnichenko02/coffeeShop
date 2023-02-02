import img from './loadingCup.gif';

const CoffeeLoading = () => {
    return (
        <img src={img} alt="coffeeLoading" style={{margin: '0 auto', background: 'none', display: 'block', width: "200px", height: "200px", marginTop: '90px'}}/>
    )
}

export default CoffeeLoading;
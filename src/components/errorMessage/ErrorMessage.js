import img from './error.png'

const ErrorMessage = () => {
    return (
        <img src={img} style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} alt="error" />
    )
}

export default ErrorMessage
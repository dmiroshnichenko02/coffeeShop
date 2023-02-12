import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"


const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="404"
                />
                <title>Page not found</title>
            </Helmet>
            <ErrorMessage>
                <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page  doesn't exist</p>
                <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'color': '#9F0013' }} to="/">Back to main page</Link>
            </ErrorMessage>
        </div>
    )
}

export default Page404;
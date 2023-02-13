import { children } from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

const RootLayout = ({ children }) => {

    return(
    <div className='RootLayout'>
    <Footer />
        {children}
    <Header />
    </div>

    )
}


export default RootLayout
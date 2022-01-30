import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';
import Main from '../components/Main';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Parking Spot</title>
        </Head>
        <NavBar />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)

export default Layout;
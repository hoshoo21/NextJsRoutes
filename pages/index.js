import Link from 'next/link';

function HomePage(props) {

    return <>
        <h1> Home Page</h1>
        <ul>
            <li> <Link href="/portfolio"> Portfolio </Link></li>
            <li> <Link href="/clients"> Clients </Link></li>
        </ul>
    </>
}


export default HomePage;
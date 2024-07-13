import Link from 'next/link';
import { useRouter } from 'next/router';
function ClientProjectDetailsPage() {
    const router = useRouter();
    const clients = [
        { id: "max", name: "Maxmillian" },
        { id: "manu", name: "Manuel" }
    ]
    return (

        <>
            <h1> Client Details Page</h1>
            <ul>
                {
                    clients.map((client) => {
                        return <li key={client.id}>
                            <Link href={{
                                pathname: 'clients/[id]',
                                query: { id: client.id },
                            }}
                            > {client.name} </Link>  </li>


                    })
                }
            </ul >
        </>
    )

}


export default ClientProjectDetailsPage;

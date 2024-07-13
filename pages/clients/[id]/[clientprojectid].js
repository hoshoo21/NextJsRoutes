import { useRouter } from "next/router";

function ClientSelectedProj(props) {
    const router = useRouter();

    console.log(router.query);

    return (
        <>
            <h1> Client Selected Project </h1>
        </>

    );
}

export default ClientSelectedProj;
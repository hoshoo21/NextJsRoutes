import { useRouter } from "next/router";

function ClientProject(props) {
    const router = useRouter();

    console.log(router.query);
    return (
        <>
            <h1> Projects of given Client</h1>
        </>

    );
}

export default ClientProject;
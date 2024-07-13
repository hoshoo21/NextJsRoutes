import { useRouter } from "next/router"

function BlogPostDetail(props) {
    const router = useRouter();
    console.log(router.query);
    return (<>
        <h1> Blog Post Detail Page </h1>
    </>);

}

export default BlogPostDetail;
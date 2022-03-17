import BasicLayout from "../../components/layouts/BaseLayout"
import BasePage from "../../components/BasePage"
import {useRouter} from "next/router"
import axios from "axios"
// export const getStaticPaths = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     data = data.slice(0, 10)
//     const paths = data.map((post) => {
//         return {
//             params: {id: post.id.toString()}
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
//     const data = await response.json()

//     return {
//         props: {post: data}
//     }
// }


const DetailPage = ({post}) => {
    const router = useRouter()
    // console.log(router)

  return (
    <BasicLayout>
        <BasePage>
            <h1>I am Portfolio Page</h1>
            <h1>{post.title}</h1>
            <p>Body: {post.body}</p>
            <p>ID: {post.id}</p>
        </BasePage>
    </BasicLayout>
  )
}

DetailPage.getInitialProps = async ({query}) => {
    console.log(query)
    let post = {};

    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + query.id);
        post = res.data
    } catch(e) {
        console.error(e)
    }
    return {post}
}

export default DetailPage
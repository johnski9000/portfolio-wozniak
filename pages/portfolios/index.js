// import BaseLayout from "../../components/layouts/BaseLayout";
// import axios from "axios"
// import Link from "next/link";
// import BasePage from "../../components/BasePage"
// // import {useGetPosts} from "@/actions"
// import { useEffect, useState } from 'react';

// function Portfolios() {
// // const {posts} = useGetPosts();
// const [posts, setPosts] = useState([])
// const [loading, setLoading] = useState(true)
// // const [error, setError] = useState([])
//     useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch("/api/v1/posts")
//       const data = await res.json()
//       setPosts(data)
//     }
//     setLoading(false)

//     fetchPosts()
//   }, [])

//   const renderPosts = () => {
//     return posts.map(post =>
//       <li key={post.id} style={{'fontSize': '20px'}}>
//         <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
//           <a>
//             {post.title}
//           </a>
//         </Link>
//       </li>
//     )
//   }

//   return (
//     <BaseLayout>
//     <BasePage>
//     <h1>
//       I am portfolio page
//     </h1>
//     { loading && 
//     <p>loading...</p>
//     }
//     { posts && 
//     <ul>
//      {renderPosts()}
//     </ul>
//     }
//     {/* {error && 
//     <div className="alert alert-danger">{error.message}</div>
//     } */}
//     </BasePage>
      
//     </BaseLayout>
//   )
// }

// // Portfolios.getInitialProps = async () => {
// //   let posts = [];
// // try {
// //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
// //   posts = res.data;
// // } catch(e) {
// //   console.error(e)
// // }
// //   return {posts: posts.slice(0,10)}
// // }

// export default Portfolios

import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useGetPosts } from '@/actions';

const Portfolios = () => {
  const { posts, error, loading } = useGetPosts();
  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>
            {post.title}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        { loading && 
        <p>Loading data...</p>
        }
        { posts &&
          <ul>
            {renderPosts(posts)}
          </ul>
        }
        { error &&
          <div className="alert alert-danger">{error.message}</div>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios;
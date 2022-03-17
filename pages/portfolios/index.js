import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios"
import Link from "next/link";
import BasePage from "../../components/BasePage"
import { useEffect, useState } from 'react';

function Portfolios() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/v1/posts")
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])


  const renderPosts = () => {
    return posts.map((post) => 
    <li key={post.id}>
      <Link href={"/portfolios/" + post.id}>
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
    <h1>
        I am portfolio page
      </h1>
      <ul>
        {renderPosts()}
      </ul>
    </BasePage>
      
    </BaseLayout>
  )
}

// Portfolios.getInitialProps = async () => {
//   let posts = [];
// try {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//   posts = res.data;
// } catch(e) {
//   console.error(e)
// }
//   return {posts: posts.slice(0,10)}
// }

export default Portfolios
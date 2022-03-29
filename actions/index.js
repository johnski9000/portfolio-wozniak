import { useEffect, useState } from 'react';

export const fetcher = (url) =>
  fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPosts() {
      const res = await fetch('/api/v1/posts');
      const result = await res.json();
      if (res.status !== 200) {
        setError(result)
      } else {
        setPosts(result);
      }
      setLoading(false)
    }

    getPosts();
  }, [])

  return {posts, error, loading}
}
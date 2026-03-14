// Lab 3 – utils/ = reusable helper functions (centralised API calls)
const BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(limit = 10) {
  const res = await fetch(`${BASE}/posts?_limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function fetchPostById(id) {
  const res = await fetch(`${BASE}/posts/${id}`)
  if (!res.ok) throw new Error(`Post #${id} not found`)
  return res.json()
}

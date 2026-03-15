const BASE = 'http://localhost:3001'
  
  export async function fetchPosts(limit = 9) {
    const res = await fetch(`${BASE}/theories?_limit=${limit}`)
    if (!res.ok) throw new Error('Failed to fetch theories. Is json-server running? → npm run server')
    return res.json()
}
  
  export async function fetchPostById(id) {
    const res = await fetch(`${BASE}/theories/${id}`)
    if (!res.ok) throw new Error(`Theory #${id} not found`)
    return res.json()
}
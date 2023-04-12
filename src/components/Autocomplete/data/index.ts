export const swissCantons = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Crime' },
  { id: 3, title: 'Pulp Fiction', genre: 'Crime' },
  { id: 4, title: 'The Dark Knight', genre: 'Action' },
  { id: 5, title: 'Forrest Gump', genre: 'Drama' },
  { id: 6, title: 'The Matrix', genre: 'Sci-Fi' },
  { id: 7, title: 'Inception', genre: 'Sci-Fi' },
  { id: 8, title: 'The Empire Strikes Back', genre: 'Sci-Fi' },
  { id: 9, title: 'Fight Club', genre: 'Drama' },
  { id: 10, title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy' }
]

export async function searchSwissCantons(query = '', selectedCantons: number[] = []) {
  if (!query) {
    return []
  }

  const searchQuery = query.toLowerCase()
  return swissCantons.filter(
    (canton) =>
      canton.title.toLowerCase().startsWith(searchQuery) && !selectedCantons.includes(canton.id)
  )
}

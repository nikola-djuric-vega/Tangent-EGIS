import axios from 'axios'

export async function fetchSuggested(url: string, apiKey: string) {
  try {
    const res: { data: { value: string[] } } = await axios.get(url, {
      headers: {
        'api-key': apiKey,
      },
    })

    if (res.data) {
      return res.data.value.map((searchTerm) => {
        return Object.values(searchTerm)[1]
      })
    }
  } catch (error) {
    console.error('suggested search fetch failed: ', error)
  }
}

export async function fetchPopular() {
  try {
    const { data }: { data: string[] } = await axios.get('/api/search-results')
    return data
  } catch (error) {
    console.error('popular search fetch failed: ', error)
  }
}

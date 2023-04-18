import { faker } from '@faker-js/faker'

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateMockData(n: number) {
  const data = []

  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      children: [...Array(randomInteger(0, 3)).keys()].map((i) => ({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        date: faker.date.month(),
        children: [...Array(randomInteger(0, 3)).keys()].map((i) => ({
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          email: faker.internet.email(),
          date: faker.date.month()
        }))
      }))
    })
  }

  return data
}

export type Data = {
  id: string
  name: string
  email: string
  date: string
}[]

let data: Data = generateMockData(1000)

export function search(query: any): Promise<{
  data: Data
  totalPages: number
  totalItems: number
}> {
  const { page = 1, perPage = 10 } = query

  const totalItems = data.length
  const totalPages = Math.ceil(totalItems / perPage)
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  const paginatedData = data.slice(startIndex, endIndex)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: paginatedData,
        totalPages,
        totalItems
      })
    }, 500)
  })
}

export function remove(item: any): void {
  data = data.filter((x) => {
    return x.id !== item.id
  })
  console.log(data)
}

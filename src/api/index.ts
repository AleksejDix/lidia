import { faker } from '@faker-js/faker'

function generateMockData(n: number) {
  const data = []

  for (let i = 0; i < n; i++) {
    data.push({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      children: [
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          email: faker.internet.email(),
          date: faker.date.month()
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),

          children: [
            {
              id: faker.datatype.uuid(),
              name: faker.name.firstName(),

              children: [
                {
                  id: faker.datatype.uuid(),
                  name: faker.name.firstName(),
                  email: faker.internet.email(),
                  date: faker.date.month()
                }
              ]
            }
          ]
        }
      ]
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

let data: Data = generateMockData(100)

export function search(query: any = { page: 1, perPage: 10 }): Promise<{
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
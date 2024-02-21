interface Item {
  id: number
  name: string
}

export interface GroupListResponse {
  index: number
  name: string
  isEmpty: boolean
  items: Item[]
}

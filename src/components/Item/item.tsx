import { useEffect, useState } from 'react'
import { getItemsList } from '../../../public'
import { ItemListResponse } from '@/types/items'
import { AxiosResponse } from 'axios'
import { ItemList } from './item.styles'

export const Item = () => {
  const [itemList, setItemList] = useState<ItemListResponse[]>([])

  const fetchItemList = async () => {
    try {
      const result: AxiosResponse<ItemListResponse[]> = await getItemsList()
      setItemList(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItemList()
  }, [])

  return (
    <ItemList>
      {itemList.map((item, index) => (
        <li key={index}>
          <a href="/">
            <strong>{item.name}</strong>
          </a>
        </li>
      ))}
    </ItemList>
  )
}

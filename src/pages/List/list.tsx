import { Group, Item } from '@/components'
import { Container, ListWrapper } from './list.styles'

export const List = () => {
  return (
    <Container>
      <ListWrapper>
        <Group />
        <Item />
      </ListWrapper>
    </Container>
  )
}

export default List

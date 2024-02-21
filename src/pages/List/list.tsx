import { Group } from '../../components/Group/group'
import { Item } from '../../components/Item/item'
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

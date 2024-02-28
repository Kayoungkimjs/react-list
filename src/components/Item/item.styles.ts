import styled from '@emotion/styled'
import { columnFlexbox } from '@/styles/utils/flexbox'

export const ItemList = styled.ol`
  ${columnFlexbox('start')};
  width: 100%;
  margin-left: 45px;

  li {
    width: 100%;
    height: 38px;

    a {
      display: inline-block;
      width: 100%;

      strong {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 36px;
        transition: color 100ms ease-in-out;
      }

      &:hover {
        color: #000000;
      }
    }
  }
`

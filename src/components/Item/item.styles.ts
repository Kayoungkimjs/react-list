import styled from '@emotion/styled'

export const ItemList = styled.ol`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 45px;

  li {
    height: 38px;
    strong {
      font-size: 14px;
      font-weight: 400;
      line-height: 36px;
    }
  }
`

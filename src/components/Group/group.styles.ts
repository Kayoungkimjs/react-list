import styled from '@emotion/styled'

export const GroupWrapper = styled.div`
  width: 100%;
`

export const GroupButton = styled.button`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  position: relative;

  .group-list {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 45px;

    &.is-active {
      margin-right: 17px;
    }
  }

  strong {
    font-size: 14px;
    font-weight: 400;
    line-height: 36px;
  }

  svg {
    display: inline-block;
  }

  .fold {
    position: absolute;
    left: 27px;
    top: 0;

    &.is-active {
      transform: rotate(90deg);
      margin-right: -18px;
      position: relative;
      top: 1px;
    }
  }

  .file {
    position: relative;
    top: 3px;
  }
`

export const SubItem = styled.div`
  width: 100%;
  margin: 10px 0 15px 0;

  li {
    width: 100%;
    height: 38px;

    &:hover {
      background-color: #ffe7e7;
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        width: 100%;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        line-height: 36px;

        &:hover {
          color: black;
        }
      }
    }
  }
`

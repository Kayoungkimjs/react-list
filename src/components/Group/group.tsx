import { useEffect, useState } from 'react'
import { ReactComponent as IconFile } from '@/assets/images/ic-file.svg'
import { ReactComponent as IconFold } from '@/assets/images/ic-fold.svg'
import { getGroupList } from '../../../public'
import { GroupListResponse } from '@/types/group'
import { AxiosResponse } from 'axios'
import { GroupWrapper, SubItem } from './group.styles'

export const Group = () => {
  const [groupList, setGroupList] = useState<GroupListResponse[]>([])
  const [openStates, setOpenStates] = useState<boolean[]>([])

  const toggleUserMenu = (index: number) => {
    setOpenStates((prev) => {
      const newOpenStates = [...prev]
      newOpenStates[index] = !newOpenStates[index]
      return newOpenStates
    })
  }

  const fetchGroupList = async () => {
    try {
      const result: AxiosResponse<GroupListResponse[]> = await getGroupList()
      setGroupList(result.data)
      setOpenStates(new Array(result.data.length).fill(false))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGroupList()
  }, [])

  return (
    <>
      {groupList.map((item) => (
        <GroupWrapper key={item.index}>
          <ol>
            <li>
              <button
                type="button"
                onClick={() => {
                  toggleUserMenu(item.index)
                }}
              >
                {!item.isEmpty && (
                  <IconFold
                    className={`ic-fold ${
                      openStates[item.index] ? 'is-active' : ''
                    }`}
                    viewBox="-2 0 50 15"
                  />
                )}

                <div
                  className={`group-list ${
                    !item.isEmpty && openStates[item.index] ? 'is-active' : ''
                  }`}
                >
                  <IconFile className="ic-file" viewBox="0 0 50 50" />
                  <strong>{item.name}</strong>
                </div>
              </button>
            </li>
          </ol>

          {!item.isEmpty && openStates[item.index] && (
            <SubItem>
              <ol>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="/">
                      <strong>{subItem.name}</strong>
                    </a>
                  </li>
                ))}
              </ol>
            </SubItem>
          )}
        </GroupWrapper>
      ))}
    </>
  )
}

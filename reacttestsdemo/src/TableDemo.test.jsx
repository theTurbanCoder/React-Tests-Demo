import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
let container = null
import TableDemo from './TableDemo'
import { createMount } from '@material-ui/core/test-utils'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 Tooltip,
} from '@material-ui/core'
configure({ adapter: new Adapter() })

const posts = [
 {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipi',
 },
 {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body: 'est rerum tempore vitae',
 },
]

let mount

beforeEach(() => {
 mount = createMount()
})

afterEach(() => {
 mount.cleanUp()
})

describe('check for data in table Body', () => {
 it('checks the posts data in table body', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
   Promise.resolve({
    json: () => Promise.resolve(posts),
   })
  )

  const wrapper = mount(<TableDemo />)

  await act(async () => wrapper.update())

  const firstRow = wrapper.find(Table).find(TableBody)

  const firstCell = firstRow.find(TableCell)

  // expect(firstCell.text()).toEqual('userId')

  // expect(firstRow.text()).toEqual('userIdidtitlebody')
  expect(firstRow.text()).toContain('11sunt')
 })
})

describe('checks for data in table header', () => {
 it('checks for posts data keys in table header', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
   Promise.resolve({
    json: () => Promise.resolve(posts),
   })
  )

  const wrapper = mount(<TableDemo />)

  await act(async () => wrapper.update())

  const firstRow = wrapper.find(Table).find(TableHead)

  expect(firstRow.text()).toContain('title')
 })
})

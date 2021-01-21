import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
 table: {
  minWidth: 650,
 },
})

const TableDemo = React.memo((props) => {
 const classes = useStyles()
 const [tableData, setTableData] = useState([])

 useEffect(() => {
  const fetchData = async () => {
   try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
     res.json()
    )

    setTableData(posts.slice())
   } catch (error) {}
  }

  fetchData()
 }, [])

 return (
  <TableContainer coponent={Paper}>
   <Table className={classes.table}>
    <TableHead>
     <TableRow key='row'>
      {tableData[0] &&
       Object.keys(tableData[0]).map((r) => <TableCell key={r}>{r}</TableCell>)}
     </TableRow>
    </TableHead>
    <TableBody>
     {tableData.map((row) => (
      <TableRow key={row.id}>
       <TableCell key={`#${row.userId}`}>{row.userId}</TableCell>
       <TableCell key={`${row.id}#${row.id}`}>{row.id}</TableCell>
       <TableCell key={row.title}>{row.title}</TableCell>
       <TableCell key={row.body}>{row.body}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </TableContainer>
 )
})

export default TableDemo

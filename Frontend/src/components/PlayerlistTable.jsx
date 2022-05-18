import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlayerlistTable(props) {
  const { players, columns, labels } = props
  const navigate = useNavigate()
  
  const handleClickRow = (id) => {
    navigate(`/player/${id}`)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {labels.map((label, index) => (<TableCell id={index}>{label}</TableCell>))}
        </TableHead>
        <TableBody>
          {players.map((player, index) => (
          <TableRow hover id={index} onClick={() => {handleClickRow(player.id)}}>
            {columns.map((item, itemindex) => (
              <TableCell id={itemindex}>{player[item]}</TableCell>
            ))}
          </TableRow>
          ))}
          {}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

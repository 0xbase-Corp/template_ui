import { Divider as MuiDivider } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

interface DividerProps {
  title: string
}

const Divider: FC<DividerProps> = ({ title }) => {
  return (
    <MuiDivider sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', my: 2 }}>
      <Typography sx={{ margin: '0 8px' }}>{title}</Typography>
    </MuiDivider>
  )
}

export default Divider

import { AppBar, Box, FormControl, Grid, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import useStore from '../../hooks/useStore'

const Header = () => {
    const { boards } = useStore();
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6">
                                Dashboard:
                            </Typography>
                            <FormControl>
                                <Select
                                    style={{ backgroundColor: '#fff', marginLeft: 10 }}
                                    // value={boards?.active.id}
                                    onChange={() => {}}
                                >
                                    <MenuItem value="" disabled>
                                        -
                                    </MenuItem>
                                    {boards.list.map((b) => {
                                        return (
                                            <MenuItem key={b.id} value={b?.value}>{b?.title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default observer(Header)

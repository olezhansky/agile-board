import { AppBar, Box, FormControl, Grid, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import useStore from '../../hooks/useStore'
import User from '../common/User'

const Header = () => {
    const { boards, users } = useStore();
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
                                    value={boards?.active?.id || ''}
                                    id="active"
                                    onChange={(event) => {
                                        const {value} = event.target;

                                        boards.selectBoard(value);
                                    }}
                                    native
                                >
                                    <option value="" disabled>
                                        -
                                    </option>
                                    {boards?.boards.map((board) => {
                                        return (
                                            <option key={board?.id} value={board?.id}>{board?.title}</option>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item>
                        <User user={users?.me}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default observer(Header)

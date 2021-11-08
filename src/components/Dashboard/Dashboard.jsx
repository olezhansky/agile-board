import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import useStore from '../../hooks/useStore'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'

function getListStyle(isDraggingOver) {
    return {
        backgroundColor: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: 8,
        minHeight: 500,
      ...isDraggingOver,
    };
  }

const Dashboard = () => {
    const {boards} = useStore()
    return (
        <Box p={2}>
            <DragDropContext>
                <Grid container>
                    {boards.active?.sections?.map((section) => {
                        return (
                            <Grid item key={section.id} xs>
                                <Paper>
                                    <Box p={1} display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h5">{section?.title}</Typography>
                                    </Box>
                                    <Droppable droppableID={section.id}>
                                        {(provided, snapshot) => (
                                            <>
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                            >
                                                1
                                            </div>
                                            <Column section={section}/>
                                            {provided.placeholder}
                                            </>
                                        )}
                                    </Droppable>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </DragDropContext>
        </Box>
    )
}

export default observer(Dashboard)

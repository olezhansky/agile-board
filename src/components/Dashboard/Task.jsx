import { CardContent, Typography } from "@material-ui/core";

import React from 'react'

const Task = ({task}) => {
    return (
        <CardContent>
            <Typography color="textPrimary" gutterBottom style={{fontSize: 18}}>
                {task?.title}
            </Typography>
            <Typography color="textPrimary" gutterBottom >
                {task?.description}
            </Typography>
        </CardContent>
    )
}

export default Task

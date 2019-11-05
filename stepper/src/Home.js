import React from 'react'
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default (props) => {
    return (
        <Container>
            <Button>{props.text}</Button>
        </Container>
    )
}
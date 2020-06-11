import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

const SearchBar = (props) => {

    return (
        <Form>
            <Input type='date' name='date' ></Input>
            <p><Button>Search Images</Button></p>
        </Form>
    )
}

export default SearchBar
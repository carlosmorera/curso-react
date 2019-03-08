import React from 'react';
import {Image, Table} from "semantic-ui-react";

const List = (props) => (
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Charater</Table.HeaderCell>
                <Table.HeaderCell>Descriotion</Table.HeaderCell>
                <Table.HeaderCell>thumbnail</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {props.characters.map(character =>(
                <Table.Row>
                    <Table.Cell>{character.name}</Table.Cell>
                    <Table.Cell>{character.descroption}</Table.Cell>
                    <Table.Cell><Image src={character.thumbnail} rounded size='small'/></Table.Cell>
                </Table.Row>
                ))}
        </Table.Body>
    </Table>
);

export default List;
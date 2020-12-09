import React from 'react'
import Person from './Person'

function ListRendering() {

    const persons = [
        {
            id: 1,
            name : 'Pabbi',
            age : 5,
            skill : 'React'
        },
        {
            id: 2,
            name : 'Kona',
            age : 20,
            skill : 'Angular'
        },
        {
            id: 3,
            name : 'Ishu',
            age : 20,
            skill : 'Vue'
        }
    ]

const personsList = persons.map(person => <Person key = {person.id} person = {person}/>)
    return (
        <div>
            {personsList}
        </div>
    )
}

export default ListRendering

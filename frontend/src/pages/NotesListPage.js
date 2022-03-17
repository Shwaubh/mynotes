import React, {useState, useEffect} from 'react'
import ListItems from '../components/ListItems'

const NotesListPage = () => {

    let protocol = "http://"
    let host = "127.0.0.1:"
    let port = "8000"
    let endpointNotes = "/api/notes/"
    let fullEndpointNotes = protocol + host + port + endpointNotes

    let [notes, setNotes] = useState([])
   
    let getNotes = async () => {
        let resp = await fetch(fullEndpointNotes)
        resp = await resp.json()
        setNotes(resp)
     }

    useEffect(() => {
        getNotes()
    })
   
    

    return (
        <div>
            <div className='notes-list'>
                { notes.map( (note, index) => ( 
                        <ListItems key={index} note={note} />
                        ))}
            </div>
        </div>
    )
}

export default NotesListPage
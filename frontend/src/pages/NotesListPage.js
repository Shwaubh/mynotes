import React, {useState, useEffect} from 'react'

const NotesListPage = () => {

    let protocol = "http://"
    let host = "127.0.0.1:"
    let port = "8000"
    let endpointNotes = "/api/notes/"
    let fullEndpointNotes = protocol + host + port + endpointNotes

    let [notes, setNotes] = useState([])
   
    useEffect(() => {
        getNotes()
    }, [])
   
    let getNotes = async () => {
       let resp = await fetch(fullEndpointNotes)
       resp = await resp.json()
       console.log('Data: ',resp)
       setNotes(resp)
    }

    return (
        <div>
            notes
        </div>
    )
}

export default NotesListPage
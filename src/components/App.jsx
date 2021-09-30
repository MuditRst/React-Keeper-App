import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import AddNote from './AddNote'

function App(){
    const [noteItem,setnoteItem] = useState([])

    function AddItem(note){
        setnoteItem(prevItem=>{
            return[...prevItem,note]
        })
    }

    function DeleteItem(id){
        setnoteItem((prevNote)=>{
            return noteItem.filter((item,index)=>{
                return index !==id
            })
        })
    }

    return(
        <div>
            <Header/>
            <AddNote onAdd={AddItem} />
            {noteItem.map((note,index)=>{
                return <Note
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    onDelete = {DeleteItem}
                />
            })}
            <Footer/>   
        </div>
    )
}

export default App;
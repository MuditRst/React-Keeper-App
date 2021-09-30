import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function AddNote(prop) {
  
  const [clicked,setClick] = useState(false)

  const [note,setNote] = useState({
      title:"",
      content:""
  })  
    
  function handleChange(event){
      const {value,name} = event.target
      setNote(prevValue=>{
          return{
              ...prevValue,
              [name] :value
          }
      })
    }


  return (
    <div>
      <form className="create-note">
        {clicked?<input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>:null}
        <textarea name="content" placeholder="Take a note..." rows={clicked?"3":"1"} value={note.content} onChange={handleChange} onClick={()=>{
          setClick(true)
        }}/>
        <Zoom in={clicked}>
        <Fab onClick={(event)=>{
             prop.onAdd(note)
             event.preventDefault()
             setNote({title:"",content:""})
        }}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;

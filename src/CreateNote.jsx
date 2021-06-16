import React,  {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=> {
const [expand,setExpand]=useState(false);
  const [Note,setNote]=useState({
    title:"",
    content:"",
  });
const InputEvent=(event)=>
{
  //const value=event.target.value;
  //const name=event.target.value;
  const{name,value}=event.target;
setNote((prevData)=>{
  return{

    ...prevData,
[name]:value,

  };
}) ; 
//console.log(Note);
};
const addEvent=()=>
{
  props.passNote(Note);
  setNote({
    title:"",
    content:"",
});
};
const expandit = () =>
{

  setExpand(true);
};
const btoNormal = () =>
{

  setExpand(false);
};
  return (<> 
  <div className="main_note" onDoubleClick={btoNormal}>
 
 
<form>
  {expand?
<input type="test" name="title" value={Note.title} onChange= {InputEvent} 
placeholder="Title"autoComplete="off" />
:null}
<textarea row="" column="" name="content" value={Note.content} 
onChange= {InputEvent} onClick={expandit}  placeholder="write your note....."/>


</form>
{expand?
    <button onClick={addEvent}>
    <AddIcon className="plus_sign"/>
</button>
:null}
 
  </div>
  </>
  );
};
export default CreateNote;
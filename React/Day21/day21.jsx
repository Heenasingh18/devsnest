import { useState } from "react";
import React from "react";
import "./Day21.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function AddItemForm({ addItem }) {

  const classes = useStyles();

    const [title, setTitle] = useState("");
    const [calorie, setCalorie] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addItem({ title, calorie });
        setTitle("");
        setCalorie("");
    };

    return (

        <form onSubmit={handleSubmit} >
         <div className="Day21_back">
            <h1 className="Day21_heading">My LIBRARY</h1>
            <div className="Day21_title1">
               
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add Book name"
                    className="input_1">
                </input><br></br>
            </div>

            <div className="Day21_title2">
                
                <input
                    type="number"
                    name="number"
                    id="number"
                    required
                    value={calorie}
                    onChange={e => setCalorie(e.target.value)}
                    placeholder="Enter Rating"
                    className="input_1">
                </input>
            </div>

            <div>
                <Button
                    style={{
                        marginLeft: "47vw",
                        marginTop: "4vh",
                        cursor : "pointer",
                        width:"150px",
                        fontFamily:"lobster ,cursive",
                    }}
                    type="submit" variant="contained" color="primary">
                    Add Item
                </Button>


            </div>
            </div>

        </form>
    )

}

function RenderItem({ updateItem, removeItem, item, index }) {
  const classes = useStyles();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="border">
            <div className="calorie-text">
                {isEditing ? (
                    <input
                        type='text'
                        name='title'
                        id='title'
                        className="calorie-text"
                        required
                        value={item.title}
                        onChange={e => updateItem(index, { title: e.target.value })}
                    />
                ) : (
                    <h5 className="Book_name">Book : {item.title}</h5>
                )}
                {isEditing ? (
                    <input
                        type='number'
                        name='calorie'
                        id='calorie'
                        className="calorie-text"
                        required
                        value={item.calorie}
                        onChange={e => updateItem(index, { calorie: e.target.value })}
                    />
                ) : (
                    <p className="rating_val">
                        {' '}
                        Rating of {item.title}  :  {item.calorie}
                    </p>
                )}
                <div >
                  

                     <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => removeItem(index)} 
                        style={{
                                  color:"white",
                                  fontSize:"15px",
                                  backgroundColor:"#e31231",
                                  width:"100px",
                                  fontFamily:"lobster ,cursive",
                               }}>
      
                         Delete
                       </Button>

                       <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<SendIcon />}
                          style={{
                                           color:"white",
                                           fontSize:"15px",
                                           backgroundColor:"#27bf19",
                                           width:"100px",
                                           fontFamily:"lobster ,cursive",
                           
                        }}
                        onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Done' : 'Edit'}
      
        
                     </Button>
                    
                </div>
            </div>
        </div>
    );
}

export default function Day21() {
    const [items, setItems] = useState([]);

    const updateItem = (index, newItem) => {
        setItems(
            items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
        );
    };

    const addItem = item => {
        setItems([...items, item]);
    };

    const removeItem = index => {
        setItems(items.filter((item, i) => i !== index));
    };

    return (
        <div >
            <AddItemForm addItem={addItem} />
            {items.length === 0 ? (
                <h2 className="Start_adding" >Start Adding Items</h2>
            ) : (
                items.map((item, index) => (
                    <RenderItem
                        item={item}
                        key={index}
                        index={index}
                        updateItem={updateItem}
                        removeItem={removeItem}
                    />
                ))
            )}
        </div>
    );

};
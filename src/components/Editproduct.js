import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';

export default function Editproduct(props){
    const[open, setOpen] = React.useState(false);
    const[category, setCategory] = React.useState([]);
    const[product, setProduct] = React.useState({name: '', cultivar:'', description: '',
     producer: '', country: '', price: '', category: ''})

    const handleClickOpen = () =>{
        setOpen(true);
        console.log(props.product);
        console.log(props.category);
        setProduct({name: props.product.name, cultivar: props.product.cultivar, description: props.product.description, producer: props.product.producer,
             country: props.product.country, price: props.product.price, category: props.product.category.name});
    }

    const handleClose = () =>{
        props.updateProduct('https://vegetablewholesale.herokuapp.com/products/' + props.product.productId, props.product)//tähän pitää mahdollisesti laittaa jotain muuta
        setOpen(false);
    }

    const handleCancel = () =>{
        setOpen(false);
    }

    const inputChanged = (event) =>{
        setProduct({...product, [event.target.name]: event.target.value});
        //setCategory({...category, [event.target.name]: event.target.value})
    }

    const handleChange = (event) => {
        setCategory({...category, [category]: event.target.value,
        });
      };

    return(
        <div>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
      </Button>
             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit product</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={inputChanged}
                        label="Name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="cultivar"
                        name="cultivar"
                        value={product.cultivar}
                        onChange={inputChanged}
                        label="Cultivar"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="desctiption"
                        name="description"
                        value={product.description}
                        onChange={inputChanged}
                        label="Description"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="producer"
                        name="producer"
                        value={product.producer}
                        onChange={inputChanged}
                        label="Producer"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="country"
                        name="country"
                        value={product.country}
                        onChange={inputChanged}
                        label="Country"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={inputChanged}
                        label="Price(€)"
                        fullWidth
                    />
                    <FormControl >
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <NativeSelect
                            //labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={product.category.name}
                            onChange={handleChange}
                            inputProps={{
                                name: 'category'
                              }}
                        >
                            <option value={product.category.name}>Vihannes</option>
                            <option value={product.category.name}>Hedelmä</option>
                            <option value={product.category.name}>Marja</option>
                            </NativeSelect>
                        
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
import React from 'react'
import Button from '@material-ui/core/Button';
import 'react-table-v6/react-table.css'


export default function Login(){
    const[open, setOpen] = React.useState(false);
    const[user, setUser] = React.useState({username: '', password:''});

    const handleClickOpen = () =>{
        setUser({username: '', password: ''});
        setOpen(true);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    return(
        <div>
             <Button color="inherit" style={{marginLeft:'auto'}} onClick={handleClickOpen}>Login</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        value={users.username}
                        onChange={inputChanged}
                        label="Username"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="passwordHash"
                        name="passwordHash"
                        value={users.passwordHash}
                        onChange={inputChanged}
                        label="Password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Login
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function AddCar(props) {
  const [open, setOpen] = useState(false); 
  const[car, setCar] = useState(
    {brand: '', model: '', color: '', fuel: '', year: '', price: ''}
  )
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  };
  const addCar = () => {
    props.saveCar(car);
    handleClose(); 
  }


  return (
    <div style={{margin:10}}>
      <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Add car
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill car information here
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value= {car.brand}
            onChange={e => handleInputChange(e)} 
            label="Brand"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="model"
            value= {car.model}
            onChange={e => handleInputChange(e)} 
            label="Model"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="color"
            value= {car.color}
            onChange={e => handleInputChange(e)} 
            label="Color"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="fuel"
            value= {car.fuel}
            onChange={e => handleInputChange(e)} 
            label="Fuel"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="year"
            type = "number"
            value= {car.year}
            onChange={e => handleInputChange(e)} 
            label="Year"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="price"
            type= "number"
            value= {car.price}
            onChange={e => handleInputChange(e)} 
            label="Price"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCar} color="primary">
            Save
          </Button>

        </DialogActions>
      </Dialog>
    </div>
    </div>
  )
}


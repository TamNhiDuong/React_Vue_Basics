import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false,
        brand: "",
        model: "",
        color: "",
        fuel: "",
        year: "",
        price: ""
    };
}
handleClickOpen = () => {
    this.setState({
        open: true,
        brand: this.props.clickedcar.brand,
        model: this.props.clickedcar.model,
        color: this.props.clickedcar.color,
        fuel: this.props.clickedcar.fuel,
        year: this.props.clickedcar.year,
        price: this.props.clickedcar.price
    });
};
handleClose = () => {
    this.setState({ open: false});
};
handleChange = event => {
    this.setState({ [event.target.id]: event.target.value});
};

updateCar = () => {
    const newCar = {
        brand: this.state.brand,
        model: this.state.model,
        color: this.state.color,
        fuel: this.state.fuel,
        year: this.state.year,
        price: this.state.price  
    };
    this.props.updateCar(this.props.link, newCar);
    this.handleClose();
};
render() {
    return (
        <div>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title"></DialogTitle>
                <DialogContent>
                    <TextField
                    onChange={this.handleChange}
                    autoFocus
                    margin="dense"
                    id="brand"
                    label="Brand"
                    value={this.state.brand}
                    fullWidth
                    />
                    <TextField
                    onChange={this.handleChange}
                    margin="dense"
                    id="model"
                    label="Model"
                    value={this.state.model}
                    fullWidth
                    />
                    <TextField
                    onChange={this.handleChange}
                    margin="dense"
                    id="color"
                    label="Color"
                    value={this.state.color}
                    fullWidth
                    />
                    <TextField
                    onChange={this.handleChange}
                    margin="dense"
                    id="fuel"
                    label="Fuel"
                    value={this.state.fuel}
                    fullWidth
                    />
                    <TextField
                    onChange={this.handleChange}
                    margin="dense"
                    id="year"
                    label="Year"
                    value={this.state.year}
                    fullWidth
                    />
                    <TextField
                    onChange={this.handleChange}
                    margin="dense"
                    id="price"
                    label="Price"
                    value={this.state.price}
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateCar} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="primary">
          EDIT{""}
        </Button>
      </div>
    );
  }
}



               
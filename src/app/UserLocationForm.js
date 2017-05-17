import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Autocomplete from 'react-google-autocomplete';


class UserLocationForm extends Component {
  constructor(props) {
    super(props);
  }

  handleUserInput =(place) => {
    let userLocation = {
      addressName : place.formatted_address,
      lat: place.geometry.viewport.f.b,
      lng: place.geometry.viewport.b.b
    }
    this.props.handleLocationForm(userLocation)
  }

  render() {
        return(
          <div>
            <Autocomplete
                style={{width: '90%' ,height:'40px' ,fontSize: '25px'}}
                onPlaceSelected={(place) => {
                  console.log(place);
                  this.handleUserInput(place)
                }}
                types={['address']}
                componentRestrictions={{country: "IL"}}
            />
          </div>
        )
      }

}

export default UserLocationForm;

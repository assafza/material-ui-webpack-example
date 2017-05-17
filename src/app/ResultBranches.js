import React, {Component} from 'react';
import LocationList from './locationList'
import BestBranch from './BestBranch'

class ResultBranches extends Component {
  constructor(props) {
    super(props);
    this.state ={
      bestBranch :'',
      branchList :[]
    }

  }

  sortArr =(a)=>{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].distance > a[i+1].distance) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return a;
  }



  deg2rad = (deg)=> {
    return deg * (Math.PI/180)
  }

  getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  var dLon = this.deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}
  createListOfNearByBranches =() =>{
    let userLat = this.props.userLocation.lat;
    let userLng = this.props.userLocation.lng;
    for(var i=0; i<this.props.locations.branches.length; i++){
      let branchLat = this.props.locations.branches[i].lat;
      let branchLng = this.props.locations.branches[i].lng;
      let distance = this.getDistanceFromLatLonInKm(userLat,userLng,branchLat,branchLng);
      let branch = {
        brand : this.props.locations.branches[i].brand,
        name : this.props.locations.branches[i].name,
        distance : distance
      }
      var updatedList = this.state.branchList;
      updatedList.push(branch);
    }
    var sortedArray = this.sortArr(updatedList);
    this.setState({
      branchList:sortedArray
    })
  }

  componentWillMount =()=>{
    console.log(this.state)
    this.createListOfNearByBranches();
  }

  render() {
        console.log(this.state.branchList)
        return(
          <div>
            <BestBranch list={this.state.branchList}/>

            My location {this.props.userLocation.addressName}
            <ul>
              <LocationList list={this.state.branchList}/>
            </ul>
          </div>
        )
      }

}

export default ResultBranches;

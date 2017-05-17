import React, {Component} from 'react';

class BestBranch extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      bestBranchName:''
    }
  }
  componentWillMount =() =>{
      var countShufersal =0;
      var countRamiLevi = 0;
      var countMega = 0;
      var bestBranchCounter = 0;
      var bestBranchName = ''
    var arr=this.props.list;
    for (var i=0; i < arr.length; i++){
      if (arr[i].distance > 50){
        break;
      }
      else{
        if (arr[i].brand == 'Shufersal'){
          countShufersal++
        }
        if (arr[i].brand == 'Rami Levi'){
          countRamiLevi++
        }
        if (arr[i].brand == 'Mega'){
          countMega++
        }
      }

    }
    console.log(countShufersal)
    if (bestBranchCounter < countShufersal){
      bestBranchCounter=countShufersal
      bestBranchName='Shufersal'
    }
    if (bestBranchCounter < countMega){
      bestBranchCounter=countMega
      bestBranchName='Mega'
    }
    if (bestBranchCounter < countRamiLevi){
      bestBranchName='Rami Levi'
    }
    this.setState({
      bestBranchName:bestBranchName
    })

  }
    render() {
      console.log(this.state)
      let best = this.state.bestBranchName;
      console.log(best)
        return(
         <div>
            <span>Best branch in your area <h2 className="best">{best}</h2></span>
         </div>
      )
    }
}
export default BestBranch;

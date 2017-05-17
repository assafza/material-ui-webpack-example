
import React from 'react';


class Item extends React.Component {
    render() {
        return (
        <li
          className="item">
            {this.props.brand} -----
            branch {this.props.name} -----
            {this.props.distance} km
        </li>
      )
    }
}

class ItemList extends React.Component {
    render() {
        return(
         <ul className="todo-list">
            {this.props.list.map(branch =>
                <Item
                    key={branch.name}
                    brand={branch.brand}
                    name={branch.name}
                    distance={branch.distance}
                />
            )}
        </ul>
      )
    }
}
export default ItemList;

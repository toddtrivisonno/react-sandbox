import React from 'react';
import { runInThisContext } from 'vm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

//import json?
//create a class or function (state ful/less)
//     // needs constructor?
//     // methods?
//     // map over items?
//     // render?


class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.navArray = ['About', 'Porfolio', <FontAwesomeIcon icon={faArrowUp} />, 'Musings', 'Contact'];
   }

   render() {
      let navButton = this.navArray.map((button, idx) => <a href={"#" + button} className="btn btn-dark"><h3>{button}</h3></a>)

      return (
         <React.Fragment>
            <nav className="navbar bg-dark" >
               {navButton}
            </nav>
         </React.Fragment>
      )

   }


}

export default Navbar;


//export
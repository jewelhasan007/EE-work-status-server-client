import moment from 'moment';
import React from 'react';


const Header = () => {

    return (
        <div> 
             <p>{moment().format(' dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;
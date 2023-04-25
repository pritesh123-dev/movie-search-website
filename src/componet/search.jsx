import React from "react";
import style from './search.module.css'

class Search extends React.Component {

    render() {
        return(
            <div className={style.search}>
                <input type="search" placeholder="Search for Movie Title ..."  onChange={this.props.searchHandler}/>
            </div>
        )
    }
}

export default Search;
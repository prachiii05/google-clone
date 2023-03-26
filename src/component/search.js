import React from "react";
import "./search.css";
// import Searchicon from "@material-ui/icons/Search"; /to build search component/
// import MicIcon from "@material-ui/icons/Mic";
// import { Button } from "@material-ui/core";
import "../component/search.css"
function Search() {
    return (
        <form className="search">
            <div className="search__input">
                {/* <Searchicon className="search__inputIcon" /> */}
                <input />
                {/* <MicIcon /> */}
            </div>
            <div className="search__buttons">
                <button variant="outlined" type="submit">Google Search</button>
                <button variant="outlined">I'm Feeling Lucky</button>
            </div>
        </form>

    );
}
export default Search;
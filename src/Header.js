import React,{ useState }  from 'react';
import "./Header.css";
import AppsIcon from '@material-ui/icons/Apps';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";



function Header() {

    const [inputSearch,setInputSearch] = useState("");


    return (
        <div className="header">
            <div className="header__left">
            <MenuSharpIcon fontSize="medium"/>
                <Link to="/">
                    <img className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
                    alt="" />
                </Link>
   
            </div>

            <div className="header__input">
            <input 
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search"
                type="text" />

                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="header__inputButton"/> 
                </Link>
                      
            </div>


            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsActiveSharpIcon className="header__icon"/>
                <Avatar 
                   alt="Umm mani"
                   src="https://lh3.googleusercontent.com/ogw/ADea4I6M-05e286u43m_Wj0APk7mGJNZWZ4xFs43DWl7cg=s83-c-mo"
                   
                />
            </div>


        </div>
    );
}

export default Header;

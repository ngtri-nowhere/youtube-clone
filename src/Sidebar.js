import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow selected title="Home" Icon={HomeIcon}/>
            <SidebarRow title="Trending" Icon={WhatshotIcon}/>
            <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your Videos" Icon={YouTubeIcon} />
            <SidebarRow title="WatchLate" Icon={WatchLaterIcon} />
            <SidebarRow title="Like" Icon ={ThumbUpAltIcon}  />
            <SidebarRow title="ExpandMore" Icon ={ExpandMoreIcon} />
            <hr />

        </div>
    );
}

export default Sidebar

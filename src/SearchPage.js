import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__fillter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://lh3.googleusercontent.com/XCcyPr1b1yE0GbBp5Qj8GIawa9Njy4UzPwweGHc-P2kXEcV9CpEUEC9eRF3HwBZ7hTFvNhHGP9IHJ5kiv1pcTqpJLVorvMyo5fVdk-nTSfGklPP7QG8mDVJZGNlPhv8pJlMuJoXkUJX78MAubRXe4Oe1YQqbK-nMLwjpBNMF16XQwx-qax-lbnNvUC2G1N7kEpMXHRZHVxFl_dgI4qw40p6VWAXgW-jOC_DOrlag7GIDKP8B_reTB1CGV5AcOzkzsNX46PyK4BDHckq92toiZU4BgWDuXlRGhRwCI7utkkLBSCZnk0-wVDJQtzlPUNvZzuBMnbvwZB1E5n9_VV-RiJEswSbFwvI6JDDyJSTxL9KQ-lRo7TFHTg1QYwNJkHpPfsNRPUobyaqoMI4K0PES3jMyi21580Ydcj0z1eLMmMx5am2KArSZpbiv7GPI9OY8ECEUmNeyb7WLrO4XrT53zt5oLxyuTsvtfreuMoCGcCZjnUfC00SzDi-U9LvEOqsbZsqyt8TYZz5g_4C7xvZ_5xJDr46ZyB68SmgajbvTFa0JjP5jutYe7SzR-S6pSdrFpIaa_mexP4VqTPEKDj1-cAzF1YlBBAHOVTsOmJYt2Y68_FMJgzm8RVF4bIuzd6UvcCHAkwwh8xVwKPffQLjF6Qdt5xKAwZAepzSrrp8sqy1zTkff-XQZrh8VWqxRt8tzEagADUYjeKeN27sW2zrxZoA=w497-h885-no?authuser=0s"
                channel="UMMMMMMA NII"
                verified
                subs="984K "
                noOfVideos={584}
                description="Hey,Im a deverloper . Wanna make thing awesome ?"
            />
            <hr />
            
            <VideoRow 
                views="10.2M"
                subs="865k"
                description="Hello,I do a awesome thing ."
                timestamp="80 min ago"
                channel="Umm Mani"
                title="♪ Let's build a awesome thing."
                image="https://lh3.googleusercontent.com/IYMbrElK5D5eIUfNmwcpxskAHplz4Y9oRTEPsb2FS61O40018uvwufaIsd268zVW5dqAXftXAaQcVpVbIgh_XpizEa0UCaSeEAQD6pocg8iQDX2gI61Tn6gY2519KzXxbx6ygfYZ2tqTA1ufcBJjzep5cDT_yGA4acYID3v051iuWiq70BmSHVbjkVorJmb7d6G4ow9GE-wPGxysbbLvTpH14sv_eqXXFKNPSojhlDsVuy8VjcpxtYTOyYZokr1dyl2pxqWO4krGFuJmNyNb110rwLNkVmyKMIy5PRcoB5h4sloU7rnXGPvYUTvNYl7CzG_MzBfrjQuGbDc1jS7oVaBIgn1k4ESvCiob1d0xkfY3QSrN8szjgCRUqnxaam9HpCqtmSHIHqrBSPVC681qwPPAvvScY3ckjKf-jmP2zAM88QcvHUdmmremTuJ3NWXpDUIh8oJE__ldsIQlcRCUxbwhemjIuTI_KG3O4wkx-yUbLpyLOBvO3Pq172bUj2fcgRhZAqqGJj2NQ0JvV3XGF54RDGT_gIS6E2Gb3Z_Pj0m-hg_T6rNPYKbt0ROXdMrKSzzozKNEb5QgrjF0-IfwT7sMqPbWPqaPik1xVvn9AICIdeKSjkicxMdYXuiHw37c9xHNurcv9Jk7rwcxilukoTrbe3SCdVXQzFEO9XRdX2-e5bkEeti_N9N5jTqBcc-jyw3OYfiys9BiLn-QIPN70ZI=w499-h888-no?authuser=0"

            />
            <VideoRow 
                views="12.2M"
                subs="865k"
                description="Hello,Me Again."
                timestamp="80 days ago"
                channel="Umm Mani"
                title="Raining days"
                image="https://lh3.googleusercontent.com/enydIuaxQjoYC_PLCTRfltXc_H5ke4OhKgTV_004iFiqhEEihQOIQxKiTKhYeuTnaJAQ9DloO5s20IEMd8qQTshbgUxWgEat13mLy8FTDPYPzrDeeJYB5BcF90YOi-OARVuCRNtk9D9plaQp9NzkID19r_dw9GlwpzjmvaHAj-zICdTYjpz4gYe7WWFfxt1PJEvW2WYBIwAwXQHVEya4zjqR_yfedBmWzSvpg6Ha8YY26Jhh8IqpllsDSMLuNHKmfxMwK-gi0-v3Wn9OTiCsqx4QMd61BkGJo9471RwNfF_J8ywqbX_fifuBUCPM2XRq6k5MfC1SG3Le2Pd1P89ZwBjLx1QgJy5xllE324Ay7xmTipj61Sn-jsMZMHqK-sqr6RYKs5P7xRl2gpkxxteHzjetUtF7VhHWtytERR6oEo-crrnp3eXUV0G6LWe4Tqp6H-m22Zw4UJIUQpmMUIYECJY41IBxCXBkOz6p-H0KCY6_Lzs320FkhFl7ZJb8KxHhw9LmrPTSsIFDKLCzrvo0Uz0bbLLE9Ztr8q96yigV51XgLLrbhJJYsbavzBvXuaZxsoN5mINtIdLi7fb_O5VWgP1tKMRH8OmWHNLW06EqQBlfsA4hk2jV11A9xmXrbmxjekXzKZnwO5b8WBg-k7boVoB38rUMbBh9t30XxTjZct_PORwrphIazaAEMngV5OfB1mhLEGtyfGz7XJzFPv2hotk=w1183-h664-no?authuser=0"
            />
             <VideoRow 
                views="12.2M"
                subs="865k"
                description="Hello,Me Again."
                timestamp="80 days ago"
                channel="Umm Mani"
                title="Raining days"
                image="https://i.pinimg.com/750x/ab/39/d5/ab39d5281da39ac909b38bd65c97f220.jpg"
            />
             <VideoRow 
                views="12.2M"
                subs="865k"
                description="Hello,Me Again."
                timestamp="80 days ago"
                channel="Umm Mani"
                title="Raining days"
                image="https://lh3.googleusercontent.com/7PMWYeCMzQi6eP_9jY6j8P0WgK3j5NeqmRvhnF42lZFLXtk1gl5JMCXey6Gd-lUnT0mf5nN52RAtzmfWbZqFwBaNu1JyrYwtaGGcNJ0sqKviHdZArjIfohpUpwq3rEMGfEr1i_oy11G4qCvDm9GP0Rf84IRH6bSaPeMCWe0pqUYYXoe6_Sq43qsgOo-RF5WsUCoXM-Tz6Aoi4qpzPrqMkTGGk2OJuQjeY19H_fJLYbG9t57y2KlXNKJzDKAHenM6s6pAN_omU35D9RM-G9h4P9vm98CQ3MgVPLTvWrZYFlJS7XMWKAFQ6T2_fDJ6gaBeCIGsnwfll0Dayi25uveFdKPhYr34F5yMVSu4qQ2WwMwwf4kbrfzUKTI0UfIhEzqNhdbEpmZH8lIUHtG_jnRG2CxRW0XJjZOqMzqnCxihdE2Z_l6MeZIyO_43g4HtRuZp9O7abMy3k0JjJJ3ytJYmZf67VJtGqUeEQVpERYRwnh8go7q1XIAEn0r92BRqjW2Ywy3SMb0ZXg6_DtNH3Pg52nezJusvrEhksCy1UJvoi7qbl0D6RMnpuv3sOduuNfBeFWLLRPlpA8XgquEUlWKYPNf0wHwhdMv1q6ESvUKNyPEj59QRTf09KZmv8cBXNK456wXzzSnmzTMTiUOQ1HesOHnZuBnrPmxYFE_HHZcmn7nzf3UIeI0GKkXGBzm3j_CF0FEZ6X6tMn4TZgheaYJMLps=w1184-h888-no?authuser=0"
            />
             <VideoRow 
                views="12.2M"
                subs="865k"
                description="Hello,Me Again."
                timestamp="80 days ago"
                channel="Umm Mani"
                title="Raining days"
                image="https://i.pinimg.com/750x/ab/1b/ec/ab1becabac3ece01857a1b506b6014c6.jpg"
            />


        </div>
    );
}

export default SearchPage;

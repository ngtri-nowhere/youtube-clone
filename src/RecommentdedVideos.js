import React from 'react'
import "./RecommentdedVideos.css";
import VideoCard from "./VideoCard.js"

function RecommentdedVideos() {
    return (
        <div className="recommentded">
            <h2>Recomment</h2>
            <div className="recommentded__videos">
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />
                <VideoCard 
                    title="Can i become a fullstack-developer ?"
                    views="1.2M"
                    timestamp="2 days ago"
                    channelImage="https://lh3.googleusercontent.com/clYCms2F0sUBthFdzMUSh8HSVzeIcDKbcpSfiPeDr8J8HdwpWVxHS8BULhggyaWWxHFlPFgKg1g6_X3Ehachmw3xiTKoUp5zn0asNBmWYcoewh496MEn92ggj6llyUFgRDqfQ9N4EsY0NGkkpR4YtMhJbSgzlrdWruXouzxidqcsNM24Zp1cZOITxv_dJuOGUpBUDJE4dP1OyamO9fliyP_yHLElkuPXHLwAFk1VosmQ985yFB4NcTj2iQ0jhcStPdUHycUjdB-SOAlhgrhqcPqP7eS50HNHUYklG6hfOYG8Ibg3BpbPbqSS6Qep_UWb8BK3iIGRFof21rFw27JxViYWCbZDDFSrGVFMyhRv8o0wY6ljXdPBCSKTRGXU6IFFo6W55ZItb5Q9AS2Fz6NagU_-dFon-VMZ9fG7vJF_CDVip9OK-5GCr0ZxYhzTqMpY-BLJr_fS78Fs_L_WDSTPM0qu_lUDn2e8alSO_ryEfI5INwrTHSyOqM4i7PS_ZqpE7l_tmVx_kJaJFVTV3bSNfmMuy8QPimBWlMjU4b5ZUMEFXzobTwiOfhUioWcC86cgcWWFqv8S8IXiMI9zwCRmE4g-0zkUnEP_5TBwUW3tL-oXPcxYBQkmipZkibKLgGAHtqs2l6p3BG7TQj-yCUcgR3WVHsYz_bGtDcqn6pLl3jxZX9xufakMCZ6DL9AXG7L_l57wOXt06g0fa0s4caiVCK0=w124-h220-no?authuser=0"
                    channel="Ummani"
                    image="https://lh3.googleusercontent.com/iE-hvo9MTocfEmvAaYy4jIxGkdJgufJ_apRQTwXTg8LFY9tWc3UuimxnQKChuaCbUSh-e085KXO1kleecqd-tQqQNaAy7dKQN0W5Fi1iF-R6DgsWw_cwlYrdQYiwx6c0qKUxzZtsIv5P_TyxfGbMGB-G3EGBglEJ07veKYtJBlu82Im4fq2S0ul9BusGhETS5RQT02HmfG8_itnHBymu_Sl3aUngdBJJ7pJ8DD8nXHHX5gq88SwDC_ZLTdOAThykhdXHN2g6WwiLDD49Hov4uJ6iq7Nep0Y02YVoSGQdk255-Fnt9vd6RK1pVd6FS7JtE0-akUvJ6ujxw8ReTppC_uSBDe6kBhvVl3DL9swcZBY87vVaSIKVgcQk9qYYJDoZoGMjlXP7hIMPmBMe39xIMtW05hctU2Z6hTmiUE2hBm26ZhR0I5CJ5P9OKBIC5SoA0stxsQT9KwmbDKgEwt1ydwFWhdX1WoWOU6GtAqZhUv7a71QJ3zOSGmvcRndaURXI8HG0Idx4LGvDKUV7SsOAWVoYibFm0ZwDbMpUtA1i2K27xv9f0lQ-7hhr0Qwv3au6p0bZDHTMKhwNX4g0qhDTZy4gwAkedMan0Ef9equGc5nz_0l8_M5r_8adIe8mFmqHXb1Byt-dL__81WuuIpI6FLWD_qn6GmG7hRgcURRGXWx9fTHwG9FpBJYMiXUgzYqoGx9To-JgstIBdvT2yM1ebHI=w499-h888-no?authuser=0"
                />




            </div>

        </div>
    );
};

export default RecommentdedVideos;

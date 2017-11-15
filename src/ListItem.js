import React, { Component } from 'react';
import Listcss from './List.css';

class ListItem extends React.Component {
    render(){
        return (
            <div className="listEntry">
                <div className="rankAndVote">
                    <h1>1</h1>
                    <a href="#"><p>up</p></a>
                    <a href="#"><p>down</p></a>
                </div>
                <div className="listItem">
                    <a href="#">
                        <h2 className="artTitle">Cool article title</h2>
                    </a>
                    <p className="authoredBy">Submitted 6 hours ago by <a href="#">'MyMainManBobby'</a></p>
                    <div className="listLinks">
                        <a href="#">
                            <p>2112 comments</p>
                        </a>
                        <a href="#">
                            <p>share</p>
                        </a>
                        <a href="#">
                            <p>save</p>
                        </a>
                        <a href="#">
                            <p>hide</p>
                        </a>
                        <a href="#">
                            <p>report</p>
                        </a>
                    </div> 
                </div>
            </div>
            

        )
    }
}
export default ListItem;
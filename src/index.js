import React, { Component } from 'react';
import './ListLoading.css';

class ListShimmer extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-loading">
          <div className="animated-background">
          
            <div className="list-loading-item"></div>
            <div className="list-loading-item separator"></div>
            <div className="list-loading-item separator line-separator"></div>


            <div className="list-loading-item description-large"></div>
            <div className="list-loading-item separator"></div>
            <div className="list-loading-item separator line-separator"></div>

            <div className="list-loading-item description-medium"></div>
            <div className="list-loading-item separator"></div>
            <div className="list-loading-item separator line-separator"></div>


            <div className="list-loading-item description-short"></div>
            <div className="list-loading-item separator"></div>
            <div className="list-loading-item separator line-separator"></div>

          </div>
        </div>
      </div>
    );
  }
}

export default ListShimmer;
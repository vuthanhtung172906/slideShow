import React from "react"

class Nav extends React.Component{
    render(){
        return(
            <div className="row">
            <div className="prev" onClick={this.props.clickPrev}>
              <img src="image/prev.png" alt=""/>
            </div>
            <div className="next" onClick={this.props.clickNext}>
              <img src="image/next.png" alt=""/>
            </div>
          </div>
        )
    }
}

export default Nav;
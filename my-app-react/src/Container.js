import React from 'react';
export class Container extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='container-title'>
                {this.props.title}

                </div>
                <span><p className='p-text'>Green is my favorite color</p></span>

                <div>
                {this.props.children}
                </div>
            </div>
        )
    }
}
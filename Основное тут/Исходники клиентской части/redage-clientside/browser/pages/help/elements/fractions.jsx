import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fractions extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="content">
                    
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Fractions);
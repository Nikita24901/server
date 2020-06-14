import React, { Component } from 'react';
import { connect } from 'react-redux';

class Commands extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <table id="command" className="display dataTable" >
                        <thead>
                            <tr>
                                <th>Команда</th>
                                <th>Описание</th>
                                <th>Доступно</th>
                            </tr>
                        </thead>
                        <tbody className="command-table">
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Commands);
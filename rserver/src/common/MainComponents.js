import React from 'react';
import Resource from './Resourse';
import Navbar from './Navbar';
import Performance from './Performance';
import Commerce from './Commerce';
import Forum from './Forum'

class MainComponents extends React.Component{

    constructor(){
        super();
        this.state={
            user: ''
        }
    }

    componentDidMount(){
        this.setState({
            user: this.state.user
        })
    }
    render(){
        return(
            <>
                <Navbar user={this.props.user}  />
                
                <div className="row">
                    <div className="col-3">
                    <div className="nav flex-column nav-pills bg-light" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Resources</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Forum</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Buy/Sell/Rent</a>
                    </div>
                    </div>
                    <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Graph on Performance</div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Resource /></div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Forum and Chat</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Buy, Sell and Rent</div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MainComponents;
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{

    addRes = () =>
    {
        this.props.RestaurantStore.addRes(this.props.GeneralStore.name,this.props.GeneralStore.numPeople)
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>You have {this.props.RestaurantStore.restPopulation} </div>
                <div id="completedTables">You had {this.props.RestaurantStore.completedTables} tables</div>
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <ResInput />
                <button id="addRes" onClick={this.addRes}>
                    Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                    Reservations:
                {
                   this.props.RestaurantStore.reservations.map(r => 
                     <Reservation key={r.id} reservation={r}/>)
                }
                {/* Map reservation data to Reservation components here */}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))
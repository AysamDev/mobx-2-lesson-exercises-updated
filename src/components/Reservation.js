import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    completeRes = () =>
    {
        this.props.RestaurantStore.completeRes(this.props.reservation.id)
    }
    seatRes = () =>
    {
        this.props.RestaurantStore.seatRes(this.props.reservation.id)
    }
    render() {
        let reservation = this.props.reservation
        return (
            <div className={reservation.completed?"conditional":null}>
                <div>name: {reservation.name} </div>
                <div>people: {reservation.numPeople}</div>
                <button onClick={this.seatRes}>seat reservation</button>
                <button onClick={this.completeRes}>complete reservation</button>
            </div>
        )
    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation))
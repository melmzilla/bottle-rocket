import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

    constructor(props) {
        super();
        
        this.state = {
                selectedRestaurant: null,
                showingInfoWindow: false,
                activeMarker: {},
                selectedPlace: {}
        }
        this.getEats = this.getEats.bind(this); //bind function
        this.onMapClicked = this.onMapClicked.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentDidMount() {
		this.getEats() //call the getFoods function to set state and make the api call.
    }

    getEats(){
        fetch('https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/br-codingexams/restaurants.json') // added cors-anywhere to overcome cors error.
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({selectedRestaurant: data.restaurants[0]});
            console.log(this.state.selectedRestaurant);//checking initial return on page load to set first selected to array [0]
        })
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


  render() {
      let eatery = this.state.selectedRestaurant;
      console.log(eatery);
        return (
            <div>
                {!eatery ? 
                    <p> Loading... </p>
                :
                <div>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                        lat: eatery.location.lat,
                        lng: eatery.location.lng
                        }}
                        onClick={this.onMapClicked}>
                        <Marker
                            onClick={this.onMarkerClick}
                            title={eatery.name}
                            position={{lat: eatery.location.lat, lng: eatery.location.lng}}
                            draggable={false}
                            >
                        </Marker>
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                                <div>
                                    <p><b>{eatery.name}</b></p>
                                    <p style={{marginBottom: '0px'}}>{eatery.location.address}</p>
                                    <p>{eatery.location.city}, {eatery.location.state} {eatery.location.postalCode}</p>
                                    <p>{eatery.contact.formattedPhone}</p>
                                    <p>@{eatery.contact.twitter}</p>
                                </div>
                        </InfoWindow>
                    </Map>
                </div>
                }
            </div>
        );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAY07fspGUIa7sQg9_WluUDSC8iALeWUNc'
})(MapContainer);
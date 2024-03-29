import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

    if (!selectedAirline) return <g></g>;

    // Filter routes for the selected airline
    const selectedRoutes = routes.filter(route => route.AirlineID === selectedAirline);
    
    console.log(selectedRoutes);

    return (
        <g>
            {selectedRoutes.map((route, index) => {
                // Assuming each route has source and destination coordinates {srcLong, srcLat, destLong, destLat}
                const source = projection([route.SourceLongitude, route.SourceLatitude]);
                const destination = projection([route.DestLongitude, route.DestLatitude]);

                return (
                    <line key={index}
                          x1={source[0]} y1={source[1]}
                          x2={destination[0]} y2={destination[1]}
                          stroke={"#992a5b"}
                          strokeWidth={0.4}
                          opacity={0.4}
                          // You might want to adjust stroke and strokeWidth based on your design
                    />
                );
            })}
        </g>
    );
}

function MyComponent() {
    return <div>My Component</div>;
  }
  
  export default MyComponent;
import { locations } from './src/data/locations.js';
import * as L from 'leaflet';
// Map initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.error('Leaflet library not loaded!');
        return;
    }
    // Create the map
    const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: 0, // Prevent zooming out beyond the image
        maxZoom: 1,
        zoomControl: true,
        attributionControl: false,
        maxBounds: [
            [0, 0],
            [1000, 1500]
        ],
        maxBoundsViscosity: 1.0
    });
    // Define bounds for the image overlay
    // Properly defined as LatLngBoundsExpression with explicit typing
    const bounds = [
        [0, 0],
        [1000, 1500]
    ];
    // Add the image overlay
    const image = L.imageOverlay('komodi-canopy-map.jpg', bounds).addTo(map);
    // Fit the map to the bounds
    map.fitBounds(bounds);
    // Create markers with tooltips for each location
    locations.forEach(location => {
        const marker = L.marker(L.latLng(location.coordinates[0], location.coordinates[1]), {
            icon: createCustomIcon()
        }).addTo(map);
        // Create custom tooltip
        const tooltipContent = `
            <div class="custom-tooltip">
                <h3>${location.title}</h3>
                <p>${location.description}</p>
            </div>
        `;
        // Add tooltip to marker
        marker.bindTooltip(tooltipContent, {
            direction: 'top',
            permanent: false,
            sticky: false,
            offset: L.point(0, 0),
            opacity: 1,
            className: 'custom-tooltip-wrapper'
        });
        // Add click handler to show/hide tooltip
        marker.on('click', () => {
            marker.openTooltip();
        });
    });
    // Custom marker icon function
    function createCustomIcon() {
        return L.icon({
            iconUrl: 'komodi-head.png',
            iconSize: [60, 60], // Increased size for the icon
            iconAnchor: [30, 30], // Center point of the icon (half of size)
            tooltipAnchor: [0, 0], // Remove any tooltip offset
        });
    }
    // Add a scale control
    L.control.scale().addTo(map);
    // Add zoom controls
    map.zoomControl.setPosition('topright');
    console.log('Map initialization complete');
});
//# sourceMappingURL=map.js.map
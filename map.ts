interface MapLocation {
    id: string;
    coordinates: [number, number]; // [x, y] as normalized coordinates
    title: string;
    description: string;
}

// Define the locations data
const locations: MapLocation[] = [
  { id: 'location-2', coordinates: [711.5,1435], title: 'Homestead #7535', description: '' },
  { id: 'location-3', coordinates: [681.5,1451.5], title: 'Homestead #7460', description: '' },
  { id: 'location-4', coordinates: [664,1444], title: 'Homestead #8916 (Corrupted!)', description: '' },
  { id: 'location-5', coordinates: [682.5,1427.5], title: 'Settlement #3736', description: '' },
  { id: 'location-6', coordinates: [702.5,1406.5], title: 'Homestead #10830', description: '' },
  { id: 'location-7', coordinates: [672.5,1404.5], title: 'Homestead #9295', description: '' },
  { id: 'location-8', coordinates: [658.5,1412.5], title: 'Homestead #9719', description: '' },
  { id: 'location-9', coordinates: [654.5,1429], title: 'Homestead #9748', description: '' },
  { id: 'location-10', coordinates: [585.5,1383.5], title: 'Settlement #3447', description: '' },
  { id: 'location-11', coordinates: [568,1364], title: 'Settlement #3970', description: '' },
  { id: 'location-12', coordinates: [547,1383], title: 'Settlement #4150', description: '' },
  { id: 'location-13', coordinates: [680,1172], title: 'Settlement #3774', description: '' },
  { id: 'location-14', coordinates: [676.5,1190.5], title: 'Settlement #3722', description: '' },
  { id: 'location-15', coordinates: [681.5,1219.5], title: 'Settlement #4491', description: '' },
  { id: 'location-16', coordinates: [822.5,922], title: 'Homestead #10864', description: '' },
  { id: 'location-17', coordinates: [807,940.5], title: 'Homestead #9347', description: '' },
  { id: 'location-18', coordinates: [797,928.5], title: 'Settlement #3305', description: '' },
  { id: 'location-19', coordinates: [778.5,945], title: 'Homestead #9058', description: '' },
  { id: 'location-20', coordinates: [770,928.5], title: 'Homestead #9621', description: '' },
  { id: 'location-21', coordinates: [770.5,913], title: 'Settlement #3469', description: '' },
  { id: 'location-22', coordinates: [778,896.5], title: 'Homestead #10849', description: '' },
  { id: 'location-23', coordinates: [797.5,887.5], title: 'Homestead #7856', description: '' },
  { id: 'location-24', coordinates: [820.5,896], title: 'Homestead #10099', description: '' },
  { id: 'location-25', coordinates: [972,737], title: 'Homestead #9672', description: '' },
  { id: 'location-26', coordinates: [968,725], title: 'Homestead #8603', description: '' },
  { id: 'location-27', coordinates: [962.5,713.5], title: 'Homestead #8987 (Corrupted!)', description: '' },
  { id: 'location-28', coordinates: [907,636.5], title: 'Homestead #10421', description: '' },
  { id: 'location-29', coordinates: [907,622], title: 'Homestead #7511', description: '' },
  { id: 'location-30', coordinates: [906.5,606.5], title: 'Homestead #8386', description: '' },
  { id: 'location-31', coordinates: [885,622], title: 'Homestead #7589', description: '' },
  { id: 'location-32', coordinates: [908,504], title: 'Homestead #9483', description: '' },
  { id: 'location-33', coordinates: [901,489], title: 'Homestead #10541', description: '' },
  { id: 'location-34', coordinates: [884,473.5], title: 'Homestead #10737', description: '' },
  { id: 'location-35', coordinates: [863.5,475.5], title: 'Homestead #7736', description: '' },
  { id: 'location-36', coordinates: [886,503.5], title: 'Homestead #10494', description: '' },
  { id: 'location-37', coordinates: [470,1171], title: 'Settlement #4609', description: '' },
  { id: 'location-38', coordinates: [460,1156], title: 'Homestead #8796', description: '' },
  { id: 'location-39', coordinates: [449,1173.5], title: 'Homestead #7904', description: '' },
  { id: 'location-40', coordinates: [479.5,1033.5], title: 'Homestead #9872', description: '' },
  { id: 'location-41', coordinates: [471,1055], title: 'Homestead #7843', description: '' },
  { id: 'location-42', coordinates: [461.5,1038], title: 'Homestead #10090', description: '' },
  { id: 'location-43', coordinates: [445,1031.5], title: 'Homestead #10812', description: '' },
  { id: 'location-44', coordinates: [446,1053], title: 'Settlement #3655', description: '' },
  { id: 'location-45', coordinates: [434,1066.5], title: 'Homestead #10372', description: '' },
  { id: 'location-46', coordinates: [428,1081.5], title: 'Settlement #3818', description: '' },
  { id: 'location-47', coordinates: [446.5,1086.5], title: 'Homestead #8372', description: '' },
  { id: 'location-48', coordinates: [443,1106], title: 'Homestead #8577', description: '' },
  { id: 'location-49', coordinates: [429,1101], title: 'Settlement #4154', description: '' },
  { id: 'location-50', coordinates: [365.5,1056], title: 'Homestead #8077', description: '' },
  { id: 'location-51', coordinates: [366,1097], title: 'Homestead #7484', description: '' },
  { id: 'location-52', coordinates: [523.5,749.5], title: 'Settlement #3836', description: '' },
  { id: 'location-53', coordinates: [524.5,778], title: 'Settlement #3335', description: '' },
  { id: 'location-54', coordinates: [525.5,734.5], title: 'Homestead #10665', description: '' },
  { id: 'location-55', coordinates: [534.5,764], title: 'Homestead #8397', description: '' },
  { id: 'location-56', coordinates: [543,748], title: 'Homestead #8388', description: '' },
  { id: 'location-57', coordinates: [551.5,780.5], title: 'Homestead #8403', description: '' },
  { id: 'location-58', coordinates: [568.5,794], title: 'Settlement #3375', description: '' },
  { id: 'location-59', coordinates: [606,780], title: 'Settlement #4570', description: '' },
  { id: 'location-60', coordinates: [612.5,765.5], title: 'Homestead #10488', description: '' },
  { id: 'location-61', coordinates: [597.5,757], title: 'Homestead #7857', description: '' },
  { id: 'location-62', coordinates: [616,750], title: 'Settlement #4672', description: 'Owner: @Wikilander' },
  { id: 'location-63', coordinates: [615.5,727], title: 'Homestead #9820', description: '' },
  { id: 'location-64', coordinates: [595.5,738.5], title: 'Homestead #8139', description: '' },
  { id: 'location-65', coordinates: [593.5,726.5], title: 'Settlement #3356', description: '' },
  { id: 'location-66', coordinates: [571.5,727], title: 'Homestead #7790', description: '' },
  { id: 'location-67', coordinates: [573,710.5], title: 'Settlement #3797', description: '' },
  { id: 'location-68', coordinates: [546,730], title: 'Settlement #4273', description: '' },
  { id: 'location-69', coordinates: [567.5,754.5], title: 'Village #151', description: '' },
  { id: 'location-70', coordinates: [284,767.5], title: 'Settlement #3466', description: '' },
  { id: 'location-71', coordinates: [289,744], title: 'Homestead #8194', description: '' },
  { id: 'location-72', coordinates: [264,736.5], title: 'Homestead #8802', description: '' },
  { id: 'location-73', coordinates: [267.5,771.5], title: 'Homestead #7531', description: '' },
  { id: 'location-74', coordinates: [87.5,814], title: 'Homestead #10327', description: '' },
  { id: 'location-75', coordinates: [71,808.5], title: 'Homestead #8732', description: '' },
  { id: 'location-76', coordinates: [69.5,790], title: 'Settlement #3439', description: '' },
  { id: 'location-77', coordinates: [45.5,805], title: 'Settlement #3941', description: '' },
  { id: 'location-78', coordinates: [50,824], title: 'Homestead #9720', description: '' },
  { id: 'location-79', coordinates: [50,841], title: 'Homestead #8515', description: '' },
  { id: 'location-80', coordinates: [30.5,840], title: 'Settlement #4406', description: '' },
  { id: 'location-81', coordinates: [42,867], title: 'Settlement #3332', description: '' },
  { id: 'location-82', coordinates: [61.5,859.5], title: 'Homestead #8219', description: '' },
  { id: 'location-83', coordinates: [395,444.5], title: 'Settlement #3863', description: '' },
  { id: 'location-84', coordinates: [401.5,428.5], title: 'Homestead #8393', description: '' },
  { id: 'location-85', coordinates: [419,423.5], title: 'Settlement #4610', description: 'Owner: @Mayky' },
  { id: 'location-86', coordinates: [443.5,404.5], title: 'Settlement #4304 ', description: 'Owner: @IrvinG' },
  { id: 'location-87', coordinates: [424,403.5], title: 'Homestead #10231', description: '' },
  { id: 'location-88', coordinates: [426.5,390], title: 'Settlement #3683', description: 'Owner: @villanegreto LISTED' },
  { id: 'location-89', coordinates: [420,372], title: 'Homestead #10002', description: '' },
  { id: 'location-90', coordinates: [411.5,387], title: 'Homestead #9311', description: '' },
  { id: 'location-91', coordinates: [401,367], title: 'Settlement #3927', description: '' },
  { id: 'location-92', coordinates: [389,383], title: 'Homestead #8377', description: '' },
  { id: 'location-93', coordinates: [378.5,371], title: 'Homestead #8119', description: '' },
  { id: 'location-94', coordinates: [359.5,378], title: 'Settlement #3520 (Corrupted!)', description: '' },
  { id: 'location-95', coordinates: [349.5,408.5], title: 'Settlement #4073', description: '' },
  { id: 'location-96', coordinates: [362,421.5], title: 'Homestead #7845', description: '' },
  { id: 'location-97', coordinates: [365,440], title: 'Settlement #4433', description: '' },
  { id: 'location-98', coordinates: [421,108], title: 'Settlement #3751', description: '' },
  { id: 'location-99', coordinates: [399.5,86.5], title: 'Settlement #4117', description: '' },
  { id: 'location-100', coordinates: [379,57], title: 'Settlement #3493', description: '' }
];

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
            [0, 0] as [number, number],
            [1000, 1500] as [number, number]
        ],
        maxBoundsViscosity: 1.0
    });

    // Define bounds for the image overlay
    const bounds = [
        [0, 0] as [number, number],
        [1000, 1500] as [number, number]
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

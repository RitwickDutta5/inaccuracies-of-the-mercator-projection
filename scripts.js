mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 0],
    zoom: 1,
    projection: 'mercator' // starting projection
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -196.94772150995374,
                        59.35539139286993
                    ],
                    [
                        -179.7721333136734,
                        52.91350866113976
                    ],
                    [
                        -166.89044216646272,
                        41.93091538883769
                    ],
                    [
                        -150.57363337999615,
                        25.618138560014103
                    ],
                    [
                        -140.6976701671349,
                        9.300328143212724
                    ],
                    [
                        -128.24536872483154,
                        -13.712784890258447
                    ],
                    [
                        -111.49917023345766,
                        -34.69459940607184
                    ],
                    [
                        -98.61747908624697,
                        -48.13912822659765
                    ],
                    [
                        -85.30639823412983,
                        -53.80769811133506
                    ],
                    [
                        -55.67850859554528,
                        -58.57837044905636
                    ],
                    [
                        -39.361699809078715,
                        -56.50501728351462
                    ],
                    [
                        -19.18038367844892,
                        -52.781171151412344
                    ],
                    [
                        0.1421530423671129,
                        -49.82966415091233
                    ],
                    [
                        16.029572123926812,
                        -46.09406477362188
                    ],
                    [
                        27.62309415641596,
                        -38.485569062255145
                    ],
                    [
                        34.06393973002133,
                        -28.10378888049464
                    ],
                    [
                        45.22807205760407,
                        -12.458092751056114
                    ],
                    [
                        66.69755730295492,
                        25.230334704617547
                    ]
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#9332a8',
            'line-width': 5
        }
    });

    map.addSource('route1', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -73.80146530693604,
                        -7.395165186012278
                    ],
                    [
                        -34.91848217207087,
                        -7.064636487283849
                    ]
                ],

            }
        }
    });
    map.addLayer({
        'id': 'route1',
        'type': 'line',
        'source': 'route1',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#4287f5',
            'line-width': 5
        }
    });
    map.addSource('route2', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -34.91848217207087,
                        -7.064636487283849
                    ],
                    [
                        -13.019557479503248,
                        8.267176201853573
                    ]
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route2',
        'type': 'line',
        'source': 'route2',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#4287f5',
            'line-width': 5
        }
    });
    map.addSource('route3', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -16.230767376549494,
                        18.79187492954655
                    ],
                    [
                        51.02966022318054,
                        10.713057090648093
                    ]
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route3',
        'type': 'line',
        'source': 'route3',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#a83232',
            'line-width': 5
        }
    });
    map.addSource('route4', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        27.820730070796287,
                        56.26639802495731
                    ],
                    [
                        189.24741226117976,
                        66.29050676710833
                    ]
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route4',
        'type': 'line',
        'source': 'route4',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#a83232',
            'line-width': 5
        }
    });
    map.addSource('route5', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        -68.12310314338144,
                        -55.5143503740539
                    ],
                    [
                        -74.02633231023324,
                        -52.12477125545716
                    ],
                    [
                        -73.94762258800802,
                        -47.29484774363841
                    ],
                    [
                        -73.08181564353696,
                        -41.33290682571447
                    ],
                    [
                        -70.18138734585975,
                        -18.545167321503257
                    ]
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route5',
        'type': 'line',
        'source': 'route5',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#32a8a4',
            'line-width': 5
        }
    });
    map.addSource('route6', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [
                        24.864984672872026,
                        35.21109407211027
                    ],
                    [
                        21.48687710596974,
                        69.71484520487707
                    ],
                ],
            }
        }
    });
    map.addLayer({
        'id': 'route6',
        'type': 'line',
        'source': 'route6',
        'layout': {
            'line-join': 'round',
            'line-cap': 'butt'
        },
        'paint': {
            'line-color': '#32a8a4',
            'line-width': 5
        }
    });

});
document.getElementById('fit-africa').addEventListener('click', () => {
    map.fitBounds([
        [-29.04838, -36.71636], // southwestern corner of the bounds
        [63.73029, 38.65663] // northeastern corner of the bounds
    ]);
});
document.getElementById('fit-russia').addEventListener('click', () => {
    map.fitBounds([
        [8.89931, 50.76710], // southwestern corner of the bounds
        [211.61048, 79.21314] // northeastern corner of the bounds
    ]);
});

document.getElementById('fit-brazil').addEventListener('click', () => {
    map.fitBounds([
        [-81.74770, -22.81869], // southwestern corner of the bounds
        [27.72190, 10.00253] // northeastern corner of the bounds
    ]);
});

document.getElementById('fit-chile').addEventListener('click', () => {
    map.fitBounds([
        [-90.05479, -60.81580], // southwestern corner of the bounds
        [-43.24533, -6.45549] // northeastern corner of the bounds
    ]);
});

document.getElementById('fit-europe').addEventListener('click', () => {
    map.fitBounds([
        [-37.61359, 32.75399], // southwestern corner of the bounds
        [66.13890, 73.63341] // northeastern corner of the bounds
    ]);
});

document.getElementById('fit-startline').addEventListener('click', () => {
    map.fitBounds([
        [125.86135, 36.05715], // southwestern corner of the bounds
        [198.43005, 66.40119] // northeastern corner of the bounds
    ]);
});

document.getElementById('fit-endline').addEventListener('click', () => {
    map.fitBounds([
        [25.59681, -7.92862], // southwestern corner of the bounds
        [103.99326, 48.09928] // northeastern corner of the bounds
    ]);
});

ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3116").setExtent([837531.893193, 1204906.899235, 837690.881274, 1204999.375165]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTraffic_1 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_suelos_4 = new ol.format.GeoJSON();
var features_suelos_4 = format_suelos_4.readFeatures(json_suelos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_suelos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suelos_4.addFeatures(features_suelos_4);
var lyr_suelos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_suelos_4, 
                style: style_suelos_4,
                interactive: true,
    title: 'suelos<br />\
    <img src="styles/legend/suelos_4_0.png" /> Cenizas volcánicas depositadas sobre coluviones y aluviones heterogéneos<br />\
    <img src="styles/legend/suelos_4_1.png" /> Depósitos aluviales heterogéneos y cenizas volcánicas<br />\
    <img src="styles/legend/suelos_4_2.png" /> Depósitos aluviales heterogéneos y heterométricos con cobertura de cenizas volcánicas<br />\
    <img src="styles/legend/suelos_4_3.png" /> Rocas metamórficas (esquistos, neisses) con cobertura de cenizas volcánicas<br />\
    <img src="styles/legend/suelos_4_4.png" /> Zona urbana<br />\
    <img src="styles/legend/suelos_4_5.png" /> <br />'
        });
var lyr_NDMI_SANPEDRO_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDMI_SANPEDRO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDMI_SANPEDRO_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8423160.000000, 711450.779284, -8399260.000000, 728458.564750]
                            })
                        });
var lyr_NDVI_SANPEDRO_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_SANPEDRO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_SANPEDRO_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8423160.000000, 711450.779284, -8399260.000000, 728458.564750]
                            })
                        });
var lyr_Plagas_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Plagas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Plagas_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8409878.599357, 719036.071342, -8409749.934076, 719132.176935]
                            })
                        });
var lyr_ConsumoMS_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Consumo MS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ConsumoMS_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8409709.961059, 719201.570501, -8409626.508323, 719290.698359]
                            })
                        });
var lyr_Proteina_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Proteina",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Proteina_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8409527.093720, 719082.595263, -8409373.159575, 719257.471909]
                            })
                        });
var format_Predios_10 = new ol.format.GeoJSON();
var features_Predios_10 = format_Predios_10.readFeatures(json_Predios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Predios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_10.addFeatures(features_Predios_10);
var lyr_Predios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_10, 
                style: style_Predios_10,
                interactive: true,
                title: '<img src="styles/legend/Predios_10.png" /> Predios'
            });
var format_potrerosmontana_11 = new ol.format.GeoJSON();
var features_potrerosmontana_11 = format_potrerosmontana_11.readFeatures(json_potrerosmontana_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_potrerosmontana_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potrerosmontana_11.addFeatures(features_potrerosmontana_11);
var lyr_potrerosmontana_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_potrerosmontana_11, 
                style: style_potrerosmontana_11,
                interactive: true,
    title: 'potrerosmontana<br />\
    <img src="styles/legend/potrerosmontana_11_0.png" /> BOSQUE<br />\
    <img src="styles/legend/potrerosmontana_11_1.png" /> CAMINO<br />\
    <img src="styles/legend/potrerosmontana_11_2.png" /> CONSTRUCCION<br />\
    <img src="styles/legend/potrerosmontana_11_3.png" /> GALPON<br />\
    <img src="styles/legend/potrerosmontana_11_4.png" /> NACIMIENTO<br />\
    <img src="styles/legend/potrerosmontana_11_5.png" /> PORCICOLA<br />\
    <img src="styles/legend/potrerosmontana_11_6.png" /> POTRERO<br />\
    <img src="styles/legend/potrerosmontana_11_7.png" /> RIO<br />\
    <img src="styles/legend/potrerosmontana_11_8.png" /> SINCOVERTURA<br />\
    <img src="styles/legend/potrerosmontana_11_9.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(false);lyr_GoogleTraffic_1.setVisible(false);lyr_GoogleTerrain_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(true);lyr_suelos_4.setVisible(false);lyr_NDMI_SANPEDRO_5.setVisible(false);lyr_NDVI_SANPEDRO_6.setVisible(false);lyr_Plagas_7.setVisible(false);lyr_ConsumoMS_8.setVisible(false);lyr_Proteina_9.setVisible(false);lyr_Predios_10.setVisible(true);lyr_potrerosmontana_11.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_suelos_4,lyr_NDMI_SANPEDRO_5,lyr_NDVI_SANPEDRO_6,lyr_Plagas_7,lyr_ConsumoMS_8,lyr_Proteina_9,lyr_Predios_10,lyr_potrerosmontana_11];
lyr_suelos_4.set('fieldAliases', {'PAISAJE': 'PAISAJE', 'CLIMA': 'CLIMA', 'RELIEVE': 'RELIEVE', 'LITOLOGÍA': 'LITOLOGÍA', 'CARACTERIS': 'CARACTERIS', });
lyr_Predios_10.set('fieldAliases', {'PK_PREDIOS': 'PK_PREDIOS', });
lyr_potrerosmontana_11.set('fieldAliases', {'Área': 'Área', 'Name': 'Name', 'Clase': 'Clase', });
lyr_suelos_4.set('fieldImages', {'PAISAJE': 'TextEdit', 'CLIMA': 'TextEdit', 'RELIEVE': 'TextEdit', 'LITOLOGÍA': 'TextEdit', 'CARACTERIS': 'TextEdit', });
lyr_Predios_10.set('fieldImages', {'PK_PREDIOS': 'TextEdit', });
lyr_potrerosmontana_11.set('fieldImages', {'Área': 'TextEdit', 'Name': 'TextEdit', 'Clase': 'TextEdit', });
lyr_suelos_4.set('fieldLabels', {'PAISAJE': 'header label', 'CLIMA': 'header label', 'RELIEVE': 'header label', 'LITOLOGÍA': 'header label', 'CARACTERIS': 'header label', });
lyr_Predios_10.set('fieldLabels', {'PK_PREDIOS': 'header label', });
lyr_potrerosmontana_11.set('fieldLabels', {'Área': 'header label', 'Name': 'header label', 'Clase': 'header label', });
lyr_potrerosmontana_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
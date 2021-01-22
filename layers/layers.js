var wms_layers = [];


        var lyr_Raster_0 = new ol.layer.Tile({
            'title': 'Raster',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_city_boundaries_2 = new ol.format.GeoJSON();
var features_city_boundaries_2 = format_city_boundaries_2.readFeatures(json_city_boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_boundaries_2.addFeatures(features_city_boundaries_2);
var lyr_city_boundaries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_city_boundaries_2, 
                style: style_city_boundaries_2,
                interactive: true,
                title: '<img src="styles/legend/city_boundaries_2.png" /> city_boundaries'
            });
var format_data_3 = new ol.format.GeoJSON();
var features_data_3 = format_data_3.readFeatures(json_data_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_3.addFeatures(features_data_3);
var lyr_data_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_3, 
                style: style_data_3,
                interactive: true,
                title: '<img src="styles/legend/data_3.png" /> data'
            });
var format_camping_areas_4 = new ol.format.GeoJSON();
var features_camping_areas_4 = format_camping_areas_4.readFeatures(json_camping_areas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camping_areas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camping_areas_4.addFeatures(features_camping_areas_4);
var lyr_camping_areas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_camping_areas_4, 
                style: style_camping_areas_4,
                interactive: true,
                title: '<img src="styles/legend/camping_areas_4.png" /> camping_areas'
            });
var format_routes_5 = new ol.format.GeoJSON();
var features_routes_5 = format_routes_5.readFeatures(json_routes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_routes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_5.addFeatures(features_routes_5);
var lyr_routes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_5, 
                style: style_routes_5,
                interactive: true,
                title: '<img src="styles/legend/routes_5.png" /> routes'
            });
var format_nearest_6 = new ol.format.GeoJSON();
var features_nearest_6 = format_nearest_6.readFeatures(json_nearest_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nearest_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nearest_6.addFeatures(features_nearest_6);
var lyr_nearest_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nearest_6, 
                style: style_nearest_6,
                interactive: true,
                title: '<img src="styles/legend/nearest_6.png" /> nearest'
            });

lyr_Raster_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_city_boundaries_2.setVisible(true);lyr_data_3.setVisible(true);lyr_camping_areas_4.setVisible(true);lyr_routes_5.setVisible(true);lyr_nearest_6.setVisible(true);
var layersList = [lyr_Raster_0,lyr_OSMStandard_1,lyr_city_boundaries_2,lyr_data_3,lyr_camping_areas_4,lyr_routes_5,lyr_nearest_6];
lyr_city_boundaries_2.set('fieldAliases', {'ad': 'ad', 'abcSira': 'abcSira', 'plaka': 'plaka', });
lyr_data_3.set('fieldAliases', {'x': 'x', 'y': 'y', 'name': 'name', 'descriptio': 'descriptio', 'gx_media_l': 'gx_media_l', 'year': 'year', 'rate': 'rate', });
lyr_camping_areas_4.set('fieldAliases', {'x': 'x', 'y': 'y', 'name': 'name', 'description': 'description', 'gx_media_links': 'gx_media_links', 'year': 'year', 'rate': 'rate', });
lyr_routes_5.set('fieldAliases', {'id': 'id', 'kampyeri': 'kampyeri', 'sehirler': 'sehirler', 'km': 'km', 'sure': 'sure', });
lyr_nearest_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', });
lyr_city_boundaries_2.set('fieldImages', {'ad': 'TextEdit', 'abcSira': 'Range', 'plaka': 'Range', });
lyr_data_3.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'gx_media_l': 'TextEdit', 'year': 'TextEdit', 'rate': 'TextEdit', });
lyr_camping_areas_4.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'gx_media_links': 'TextEdit', 'year': '', 'rate': '', });
lyr_routes_5.set('fieldImages', {'id': 'TextEdit', 'kampyeri': 'TextEdit', 'sehirler': 'TextEdit', 'km': 'TextEdit', 'sure': 'TextEdit', });
lyr_nearest_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'Range', });
lyr_city_boundaries_2.set('fieldLabels', {'ad': 'no label', 'abcSira': 'no label', 'plaka': 'no label', });
lyr_data_3.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'name': 'no label', 'descriptio': 'no label', 'gx_media_l': 'no label', 'year': 'no label', 'rate': 'no label', });
lyr_camping_areas_4.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'name': 'no label', 'description': 'no label', 'gx_media_links': 'no label', 'year': 'no label', 'rate': 'no label', });
lyr_routes_5.set('fieldLabels', {'id': 'no label', 'kampyeri': 'no label', 'sehirler': 'no label', 'km': 'no label', 'sure': 'no label', });
lyr_nearest_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', });
lyr_nearest_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
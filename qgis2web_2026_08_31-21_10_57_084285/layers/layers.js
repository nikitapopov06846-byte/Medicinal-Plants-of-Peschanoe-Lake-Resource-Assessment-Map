var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Растения',
                interactive: true,
    title: 'Растения<br />\
    <img src="styles/legend/_1_0.png" /> Брусника обыкновенная <br />\
    <img src="styles/legend/_1_1.png" /> Василек синий (посевной)<br />\
    <img src="styles/legend/_1_2.png" /> Вереск обыкновенный <br />\
    <img src="styles/legend/_1_3.png" /> Земляника лесная <br />\
    <img src="styles/legend/_1_4.png" /> Иван-чай узколистный (кипрей)<br />\
    <img src="styles/legend/_1_5.png" /> Подорожник большой<br />\
    <img src="styles/legend/_1_6.png" /> Черника<br />\
    <img src="styles/legend/_1_7.png" /> Шиповник коричный (дикорост)<br />\
    <img src="styles/legend/_1_8.png" /> <br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Экологические зоны',
                interactive: true,
    title: 'Экологические зоны<br />\
    <img src="styles/legend/_2_0.png" /> (Желтая зона)<br />\
    <img src="styles/legend/_2_1.png" /> Зеленая зона<br />\
    <img src="styles/legend/_2_2.png" /> Красная зона<br />\
    <img src="styles/legend/_2_3.png" /> <br />' });
var format_PC1_3 = new ol.format.GeoJSON();
var features_PC1_3 = format_PC1_3.readFeatures(json_PC1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PC1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PC1_3.addFeatures(features_PC1_3);
var lyr_PC1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PC1_3, 
                style: style_PC1_3,
                popuplayertitle: 'геотрекинг PC1',
                interactive: true,
                title: '<img src="styles/legend/PC1_3.png" /> геотрекинг PC1'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_PC1_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2,lyr_PC1_3];
lyr__1.set('fieldAliases', {'fid': 'fid', 'Вид': 'Вид', 'Дата отметки': 'Дата отметки', 'Жизненность': 'Жизненность', 'Фенофаза': 'Фенофаза', 'Местообитания (биотоп)': 'Местообитания (биотоп)', 'Ярус/слой': 'Ярус/слой', 'Тип почвы': 'Тип почвы', 'Увлажнение': 'Увлажнение', 'Код маршрута (номер)': 'Код маршрута (номер)', 'ID для сбора': 'ID для сбора', 'Примечание': 'Примечание', 'Обилие растений': 'Обилие растений', 'фото': 'фото', 'колличество': 'колличество', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Тип зоны': 'Тип зоны', });
lyr_PC1_3.set('fieldAliases', {'fid': 'fid', 'геотрек': 'геотрек', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'Вид': 'ValueMap', 'Дата отметки': 'DateTime', 'Жизненность': 'ValueMap', 'Фенофаза': 'ValueMap', 'Местообитания (биотоп)': 'ValueMap', 'Ярус/слой': 'ValueMap', 'Тип почвы': 'ValueMap', 'Увлажнение': 'ValueMap', 'Код маршрута (номер)': 'UniqueValues', 'ID для сбора': 'UniqueValues', 'Примечание': 'TextEdit', 'Обилие растений': 'ValueMap', 'фото': 'ExternalResource', 'колличество': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'Тип зоны': 'ValueMap', });
lyr_PC1_3.set('fieldImages', {'fid': 'TextEdit', 'геотрек': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'Вид': 'no label', 'Дата отметки': 'no label', 'Жизненность': 'no label', 'Фенофаза': 'no label', 'Местообитания (биотоп)': 'no label', 'Ярус/слой': 'no label', 'Тип почвы': 'no label', 'Увлажнение': 'no label', 'Код маршрута (номер)': 'no label', 'ID для сбора': 'no label', 'Примечание': 'no label', 'Обилие растений': 'no label', 'фото': 'no label', 'колличество': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'Тип зоны': 'no label', });
lyr_PC1_3.set('fieldLabels', {'fid': 'no label', 'геотрек': 'no label', });
lyr_PC1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
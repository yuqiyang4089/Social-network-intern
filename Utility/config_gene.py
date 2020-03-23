import json

# in order to be very generic, everything should be parsed recursively.
configFile = {}
defaultVisibility = True
individualPropertyTemplate = {
    'isLeaf': True,
    'type': '',
    'property name': '',
    'default value': None,
    'options': {},
    'metadata': None,
    'visibility': defaultVisibility
}

dropDownMetadata = {}

menuType = ['Node', 'Edge']

subNodeType = ['Global Scale Setting', 'Node Channels', 'Node Filter', 'Node Lable Setting']
subEdgeType = ['Global Scale setting', 'Edge Channels', 'Edge Filter', 'Edge Lable Setting']

# Node menu
individualNodeProperties = {}

individualNodeProperties['Global Scale Setting'] = {}
individualNodeProperties['Global Scale Setting']['Node Size'] = individualPropertyTemplate
individualNodeProperties['Global Scale Setting']['Node Size']['type'] = 'fill_in'
individualNodeProperties['Global Scale Setting']['Node Size']['property name']= 'Node Size'
individualNodeProperties['Global Scale Setting']['Node Size']['default value'] = 2

individualNodeProperties['Global Scale Setting']['Node Color'] = individualPropertyTemplate
individualNodeProperties['Global Scale Setting']['Node Color']['type'] = 'fill_in'
individualNodeProperties['Global Scale Setting']['Node Color']['property name']= 'Node Color'
individualNodeProperties['Global Scale Setting']['Node Color']['default value'] = 'FF0000'

individualNodeProperties['Global Scale Setting']['Node Opacity'] = individualPropertyTemplate
individualNodeProperties['Global Scale Setting']['Node Opacity']['type'] = 'fill_in'
individualNodeProperties['Global Scale Setting']['Node Opacity']['property name']= 'Node Opacity'
individualNodeProperties['Global Scale Setting']['Node Opacity']['default value'] = 100

individualNodeProperties['Global Scale Setting']['Node Border-width'] = individualPropertyTemplate
individualNodeProperties['Global Scale Setting']['Node Border-width']['type'] = 'fill_in'
individualNodeProperties['Global Scale Setting']['Node Border-width']['property name']= 'Node Border-width'
individualNodeProperties['Global Scale Setting']['Node Border-width']['default value'] = 0

individualNodeProperties['Global Scale Setting']['Node Border-color'] = individualPropertyTemplate
individualNodeProperties['Global Scale Setting']['Node Border-color']['type'] = 'fill_in'
individualNodeProperties['Global Scale Setting']['Node Border-color']['property name']= 'Node Border-color'
individualNodeProperties['Global Scale Setting']['Node Border-color']['default value'] = '000000'

individualNodeProperties['Node Channels'] = {}
individualNodeProperties['Node Channels']['Node Size'] = {}
individualNodeProperties['Node Channels']['Node Size']['Node Property'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Size']['Node Property']['type'] = 'populate_selection'
individualNodeProperties['Node Channels']['Node Size']['Node Property']['property name']= 'Node Property'
individualNodeProperties['Node Channels']['Node Size']['Node Property']['default value'] = 'default'

individualNodeProperties['Node Channels']['Node Color'] = {}
individualNodeProperties['Node Channels']['Node Color']['Node Property'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Color']['Node Property']['type'] = 'populate_selection'
individualNodeProperties['Node Channels']['Node Color']['Node Property']['property name']= 'Node Property'
individualNodeProperties['Node Channels']['Node Color']['Node Property']['default value'] = 'default'

dropDownMetadata['Categorical'] = {
    'Tableau10': '/static/src/rcs/Tableau10.png',
    'Set3': '/static/src/rcs/Set3.png',
    'Pastel1': '/static/src/rcs/Pastel1.png',
    'Paired': '/static/src/rcs/Paired.png',
    'Dark2': '/static/src/rcs/Dark2.png',
    'Category10': '/static/src/rcs/Category10.png',
    'Accent': '/static/src/rcs/Accent.png'
}
dropDownMetadata['Sequential (Single Hue)'] = {
    'Blues': '/static/src/rcs/Blues[k].png',
    'Greys': '/static/src/rcs/Greys[k].png',
    'Greens': '/static/src/rcs/Greens[k].png',
    'Oranges': '/static/src/rcs/Oranges[k].png',
    'Purples': '/static/src/rcs/Purples[k].png',
    'Reds': '/static/src/rcs/Reds[k].png'
}
dropDownMetadata['Sequential (Multi-Hue)'] = {
    'Sinebow': '/static/src/rcs/Sinebow(t).png',
    'Spectral': '/static/src/rcs/Spectral[k].png'
}

individualNodeProperties['Node Channels']['Node Color']['Color Map'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Color']['Color Map']['type'] = 'static_selection'
individualNodeProperties['Node Channels']['Node Color']['Color Map']['property name']= 'Color Map'
individualNodeProperties['Node Channels']['Node Color']['Color Map']['default value'] = 'default'
individualNodeProperties['Node Channels']['Node Color']['Color Map']['options'] = dropDownMetadata

individualNodeProperties['Node Channels']['Node Opacity'] = {}
individualNodeProperties['Node Channels']['Node Opacity']['Node Property'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Opacity']['Node Property']['type'] = 'populate_selection'
individualNodeProperties['Node Channels']['Node Opacity']['Node Property']['property name']= 'property name'
individualNodeProperties['Node Channels']['Node Opacity']['Node Property']['default value'] = 'default'

individualNodeProperties['Node Channels']['Node Border-Width'] = {}
individualNodeProperties['Node Channels']['Node Border-Width']['Node Property'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Border-Width']['Node Property']['type'] = 'populate_selection'
individualNodeProperties['Node Channels']['Node Border-Width']['Node Property']['property name']= 'property name'
individualNodeProperties['Node Channels']['Node Border-Width']['Node Property']['default value'] = 'default'

individualNodeProperties['Node Channels']['Node Border-Color'] = {}
individualNodeProperties['Node Channels']['Node Border-Color']['Node Property'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Border-Color']['Node Property']['type'] = 'populate_selection'
individualNodeProperties['Node Channels']['Node Border-Color']['Node Property']['property name']= 'property name'
individualNodeProperties['Node Channels']['Node Border-Color']['Node Property']['default value'] = 'default'

individualNodeProperties['Node Channels']['Node Border-Color']['Color Map'] = individualPropertyTemplate
individualNodeProperties['Node Channels']['Node Border-Color']['Color Map']['type'] = 'static_selection'
individualNodeProperties['Node Channels']['Node Border-Color']['Color Map']['property name']= 'Color Map'
individualNodeProperties['Node Channels']['Node Border-Color']['Color Map']['default value'] = 'default'
individualNodeProperties['Node Channels']['Node Border-Color']['Color Map']['options'] = dropDownMetadata

individualNodeProperties['Node Filter'] = {}
individualNodeProperties['Node Filter']['type'] = 'filter'

individualNodeProperties['Node Lable Setting'] = {}
individualNodeProperties['Node Lable Setting']['properties selection'] = individualPropertyTemplate
individualNodeProperties['Node Lable Setting']['properties selection']['name'] = 'Select property shown on label'
individualNodeProperties['Node Lable Setting']['properties selection']['type'] = 'overall_selection'

individualNodeProperties['Node Lable Setting']['properties display'] = individualPropertyTemplate
individualNodeProperties['Node Lable Setting']['properties display']['name'] = 'Click Node to see Label'
individualNodeProperties['Node Lable Setting']['properties display']['type'] = 'associate_display'
individualNodeProperties['Node Lable Setting']['properties display']['metadata'] = 'properties selection'

# Edge menu
individualEdgeProperties = {}

individualEdgeProperties['Global Scale Setting'] = {}
individualEdgeProperties['Global Scale Setting']['Edge Width'] = individualPropertyTemplate
individualEdgeProperties['Global Scale Setting']['Edge Width']['type'] = 'fill_in'
individualEdgeProperties['Global Scale Setting']['Edge Width']['property name']= 'Edge Width'
individualEdgeProperties['Global Scale Setting']['Edge Width']['default value'] = 2

individualEdgeProperties['Global Scale Setting']['Edge Color'] = individualPropertyTemplate
individualEdgeProperties['Global Scale Setting']['Edge Color']['type'] = 'fill_in'
individualEdgeProperties['Global Scale Setting']['Edge Color']['property name']= 'Edge Color'
individualEdgeProperties['Global Scale Setting']['Edge Color']['default value'] = 'FF0000'

individualEdgeProperties['Global Scale Setting']['Edge Opacity'] = individualPropertyTemplate
individualEdgeProperties['Global Scale Setting']['Edge Opacity']['type'] = 'fill_in'
individualEdgeProperties['Global Scale Setting']['Edge Opacity']['property name']= 'Edge Opacity'
individualEdgeProperties['Global Scale Setting']['Edge Opacity']['default value'] = 100

dropDownMetadata = {}
dropDownMetadata['Full Line'] = '/static/src/rcs/full-line.png'
dropDownMetadata['Dash Line'] = '/static/src/rcs/dash-line.png'
dropDownMetadata['Arrow Line'] = '/static/src/rcs/arrow-line.png'
dropDownMetadata['Arror Dash Line'] = '/static/src/rcs/arrow-dash-line.png'

individualEdgeProperties['Global Scale Setting']['Edge Shape'] = individualPropertyTemplate
individualEdgeProperties['Global Scale Setting']['Edge Shape']['type'] = 'static_selection'
individualEdgeProperties['Global Scale Setting']['Edge Shape']['property name']= 'Edge Shape'
individualEdgeProperties['Global Scale Setting']['Edge Shape']['default value'] = 'default'
individualEdgeProperties['Global Scale Setting']['Edge Shape']['options'] = dropDownMetadata

individualEdgeProperties['Edge Channels'] = {}
individualEdgeProperties['Edge Channels']['Edge Width'] = {}
individualEdgeProperties['Edge Channels']['Edge Width']['Edge Property'] = individualPropertyTemplate
individualEdgeProperties['Edge Channels']['Edge Width']['Edge Property']['type'] = 'populate_selection'
individualEdgeProperties['Edge Channels']['Edge Width']['Edge Property']['property name']= 'Edge Property'
individualEdgeProperties['Edge Channels']['Edge Width']['Edge Property']['default value'] = 'default'

individualEdgeProperties['Edge Channels']['Edge Color'] = {}
individualEdgeProperties['Edge Channels']['Edge Color']['Edge Property'] = individualPropertyTemplate
individualEdgeProperties['Edge Channels']['Edge Color']['Edge Property']['type'] = 'populate_selection'
individualEdgeProperties['Edge Channels']['Edge Color']['Edge Property']['property name']= 'Edge Property'
individualEdgeProperties['Edge Channels']['Edge Color']['Edge Property']['default value'] = 'default'

dropDownMetadata = {}
dropDownMetadata['Categorical'] = {
    'Tableau10': '/static/src/rcs/Tableau10.png',
    'Set3': '/static/src/rcs/Set3.png',
    'Pastel1': '/static/src/rcs/Pastel1.png',
    'Paired': '/static/src/rcs/Paired.png',
    'Dark2': '/static/src/rcs/Dark2.png',
    'Category10': '/static/src/rcs/Category10.png',
    'Accent': '/static/src/rcs/Accent.png'
}
dropDownMetadata['Sequential (Single Hue)'] = {
    'Blues': '/static/src/rcs/Blues[k].png',
    'Greys': '/static/src/rcs/Greys[k].png',
    'Greens': '/static/src/rcs/Greens[k].png',
    'Oranges': '/static/src/rcs/Oranges[k].png',
    'Purples': '/static/src/rcs/Purples[k].png',
    'Reds': '/static/src/rcs/Reds[k].png'
}
dropDownMetadata['Sequential (Multi-Hue)'] = {
    'Sinebow': '/static/src/rcs/Sinebow(t).png',
    'Spectral': '/static/src/rcs/Spectral[k].png'
}

individualEdgeProperties['Edge Channels']['Edge Color']['Color Map'] = individualPropertyTemplate
individualEdgeProperties['Edge Channels']['Edge Color']['Color Map']['type'] = 'static_selection'
individualEdgeProperties['Edge Channels']['Edge Color']['Color Map']['property name']= 'Color Map'
individualEdgeProperties['Edge Channels']['Edge Color']['Color Map']['default value'] = 'default'
individualEdgeProperties['Edge Channels']['Edge Color']['Color Map']['options'] = dropDownMetadata

individualEdgeProperties['Edge Channels']['Edge Opacity'] = {}
individualEdgeProperties['Edge Channels']['Edge Opacity']['Edge Property'] = individualPropertyTemplate
individualEdgeProperties['Edge Channels']['Edge Opacity']['Edge Property']['type'] = 'populate_selection'
individualEdgeProperties['Edge Channels']['Edge Opacity']['Edge Property']['property name']= 'property name'
individualEdgeProperties['Edge Channels']['Edge Opacity']['Edge Property']['default value'] = 'default'

individualEdgeProperties['Edge Filter'] = {}
individualEdgeProperties['Edge Filter']['type'] = 'filter'

individualEdgeProperties['Edge Lable Setting'] = {}
individualEdgeProperties['Edge Lable Setting']['properties selection'] = individualPropertyTemplate
individualEdgeProperties['Edge Lable Setting']['properties selection']['name'] = 'Select property shown on label'
individualEdgeProperties['Edge Lable Setting']['properties selection']['type'] = 'overall_selection'

individualEdgeProperties['Edge Lable Setting']['properties display'] = individualPropertyTemplate
individualEdgeProperties['Edge Lable Setting']['properties display']['name'] = 'Click Edge to see Label'
individualEdgeProperties['Edge Lable Setting']['properties display']['type'] = 'associate_display'
individualEdgeProperties['Edge Lable Setting']['properties display']['metadata'] = 'properties selection'

metadata = {
    'Node': subNodeType,
    'Edge': subEdgeType
}

configFile['metadata'] = metadata
configFile['Node'] = individualNodeProperties
configFile['Edge'] = individualEdgeProperties

with open('../static/config_skeleton.json', 'w') as outfile:
    json.dump(configFile, outfile, indent=2)

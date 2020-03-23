import json

# in order to be very generic, everything should be parsed recursively.
configFile = {}
individualPropertyTemplate = {
    'isLeaf': True,
    'type': '',
    'property name': '',
    'default value': None,
    'options': {},
    'metadata': None
}

dropDownMetadata = {}

menuType = ['Node', 'Edge']

subNodeType = ['Global Scale Setting', 'Node Channels', 'Node Filter', 'Node Lable Setting']
subEdgeType = ['Global Scale setting', 'Edge Channels', 'Edge Filter', 'Edge Lable Setting']

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

individualNodeProperties['Node Lable Setting'] = {}

defaultVisibility = True

subProto = {
    'attr': 'Categorical',
    'visibility': defaultVisibility,
    'options': {},
    'default_value': None
}

metadata = {
    'Node': subNodeType,
    'Edge': subEdgeType
}

#  'Graph': ['Network', 'Clicked Node', 'Clicked Edge'],
#  'Layout': ['By Prominence Index', 'By Force-Directed Mondel']

cateList = ['color', 'shape']
contList = ['size', 'alpha', 'border_size']

for mtype in menuType:
    configFile[mtype] = {}
    for ele in cateList:
        configFile[mtype][ele] = subProto

subProto['attr'] = 'Continuous'
for mtype in menuType:
    configFile[mtype] = {}
    for ele in contList:
        configFile[mtype][ele] = subProto

configFile['metadata'] = metadata

with open('../static/config_skeleton.json', 'w') as outfile:
    json.dump(configFile, outfile, indent=2)

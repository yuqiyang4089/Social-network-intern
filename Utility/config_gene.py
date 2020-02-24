import json

configFile = {}
menuType = ['Node', 'Edge']
defaultVisibility = False
subProto = {
    'attr': 'Categorical',
    'visibility': defaultVisibility,
    'options': {},
    'default_value': None
}

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

with open('config.json', 'w') as outfile:
    json.dump(configFile, outfile, indent=2)

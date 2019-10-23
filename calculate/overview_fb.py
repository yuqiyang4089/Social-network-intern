# @app.route('/request',methods=['POST',"GET"])
# def createoverview(level0,level1,level2,level3):
from csv import reader
import numpy as np
import pandas as pd
import json
file = pd.read_csv('./static/src/data/1_graduate_22_classes.csv')
view = {}
nodes = []
links = []
ini={}
ini['name']='FB'
ini['ind'] = 0
ini['value'] = 0
ini['level'] = 0
nodes.append(ini)
dic = {}
dex=0
for i in range(len(file)):
	dex+=1
	dic['region'+str(file['schregion'][i])] = [dex,1,'region'+str(file['schregion'][i]),['region'+str(file['schregion'][i])]]
	dex+=1
	dic['region'+str(file['schregion'][i])+'school'+str(file['school'][i])] = [dex,2,'school'+str(file['school'][i]),['region'+str(file['schregion'][i]),'school'+str(file['school'][i])]]
	dex+=1
	dic['region'+str(file['schregion'][i])+'school'+str(file['school'][i])+'major'+str(file['major2'][i])]=[dex,3,'major'+str(file['major2'][i]),['region'+str(file['schregion'][i]),'school'+str(file['school'][i]),'major'+str(file['major2'][i])]]

for i in dic:
	count = 0
	for k in range(len(file)):
		if 'region'+str(file['schregion'][k])== i:
			link={}
			link['source'] = 0
			link['target'] = dic[i][0]
			links.append(link)
			count+=1
		if 'region'+str(file['schregion'][k])+'school'+str(file['school'][k]) == i:
			link={}
			link['source'] = dic['region'+str(file['schregion'][k])][0]
			link['target'] = dic[i][0]
			links.append(link)
			count+=1
		if 'region'+str(file['schregion'][k])+'school'+str(file['school'][k])+'major'+str(file['major2'][k]) == i:
			link={}
			link['source'] = dic['region'+str(file['schregion'][k])+'school'+str(file['school'][k])][0]
			link['target'] = dic[i][0]
			links.append(link)
			count+=1
	line = {}
	line['name']= i
	line['show_name'] = dic[i][2]
	line['pass'] = []
	line['ind'] = dic[i][0]
	line['value'] = count
	line['level'] = dic[i][1]
	nodes.append(line)

seen = set()
new_link =[]
for d in links:
	t=tuple(d.items())
	if t not in seen:
		seen.add(t)
		new_link.append(d)

view['nodes']=nodes
view['links']=new_link
print(nodes)
with open("overview.json","w") as f:
	json.dump(view,f,indent=4)

info={}
for i in range(len(nodes)):
	info[nodes[i]['name']]=nodes[i]
with open("infor.json","w") as k:
	json.dump(info,k,indent=4)

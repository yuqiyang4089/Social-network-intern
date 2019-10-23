# ================graph=============
import graph_tool.all as gt
import matplotlib.pylab as matplotlib
import csv
import graph_tool.centrality as gtc
import math

def my_Bully_post():
	with open("./static/src/data/edge_sample.csv", "r") as csv_connect:
		next(csv_connect)
		edgesdata = list(csv.reader(csv_connect))
	with open("./static/src/data/bully_f.csv",'r') as csv_explain:
		next(csv_explain)
		nodesdata = list(csv.reader(csv_explain))
	global g,v_userid,v_race,v_cohort,v_gender,v_c1net,v_c2net,v_c3net,v_c4net,v_c5net,v_c6net,v_c7net,e_target,e_source,e_year,e_type
	g = gt.Graph (directed = True)

	v_userid = g.new_vertex_property("object")
	v_race = g.new_vertex_property("object")
	v_cohort = g.new_vertex_property("object")
	v_gender = g.new_vertex_property("object")
	v_c1net = g.new_vertex_property("object")
	v_c2net = g.new_vertex_property("object")
	v_c3net = g.new_vertex_property('object')
	v_c4net = g.new_vertex_property("object")
	v_c5net = g.new_vertex_property("object")
	v_c6net = g.new_vertex_property('object')
	v_c7net = g.new_vertex_property("object")

	e_year = g.new_edge_property("object")
	e_type = g.new_edge_property('object')
	e_source = g.new_edge_property("int")
	e_target = g.new_edge_property("int")
	#set up the dictonary of vertexs
	vet = {}
	for v in nodesdata:
		vet[v[0]] = g.add_vertex()

	for v in vet:
		v_userid[vet[v]] = {"userid" : nodesdata[int(vet[v])][0]}
		v_race[vet[v]] = {'race': nodesdata[int(vet[v])][9]}
		v_cohort[vet[v]] = {'cohort': nodesdata[int(vet[v])][8]}
		v_gender[vet[v]] = {'gender':nodesdata[int(vet[v])][10]}
		v_c1net[vet[v]] = {'c1net':nodesdata[int(vet[v])][2]}
		v_c2net[vet[v]] = {'c2net':nodesdata[int(vet[v])][1]}
		v_c3net[vet[v]] = {'c3net':nodesdata[int(vet[v])][3]}
		v_c4net[vet[v]] = {'c4net':nodesdata[int(vet[v])][4]}
		v_c5net[vet[v]] = {'c5net':nodesdata[int(vet[v])][5]}
		v_c6net[vet[v]] = {'c6net':nodesdata[int(vet[v])][6]}
		v_c7net[vet[v]] = {'c7net':nodesdata[int(vet[v])][7]}

	g.vertex_properties['userid'] = v_userid
	g.vertex_properties['race'] = v_race
	g.vertex_properties['cohort'] = v_cohort
	g.vertex_properties['gender'] = v_gender
	g.vertex_properties['c1net'] = v_c1net
	g.vertex_properties['c2net'] = v_c2net
	g.vertex_properties['c3net'] = v_c3net
	g.vertex_properties['c4net'] = v_c4net
	g.vertex_properties['c5net'] = v_c5net
	g.vertex_properties['c6net'] = v_c6net
	g.vertex_properties['c7net'] = v_c7net

	# for e in range(len(edgesdata)):
	# 	edgesdata[e][2]=edgesdata[e][2].split('-')[0]

	edges = {}
	for e in range(len(edgesdata)):
		edges[e] = g.add_edge(vet[edgesdata[e][0]],vet[edgesdata[e][1]])
		e_type[edges[e]] = {'type': edgesdata[e][2]}
		e_year[edges[e]] = {'year': edgesdata[e][3]}
		e_source[edges[e]] = edgesdata[e][0]
		e_target[edges[e]] = edgesdata[e][1]
	g.edge_properties['type'] = e_type
	g.edge_properties['year'] = e_year
	g.edge_properties['source'] = e_source
	g.edge_properties['target'] = e_target
	return g
#============precalculate-diction================
def pre_dic_b():
	global new_hir_b
	new_hir_b={'schoolnet_3': set(), 'schoolnet_3year_c1': set(), 'schoolnet_606': set(), 'schoolnet_606year_c1': set(), 'schoolnet_5': set(), 'schoolnet_5year_c1': set(), 'schoolnet_602': set(), 'schoolnet_602year_c1': set(), 'schoolnet_710': set(), 'schoolnet_710year_c1': set(), 'schoolnet_809': set(), 'schoolnet_809year_c1': set(), 'schoolnet_709': set(), 'schoolnet_709year_c1': set(), 'schoolnet_810': set(), 'schoolnet_810year_c1': set(), 'schoolnet_11': set(), 'schoolnet_11year_c1': set(), 'schoolnet_609': set(), 'schoolnet_609year_c1': set(), 'schoolnet_808': set(), 'schoolnet_808year_c1': set(), 'schoolnet_807': set(), 'schoolnet_807year_c1': set(), 'schoolnet_607': set(), 'schoolnet_607year_c1': set(), 'schoolnet_12': set(), 'schoolnet_12year_c1': set(), 'schoolnet_708': set(), 'schoolnet_708year_c1': set(), 'schoolnet_601': set(), 'schoolnet_601year_c1': set(), 'schoolnet_604': set(), 'schoolnet_604year_c1': set(), 'schoolnet_701': set(), 'schoolnet_701year_c1': set(), 'schoolnet_706': set(), 'schoolnet_706year_c1': set(), 'schoolnet_704': set(), 'schoolnet_704year_c1': set(), 'schoolnet_608': set(), 'schoolnet_608year_c1': set(), 'schoolnet_707': set(), 'schoolnet_707year_c1': set(), 'schoolnet_610': set(), 'schoolnet_610year_c1': set(), 'schoolnet_806': set(), 'schoolnet_806year_c1': set(), 'schoolnet_802': set(), 'schoolnet_802year_c1': set(), 'schoolnet_13': set(), 'schoolnet_13year_c1': set(), 'schoolnet_801': set(), 'schoolnet_801year_c1': set(), 'schoolnet_804': set(), 'schoolnet_804year_c1': set(), 'schoolnet_702': set(), 'schoolnet_702year_c1': set(), 'schoolnet_3year_c2': set(), 'schoolnet_5year_c2': set(), 'schoolnet_702year_c2': set(), 'schoolnet_710year_c2': set(), 'schoolnet_914': set(), 'schoolnet_914year_c2': set(), 'schoolnet_11year_c2': set(), 'schoolnet_809year_c2': set(), 'schoolnet_810year_c2': set(), 'schoolnet_709year_c2': set(), 'schoolnet_918': set(), 'schoolnet_918year_c2': set(), 'schoolnet_12year_c2': set(), 'schoolnet_919': set(), 'schoolnet_919year_c2': set(), 'schoolnet_707year_c2': set(), 'schoolnet_808year_c2': set(), 'schoolnet_807year_c2': set(), 'schoolnet_701year_c2': set(), 'schoolnet_706year_c2': set(), 'schoolnet_704year_c2': set(), 'schoolnet_801year_c2': set(), 'schoolnet_804year_c2': set(), 'schoolnet_806year_c2': set(), 'schoolnet_708year_c2': set(), 'schoolnet_915': set(), 'schoolnet_915year_c2': set(), 'schoolnet_916': set(), 'schoolnet_916year_c2': set(), 'schoolnet_917': set(), 'schoolnet_917year_c2': set(), 'schoolnet_13year_c2': set(), 'schoolnet_802year_c2': set(), 'schoolnet_3year_c3': set(), 'schoolnet_5year_c3': set(), 'schoolnet_702year_c3': set(), 'schoolnet_11year_c3': set(), 'schoolnet_914year_c3': set(), 'schoolnet_809year_c3': set(), 'schoolnet_810year_c3': set(), 'schoolnet_709year_c3': set(), 'schoolnet_918year_c3': set(), 'schoolnet_12year_c3': set(), 'schoolnet_919year_c3': set(), 'schoolnet_707year_c3': set(), 'schoolnet_807year_c3': set(), 'schoolnet_13year_c3': set(), 'schoolnet_701year_c3': set(), 'schoolnet_706year_c3': set(), 'schoolnet_704year_c3': set(), 'schoolnet_801year_c3': set(), 'schoolnet_804year_c3': set(), 'schoolnet_806year_c3': set(), 'schoolnet_708year_c3': set(), 'schoolnet_710year_c3': set(), 'schoolnet_808year_c3': set(), 'schoolnet_915year_c3': set(), 'schoolnet_917year_c3': set(), 'schoolnet_916year_c3': set(), 'schoolnet_802year_c3': set(), 'schoolnet_3year_c4': set(), 'schoolnet_5year_c4': set(), 'schoolnet_11year_c4': set(), 'schoolnet_12year_c4': set(), 'schoolnet_13year_c4': set(), 'schoolnet_801year_c4': set(), 'schoolnet_802year_c4': set(), 'schoolnet_804year_c4': set(), 'schoolnet_806year_c4': set(), 'schoolnet_807year_c4': set(), 'schoolnet_808year_c4': set(), 'schoolnet_809year_c4': set(), 'schoolnet_810year_c4': set(), 'schoolnet_914year_c4': set(), 'schoolnet_915year_c4': set(), 'schoolnet_916year_c4': set(), 'schoolnet_917year_c4': set(), 'schoolnet_918year_c4': set(), 'schoolnet_919year_c4': set(), 'schoolnet_3year_c5': set(), 'schoolnet_5year_c5': set(), 'schoolnet_11year_c5': set(), 'schoolnet_914year_c5': set(), 'schoolnet_12year_c5': set(), 'schoolnet_13year_c5': set(), 'schoolnet_801year_c5': set(), 'schoolnet_804year_c5': set(), 'schoolnet_806year_c5': set(), 'schoolnet_802year_c5': set(), 'schoolnet_807year_c5': set(), 'schoolnet_808year_c5': set(), 'schoolnet_809year_c5': set(), 'schoolnet_810year_c5': set(), 'schoolnet_915year_c5': set(), 'schoolnet_917year_c5': set(), 'schoolnet_916year_c5': set(), 'schoolnet_918year_c5': set(), 'schoolnet_919year_c5': set(), 'schoolnet_914year_c6': set(), 'schoolnet_12year_c6': set(), 'schoolnet_919year_c6': set(), 'schoolnet_918year_c6': set(), 'schoolnet_914year_c7': set(), 'schoolnet_12year_c7': set(), 'schoolnet_919year_c7': set(), 'schoolnet_918year_c7': set()}

	# pro={'schoolnet_':[v_schregion,"schregion"],'school':[v_school,'school'],'major':[v_major,'major']}
	for v in g.vertices():
		for i in ['1','2','3','4','5','6','7']:
			temp=eval("v_c"+i+"net")
			l1='schoolnet_'+str(temp[v]["c"+i+"net"])
			l2='schoolnet_'+str(temp[v]["c"+i+"net"])+'year_c'+i
			if str(temp[v]['c'+i+'net'])!="unk":
				new_hir_b[l1].add(v_userid[v]["userid"])
				new_hir_b[l2].add(v_userid[v]["userid"])
				for w in v.out_neighbors() or w in v.in_neighbors():
					new_hir_b[l1].add(v_userid[w]['userid'])
					new_hir_b[l2].add(v_userid[w]['userid'])

	hir = new_hir_b
	return hir
# =============detail-data=========
def need_data_b(received,g,hir):
	re=received.keys()
	need=set()
	for i in re:
		need=need.union(hir[i])
	fil=[]
	vfilt = g.new_vertex_property("bool")
	for v in g.vertices():
		if v_userid[v]['userid'] in need:
			vfilt[v]=True
	u = gt.GraphView(g, vfilt)
	u = gt.Graph(u)
	return(u)
#============output_graph_data_json=========
def output_json_b(u):
	pos = gt.sfdp_layout(u, p=2.6,K=40,C=1)
	nodes=[]
	convert =[]
	for v in u.vertices():
		s_node={}
		s_node["name"]=v_userid[v]["userid"]
		s_node['race']=v_race[v]["race"]
		s_node['cohort']=v_cohort[v]['cohort']
		s_node['gender']=v_gender[v]['gender']
		s_node['c1net']= v_c1net[v]['c1net']
		s_node['c2net']=v_c2net[v]['c2net']
		s_node['c3net']=v_c3net[v]['c3net']
		s_node['c4net']=v_c4net[v]['c4net']
		s_node['c5net']=v_c5net[v]['c5net']
		s_node['c6net']=v_c6net[v]['c6net']
		s_node['c7net']=v_c7net[v]['c7net']
		s_node["out-degree"] = v.out_degree()
		s_node["in-degree"] = v.in_degree()
		s_node["cx"] = (pos[v][0])
		s_node["cy"] = (pos[v][1])
		convert.append(v_userid[v]["userid"])
		# o_node={}
		# o_node[v_userid[v]["userid"]]=s_node
		nodes.append(s_node)
	all_data={}
	all_data['nodes']=nodes
	links=[]
	for e in u.edges():
		s_edge={}
		s_edge['source'] = convert.index(str(e_source[e]))
		s_edge['target'] = convert.index(str(e_target[e]))
		s_edge['type']= e_type[e]['type']
		s_edge['year']= e_year[e]['year']
		s_edge['weight'] = len(u.edge(e.target(), e.source(), all_edges=True, add_missing=False))+len(u.edge(e.source(), e.target(), all_edges=True, add_missing=False))
		# s_edge['source_x'] = (pos[e.source()][0]+400)/1.5
		# s_edge['source_y'] = (pos[e.source()][1]+300)/1.5
		# s_edge['target_x'] = (pos[e.target()][0]+400)/1.5
		# s_edge['target_y'] = (pos[e.target()][1]+300)/1.5
		links.append(s_edge)
	all_data['links']=links
	return(all_data)

#============output_graph_data_json=========
def output_json_fd_lay_b(u,model):
	if model =="FR":
		pos = gt.fruchterman_reingold_layout(u, n_iter=100,r=100,a =10)
	if model == "Ran":
		pos = gt.random_layout(g, dim=2)
	if model =="ARF":
		pos = gt.arf_layout(g, max_iter=0)
	nodes=[]
	convert =[]
	for v in u.vertices():
		s_node={}
		s_node["name"]=v_userid[v]["userid"]
		s_node['race']=v_race[v]["race"]
		s_node['cohort']=v_cohort[v]['cohort']
		s_node['gender']=v_gender[v]['gender']
		s_node['c1net']= v_c1net[v]['c1net']
		s_node['c2net']=v_c2net[v]['c2net']
		s_node['c3net']=v_c3net[v]['c3net']
		s_node['c4net']=v_c4net[v]['c4net']
		s_node['c5net']=v_c5net[v]['c5net']
		s_node['c6net']=v_c6net[v]['c6net']
		s_node['c7net']=v_c7net[v]['c7net']
		s_node["out-degree"] = v.out_degree()
		s_node["in-degree"] = v.in_degree()
		s_node["cx"] = (pos[v][0])
		s_node["cy"] = (pos[v][1])
		convert.append(v_userid[v]["userid"])
		# o_node={}
		# o_node[v_userid[v]["userid"]]=s_node
		nodes.append(s_node)
	all_data={}
	all_data['nodes']=nodes
	links=[]
	for e in u.edges():
		s_edge={}
		s_edge['source'] = convert.index(str(e_source[e]))
		s_edge['target'] = convert.index(str(e_target[e]))
		s_edge['type']= e_type[e]['type']
		s_edge['year']= e_year[e]['year']
		s_edge['weight'] = len(u.edge(e.target(), e.source(), all_edges=True, add_missing=False))+len(u.edge(e.source(), e.target(), all_edges=True, add_missing=False))
		links.append(s_edge)
	all_data['links']=links
	return(all_data)
#===============output_filter information=====
def output_filter_b_v():
	dictio={}
	key=list(g.vertex_properties.keys())
	value=list(g.vertex_properties.values())
	fil={}
	final={}
	final['cat']={}
	final['con']={}
	for i in range(len(key)):
		fil[key[i]]=set()
		dictio[key[i]]= value[i]
	del fil['userid']
	del fil['c1net']
	del fil['c2net']
	del fil['c3net']
	del fil['c4net']
	del fil['c5net']
	del fil['c6net']
	del fil['c7net']
	for vertex in g.vertices():
		for i in fil:
			fil[i].add(dictio[i][vertex][i])


	for i in fil:
		fil[i]=list(fil[i])
	for i in fil:
		if len(fil[i])>5:
			final["con"][i]=fil[i]
		else:
			final['cat'][i]=fil[i]
	for i in final['con']:
		final['con'][i]=list(filter(None, final['con'][i]))
	new={}
	for i in final:
		new[i]={}
		for j in final[i]:
			new[i][j]=[]
	final['fil']=new
	return(final)

def output_filter_b_e():
	dictio={}
	key=list(g.edge_properties.keys())
	value=list(g.edge_properties.values())
	fil={}
	final={}
	final['cat']={}
	final['con']={}
	for i in range(len(key)):
		fil[key[i]]=set()
		dictio[key[i]]= value[i]
	del fil['target']
	del fil['source']
	for edge in g.edges():
		for i in fil:
			# if i =='date':
			# 	fil[i].add(dictio[i][edge][i].split('-')[0])
			# else:
			fil[i].add(dictio[i][edge][i])

	for i in fil:
		fil[i]=list(fil[i])
	for i in fil:
		if len(fil[i])>5:
			final["con"][i]=fil[i]
		else:
			final['cat'][i]=fil[i]
	new={}
	for i in final:
		new[i]={}
		for j in final[i]:
			new[i][j]=[]

	final['fil']=new
	return(final)


# =========centrality=========
def calculate_cen_b (pre_u,type,pos_type):
	# if type == "DeC":
	if type == "BetC":
		v_be = pre_u.new_vertex_property("float")
		v_betweenness = gtc.betweenness(pre_u,vprop=v_be)
		pre_u.vertex_properties['betweenness'] = v_be
	if type == "CloC":
		v_clo = pre_u.new_vertex_property("float")
		v_closeness = gtc.closeness(pre_u,vprop=v_clo)
		pre_u.vertex_properties['closeness'] = v_clo
	# if type == "EigenveC":
	# if type == "KatzC":
	# if type == "EigentrustC":

	if pos_type == "FD":
		pos = gt.sfdp_layout(pre_u, p=2.6,K=40,C=1)
	if pos_type == "FR":
		pos = gt.fruchterman_reingold_layout(pre_u, n_iter=100,r=100,a =10)

	nodes=[]
	convert =[]
	for v in pre_u.vertices():
		s_node={}
		s_node["name"]=v_userid[v]["userid"]
		s_node['race']=v_race[v]["race"]
		s_node['cohort']=v_cohort[v]['cohort']
		s_node['gender']=v_gender[v]['gender']
		s_node['c1net']= v_c1net[v]['c1net']
		s_node['c2net']=v_c2net[v]['c2net']
		s_node['c3net']=v_c3net[v]['c3net']
		s_node['c4net']=v_c4net[v]['c4net']
		s_node['c5net']=v_c5net[v]['c5net']
		s_node['c6net']=v_c6net[v]['c6net']
		s_node['c7net']=v_c7net[v]['c7net']
		s_node["out-degree"] = v.out_degree()
		s_node["in-degree"] = v.in_degree()
		s_node["cx"] = (pos[v][0])
		s_node["cy"] = (pos[v][1])
		if 'v_be' in locals().keys():
			s_node["BetC"] = v_be[v]
		if 'v_clo' in locals().keys():
			if math.isnan(v_clo[v]):
				v_clo[v] = 0
			s_node["CloC"] = v_clo[v]
		convert.append(v_userid[v]["userid"])
		# o_node={}
		# o_node[v_userid[v]["userid"]]=s_node
		nodes.append(s_node)
	all_data={}
	all_data['nodes']=nodes
	links=[]
	for e in pre_u.edges():
		s_edge={}
		s_edge['source'] = convert.index(str(e_source[e]))
		s_edge['target'] = convert.index(str(e_target[e]))
		s_edge['type']= e_type[e]['type']
		s_edge['year']= e_year[e]['year']
		s_edge['weight'] = len(pre_u.edge(e.target(), e.source(), all_edges=True, add_missing=False))+len(pre_u.edge(e.source(), e.target(), all_edges=True, add_missing=False))
		links.append(s_edge)
	all_data['links']=links
	return(all_data)

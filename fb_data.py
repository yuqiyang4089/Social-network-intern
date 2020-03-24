# ================graph=============
import graph_tool.all as gt
import matplotlib.pylab as matplotlib
import csv
import graph_tool.centrality as gtc
import math


def my_form_post():
    with open("./static/src/data/sampledata.csv", "r") as csv_connect:
        next(csv_connect)
        edgesdata = list(csv.reader(csv_connect))
    with open("./static/src/data/1_graduate_22_classes.csv", 'r') as csv_explain:
        next(csv_explain)
        nodesdata = list(csv.reader(csv_explain))
    global g, v_userid, v_fbid, v_school, v_schregion, v_gender, v_birthyear, v_major, v_marriage, v_grade, v_scorelevel, v_liveplace, v_height, v_weight, e_target, e_source, e_date, e_dailycount
    g = gt.Graph(directed=True)
    for e in range(len(edgesdata)):
        edgesdata[e][2] = edgesdata[e][2].split('-')[0]

    v_userid = g.new_vertex_property("object")
    v_fbid = g.new_vertex_property("object")
    v_school = g.new_vertex_property("object")
    v_schregion = g.new_vertex_property("object")
    v_gender = g.new_vertex_property("object")
    v_birthyear = g.new_vertex_property("object")
    v_major = g.new_vertex_property("object")
    v_marriage = g.new_vertex_property("object")
    v_grade = g.new_vertex_property("object")
    v_scorelevel = g.new_vertex_property("object")
    v_liveplace = g.new_vertex_property("object")
    v_height = g.new_vertex_property("object")
    v_weight = g.new_vertex_property("object")

    e_date = g.new_edge_property("object")
    e_dailycount = g.new_edge_property("object")
    e_source = g.new_edge_property("int")
    e_target = g.new_edge_property("int")
    # set up the dictonary of vertexs
    vet = {}
    for v in nodesdata:
        vet[v[0]] = g.add_vertex()

    for v in vet:
        v_userid[vet[v]] = {"userid": nodesdata[int(vet[v])][0]}
        v_fbid[vet[v]] = {"fbid": nodesdata[int(vet[v])][1]}
        v_school[vet[v]] = {"school": nodesdata[int(vet[v])][2]}
        v_schregion[vet[v]] = {"schregion": nodesdata[int(vet[v])][5]}
        v_gender[vet[v]] = {"gender": nodesdata[int(vet[v])][10]}
        v_birthyear[vet[v]] = {"birthyear": nodesdata[int(vet[v])][11]}
        v_major[vet[v]] = {"major": nodesdata[int(vet[v])][14]}
        v_marriage[vet[v]] = {"marriage": nodesdata[int(vet[v])][12]}
        v_grade[vet[v]] = {"grade": nodesdata[int(vet[v])][15]}
        v_scorelevel[vet[v]] = {"scorelevel": nodesdata[int(vet[v])][16]}
        v_liveplace[vet[v]] = {"liveplace": nodesdata[int(vet[v])][18]}
        v_height[vet[v]] = {"height": nodesdata[int(vet[v])][19]}
        v_weight[vet[v]] = {"weight": nodesdata[int(vet[v])][20]}

    g.vertex_properties['userid'] = v_userid
    g.vertex_properties['fbid'] = v_fbid
    g.vertex_properties['school'] = v_school
    g.vertex_properties['schregion'] = v_schregion
    g.vertex_properties['gender'] = v_gender
    g.vertex_properties['birthyear'] = v_birthyear
    g.vertex_properties['major'] = v_major
    g.vertex_properties['marriage'] = v_marriage
    g.vertex_properties['grade'] = v_grade
    g.vertex_properties['scorelevel'] = v_scorelevel
    g.vertex_properties['liveplace'] = v_liveplace
    g.vertex_properties['height'] = v_height
    g.vertex_properties['weight'] = v_weight

    edges = {}
    for e in range(len(edgesdata)):
        edges[e] = g.add_edge(vet[edgesdata[e][0]], vet[edgesdata[e][1]])
        e_date[edges[e]] = {'date': edgesdata[e][2]}
        e_dailycount[edges[e]] = {'dailycount': edgesdata[e][3]}
        e_source[edges[e]] = int(edgesdata[e][0])
        e_target[edges[e]] = int(edgesdata[e][1])
    g.edge_properties["date"] = e_date
    g.edge_properties["dailycount"] = e_dailycount
    g.edge_properties["source"] = e_source
    g.edge_properties["target"] = e_target
    return g
# ============precalculate-diction================


def pre_dic():
    global new_hir
    new_hir = {'region3': set(), 'region3school16': set(), 'region3school16major62': set(), 'region1': set(), 'region1school23': set(), 'region1school23major34': set(), 'region1school41': set(), 'region1school41major52': set(), 'region3school10': set(), 'region3school10major81': set(), 'region1school42': set(), 'region1school42major34': set(), 'region1school43': set(), 'region1school43major81': set(), 'region1school6': set(), 'region1school6major52': set(), 'region1school49': set(), 'region1school49major34': set(), 'region1school39': set(), 'region1school39major52': set(
    ), 'region3school14': set(), 'region3school14major42': set(), 'region3school15': set(), 'region3school15major14': set(), 'region4': set(), 'region4school19': set(), 'region4school19major21': set(), 'region2': set(), 'region2school21': set(), 'region2school21major31': set(), 'region1school1': set(), 'region1school1major52': set(), 'region3school9': set(), 'region3school9major34': set(), 'region2school4': set(), 'region2school4major34': set(), 'region1school52': set(), 'region1school52major31': set(), 'region3school11': set(), 'region3school11major48': set()}

    pro = {'region': [v_schregion, "schregion"], 'school': [
        v_school, 'school'], 'major': [v_major, 'major']}
    for v in g.vertices():
        items = ""
        for i in pro:
            items = items+i+pro[i][0][v][pro[i][1]]
            new_hir[items].add(v_userid[v]['userid'])
            for w in v.out_neighbors() or w in v.in_neighbors():
                new_hir[items].add(v_userid[w]['userid'])

    hir = new_hir
    return hir
# =============detail-data=========


def need_data(received, g, hir):
    re = received.keys()
    need = set()
    for i in re:
        need = need.union(hir[i])
    fil = []
    vfilt = g.new_vertex_property("bool")
    for v in g.vertices():
        if v_userid[v]['userid'] in need:
            vfilt[v] = True
    u = gt.GraphView(g, vfilt)
    u = gt.Graph(u)
    return(u)
# ============output_graph_data_json=========


def output_json(u):
    pos = gt.sfdp_layout(u, p=2.6, K=40, C=1)
    nodes = []
    convert = []
    for v in u.vertices():
        s_node = {}
        s_node["name"] = v_userid[v]["userid"]
        s_node['gender'] = v_gender[v]["gender"]
        s_node['schregion'] = v_schregion[v]['schregion']
        s_node['school'] = v_school[v]['school']
        s_node['major'] = v_major[v]['major']
        s_node['marriage'] = v_marriage[v]['marriage']
        s_node['grade'] = v_grade[v]['grade']
        s_node['liveplace'] = v_liveplace[v]['liveplace']
        s_node['height'] = v_height[v]['height']
        s_node['weight'] = v_weight[v]['weight']
        s_node['scorelevel'] = v_scorelevel[v]['scorelevel']
        s_node['birthyear'] = v_birthyear[v]['birthyear']
        s_node["out-degree"] = v.out_degree()
        s_node["in-degree"] = v.in_degree()
        s_node["cx"] = pos[v][0]
        s_node["cy"] = pos[v][1]
        convert.append(v_userid[v]["userid"])
        # o_node={}
        # o_node[v_userid[v]["userid"]]=s_node
        nodes.append(s_node)
    all_data = {}
    all_data['nodes'] = nodes
    links = []
    for e in u.edges():
        s_edge = {}
        s_edge['source'] = convert.index(str(e_source[e]))
        s_edge['target'] = convert.index(str(e_target[e]))
        s_edge['date'] = e_date[e]['date']
        s_edge['dailycount'] = e_dailycount[e]['dailycount']
        s_edge['weight'] = len(u.edge(e.target(), e.source(), all_edges=True, add_missing=False)) + \
            len(u.edge(e.source(), e.target(), all_edges=True, add_missing=False))
        links.append(s_edge)
    all_data['links'] = links
    return(all_data)
# ===============output_layout_change_FR_layout=============


def output_json_fd_lay(u, model):
    if model == "FR":
        pos = gt.fruchterman_reingold_layout(u, n_iter=100, r=100, a=10)
    if model == "Ran":
        pos = gt.random_layout(g, dim=2)
    if model == "ARF":
        pos = gt.arf_layout(g, max_iter=0)

    # gt.sfdp_layout(u, p=2.6,K=40,C=1)
    nodes = []
    convert = []
    for v in u.vertices():
        s_node = {}
        s_node["name"] = v_userid[v]["userid"]
        s_node['gender'] = v_gender[v]["gender"]
        s_node['schregion'] = v_schregion[v]['schregion']
        s_node['school'] = v_school[v]['school']
        s_node['major'] = v_major[v]['major']
        s_node['marriage'] = v_marriage[v]['marriage']
        s_node['grade'] = v_grade[v]['grade']
        s_node['liveplace'] = v_liveplace[v]['liveplace']
        s_node['height'] = v_height[v]['height']
        s_node['weight'] = v_weight[v]['weight']
        s_node['scorelevel'] = v_scorelevel[v]['scorelevel']
        s_node['birthyear'] = v_birthyear[v]['birthyear']
        s_node["out-degree"] = v.out_degree()
        s_node["in-degree"] = v.in_degree()
        s_node["cx"] = pos[v][0]
        s_node["cy"] = pos[v][1]
        convert.append(v_userid[v]["userid"])
        # o_node={}
        # o_node[v_userid[v]["userid"]]=s_node
        nodes.append(s_node)
    all_data = {}
    all_data['nodes'] = nodes
    links = []
    for e in u.edges():
        s_edge = {}
        s_edge['source'] = convert.index(str(e_source[e]))
        s_edge['target'] = convert.index(str(e_target[e]))
        s_edge['date'] = e_date[e]['date']
        s_edge['dailycount'] = e_dailycount[e]['dailycount']
        s_edge['weight'] = len(u.edge(e.target(), e.source(), all_edges=True, add_missing=False)) + \
            len(u.edge(e.source(), e.target(), all_edges=True, add_missing=False))
        links.append(s_edge)
    all_data['links'] = links
    # gt.graph_draw(u, pos=pos, output="graph-draw.png")
    return(all_data)

# ===============output_filter information=====


def output_filter_v():
    dictio = {}
    key = list(g.vertex_properties.keys())
    value = list(g.vertex_properties.values())
    fil = {}
    final = {}
    final['cat'] = {}
    final['con'] = {}
    for i in range(len(key)):
        fil[key[i]] = set()
        dictio[key[i]] = value[i]
    del fil['fbid']
    del fil['userid']
    del fil['major']
    del fil['schregion']
    del fil['school']
    del fil['grade']
    for vertex in g.vertices():
        for i in fil:
            fil[i].add(dictio[i][vertex][i])

    for i in fil:
        fil[i] = list(fil[i])
    for i in fil:
        if len(fil[i]) > 5:
            final["con"][i] = fil[i]
        else:
            final['cat'][i] = fil[i]
    for i in final['con']:
        final['con'][i] = list(filter(None, final['con'][i]))
    new = {}
    for i in final:
        new[i] = {}
        for j in final[i]:
            new[i][j] = []
    final['fil'] = new
    return(final)


def output_filter_e():
    dictio = {}
    key = list(g.edge_properties.keys())
    value = list(g.edge_properties.values())
    fil = {}
    final = {}
    final['cat'] = {}
    final['con'] = {}
    for i in range(len(key)):
        fil[key[i]] = set()
        dictio[key[i]] = value[i]
    del fil['target']
    del fil['source']
    for edge in g.edges():
        for i in fil:
            fil[i].add(dictio[i][edge][i])

    for i in fil:
        fil[i] = list(fil[i])
    for i in fil:
        if len(fil[i]) > 5:
            final["con"][i] = fil[i]
        else:
            final['cat'][i] = fil[i]
    new = {}
    for i in final:
        new[i] = {}
        for j in final[i]:
            new[i][j] = []

    final['fil'] = new
    return(final)

# =========centrality=========


def calculate_cen(pre_u, type, pos_type):
    # if type == "DeC":
    if type == "BetC":
        v_be = pre_u.new_vertex_property("float")
        v_betweenness = gtc.betweenness(pre_u, vprop=v_be)
        pre_u.vertex_properties['betweenness'] = v_be

    if type == "CloC":
        v_clo = pre_u.new_vertex_property("float")
        v_closeness = gtc.closeness(pre_u, vprop=v_clo)
        pre_u.vertex_properties['closeness'] = v_clo
    # if type == "EigenveC":
    # if type == "KatzC":
    # if type == "EigentrustC":

    if pos_type == "FD":
        pos = gt.sfdp_layout(pre_u, p=2.6, K=40, C=1)
    if pos_type == "FR":
        pos = gt.fruchterman_reingold_layout(pre_u, n_iter=100, r=100, a=10)

    nodes = []
    convert = []
    for v in pre_u.vertices():
        s_node = {}
        s_node["name"] = v_userid[v]["userid"]
        s_node['gender'] = v_gender[v]["gender"]
        s_node['schregion'] = v_schregion[v]['schregion']
        s_node['school'] = v_school[v]['school']
        s_node['major'] = v_major[v]['major']
        s_node['marriage'] = v_marriage[v]['marriage']
        s_node['grade'] = v_grade[v]['grade']
        s_node['liveplace'] = v_liveplace[v]['liveplace']
        s_node['height'] = v_height[v]['height']
        s_node['weight'] = v_weight[v]['weight']
        s_node['scorelevel'] = v_scorelevel[v]['scorelevel']
        s_node['birthyear'] = v_birthyear[v]['birthyear']
        s_node["out-degree"] = v.out_degree()
        s_node["in-degree"] = v.in_degree()
        s_node["cx"] = pos[v][0]
        s_node["cy"] = pos[v][1]
        if 'v_be' in locals().keys():
            s_node["BetC"] = v_be[v]
        if 'v_clo' in locals().keys():
            if math.isnan(v_clo[v]):
                v_clo[v] = 0
            s_node["CloC"] = v_clo[v]
            # print(v_clo[v])
        convert.append(v_userid[v]["userid"])
        # o_node={}
        # o_node[v_userid[v]["userid"]]=s_node
        nodes.append(s_node)
    all_data = {}
    all_data['nodes'] = nodes
    links = []
    for e in pre_u.edges():
        s_edge = {}
        s_edge['source'] = convert.index(str(e_source[e]))
        s_edge['target'] = convert.index(str(e_target[e]))
        s_edge['date'] = e_date[e]['date']
        s_edge['dailycount'] = e_dailycount[e]['dailycount']
        s_edge['weight'] = len(pre_u.edge(e.target(), e.source(), all_edges=True, add_missing=False)) + \
            len(pre_u.edge(e.source(), e.target(),
                           all_edges=True, add_missing=False))
        links.append(s_edge)
    all_data['links'] = links
    return(all_data)

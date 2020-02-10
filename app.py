from flask import Flask, request, render_template, jsonify
import random as r
import math as m
import json
from Bully_data import *
from fb_data import *
import graph_tool.all as gt
import matplotlib.pylab as matplotlib
import csv

app = Flask(__name__, static_url_path='/static')
g_b = my_Bully_post()
g_f = my_form_post()
hir_f = pre_dic()
hir_b = pre_dic_b()
u = 0
sub_gra = 0
currrent_lay = 'FD'
@app.route('/')
def my_form():
    # jsondata = json.loads("static/src/data/FB_overview.json")
    return render_template('index.html')


@app.route('/overview_bully', methods=["GET"])
def my_view_bu():
    with open("static/src/data/overview_bully.json", 'r') as load_f:
        jsondata = json.load(load_f)
    return jsondata


@app.route('/infor_fb', methods=['GET'])
def infor_fb():
    with open("static/src/data/infor.json", 'r') as load_f:
        jsondata = json.load(load_f)
    return jsondata


@app.route('/infor_bully', methods=['GET'])
def infor_b():
    with open("static/src/data/infor_bully.json", 'r') as load_f:
        jsondata = json.load(load_f)
    return jsondata


@app.route('/overview_fb', methods=["GET"])
def my_view():
    with open("static/src/data/overview.json", 'r') as load_f:
        jsondata = json.load(load_f)
    return jsondata


@app.route('/init_fb', methods=["GET"])
def fildata():
    fil = {}
    fil['v'] = output_filter_v()
    fil['e'] = output_filter_e()
    return fil


@app.route('/init_bully', methods=["GET"])
def fildata_b():
    fil = {}
    fil['v'] = output_filter_b_v()
    fil['e'] = output_filter_b_e()
    return fil


@app.route('/detail_fb', methods=['POST'])
def select_data():
    global u
    global sub_gra
    global currrent_lay
    centrality = ['BetC', 'CloC', "EigenveC", "KatzC", "EigentrustC"]
    layout = ['FR', 'Ran', 'ARF']
    data = request.get_data()
    temp = json.loads(data)
    if temp in centrality:
        sub_gra = calculate_cen(u, temp, currrent_lay)
        return(sub_gra)

    if temp in layout:
        sub_gra = output_json_fd_lay(u, temp)
        if temp == "FR":
            currrent_lay = "FR"
        if temp == "Ran":
            currrent_lay = "Ran"
        if temp == "ARF":
            currrent_lay = "ARF"
        return(sub_gra)
    else:
        u = need_data(temp, g_f, hir_f)
        sub_gra = output_json(u)
        currrent_lay = "FD"
        return (sub_gra)


@app.route('/detail_bully', methods=['POST'])
def select_data_bu():
    global u
    global sub_gra
    global currrent_lay
    layout = ['FR', 'Ran', 'ARF']
    centrality = ['DeC', 'BetC', 'CloC', "EigenveC", "KatzC", "EigentrustC"]
    data = request.get_data()
    temp = json.loads(data)
    if temp in centrality:
        sub_gra = calculate_cen_b(u, temp, currrent_lay)
        return(sub_gra)
    if temp in layout:
        sub_gra = output_json_fd_lay_b(u, temp)
        if temp == "FR":
            currrent_lay = "FR"
        if temp == "Ran":
            currrent_lay = "Ran"
        if temp == "ARF":
            currrent_lay = "ARF"
        return(sub_gra)
    else:
        u = need_data_b(temp, g_b, hir_b)
        sub_gra = output_json_b(u)
        currrent_lay = "FD"
        return (sub_gra)


if __name__ == '__main__':
    app.run()

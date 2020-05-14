import time
import json

from flask import Flask, request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
    
@app.route('/stock')
def get_stock_price():
    return {"price":"$12"}
    
@app.route('/price/<price>')
def get_calc_price(price):
    price = int(price)
    return {"price":price+1}    
    
@app.route('/indepth/<stock>')
def get_stock_info(stock):
    return {"stock":stock}
    
@app.route('/predicthistory')  
def predict_history():  
    return {'data':[{'symbol':'ibm',
'machine_cr':'12',
'hold_cr':'22',
'num_trades':'2'
},{'symbol':'t',
'machine_cr':'12',
'hold_cr':'22',
'num_trades':'2'
},{'symbol':'m',
'machine_cr':'12',
'hold_cr':'22',
'num_trades':'2'
}]}
    
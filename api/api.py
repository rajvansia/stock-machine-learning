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
    
@app.route('/p')  
def p():  
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


@app.route('/predicthistory')  
def predict_history():
    with open('./machine.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
# We can then find the data for the requested date and send it back as json
    return json.dumps(file_data)
    
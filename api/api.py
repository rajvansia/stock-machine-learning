import time
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
    
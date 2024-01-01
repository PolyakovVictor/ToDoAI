from flask import Flask, request, jsonify, make_response, render_template, session
from datetime import datetime, timedelta
from functools import wraps
from dotenv import load_dotenv
import jwt
import os

app = Flask(__name__)

load_dotenv()

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')


def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'Alert!': 'Token is missing!'})
        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'Alert!': 'Invalid Token!'})
    return decorated


@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return 'Logged in currently', 200


@app.route('/public')
def public():
    return jsonify({'message': 'Public Content'}), 200


@app.route('/auth')
@token_required
def auth():
    return jsonify({'message': 'JWT is verified. Welcome to your dashboard!'})


@app.route('/login', methods=['POST'])
def login():
    if request.form['username'] and request.form['password'] == '123456':
        session['logged_in'] = True
        token = jwt.encode({
            'user': request.form['username'],
            'expiration': str(datetime.utcnow() + timedelta(seconds=120))
        },
            app.config['SECRET_KEY'])
        return jsonify({'token': token})
    else:
        return make_response('Unable to verify', 403, {'WWW-Authenticate': 'Basic realm:"Authentication Failed!"'})


@app.route('/about')
def about():
    return 'About page in the main section'


if __name__ == '__main__':
    app.run(debug=True)

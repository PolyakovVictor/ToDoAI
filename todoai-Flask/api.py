from flask import Blueprint, Flask, request, jsonify, make_response, render_template, session
from datetime import datetime, timedelta
from main import app
from functools import wraps
import jwt

api = Blueprint('api', __name__, url_prefix='/')


def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({'Alert!': 'Token is missing!'})
        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'Alert!': 'Invalid Token!'})
    return decorated

@api.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return 'Logged in currently', 200


@api.route('/public')
def public():
    return jsonify({'message': 'Public Content'}), 200


@api.route('/auth')
@token_required
def auth():
    return jsonify({'message': 'JWT is verified. Welcome to your dashboard!'})

@api.route('/login', methods=['POST'])
def login():
    if request.form['username'] and request.form['password'] == '123456':
        session['logged_in'] = True
        token = jwt.encode({
            'user': request.form['username'],
            'expiration': str(datetime.utcnow() + timedelta(seconds=120))
        },
            app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('utf-8')})
    else:
        return make_response('Unable to verify', 403, {'WWW-Authenticate': 'Basic realm:"Authentication Failed!"'})


@api.route('/about')
def about():
    return 'About page in the main section'

from flask import Blueprint, jsonify

sample_route = Blueprint('sample', __name__)

@sample_route.route('/api/sample')
def sample():
    return jsonify({'message': 'Sample route working!'})

from flask import Flask, jsonify
from flask_cors import CORS
from routes.sample_route import sample_route

app = Flask(__name__)
CORS(app)

app.register_blueprint(sample_route)

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True)

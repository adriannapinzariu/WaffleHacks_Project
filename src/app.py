from flask import Flask, request, jsonify
# assuming signspeech is a python module in your project, and translate is a function in that module
from signspeech import translate  

app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()  # expecting a JSON payload with text to translate
    english_text = data.get('text', '')  # get text from request data
    
    # call the translate function from Signspeech to get ASL translation
    asl_translation = translate(english_text)
    
    return jsonify({'translation': asl_translation})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # runs the app on localhost:5000

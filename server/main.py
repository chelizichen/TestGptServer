from translate import Translator
from sanic import Sanic, json, Request, HTTPResponse

from src.service.gpt import QAFunc
from src.utils.ret import ret

app = Sanic("TarsusGptTest")

translate = Translator(to_lang='zh',from_lang='en')

@app.post("/ask")
async def AskController(request: Request) -> HTTPResponse:
    question = request.json['question']
    answer =QAFunc(question)
    data = dict()
    data['answer'] = answer
    data['translate'] = translate.translate(answer)
    data['question'] = question
    return json(ret.success(data))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)



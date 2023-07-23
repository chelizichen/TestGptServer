from pygpt4all.models.gpt4all import GPT4All
from translate import Translator

model = GPT4All('src/models/ggml-model-q4_0.bin')
translate = Translator(to_lang='en',from_lang='zh')

def QAFunc(question):
    question = translate.translate(question)
    print('question',question)
    return model.generate(question,n_predict=200,new_text_callback=new_text_callback)

def new_text_callback(answer):
    print('answer',answer)
    return answer
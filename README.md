# **ИСПОЛЬЗОВАНИЕ СЕРВИСА** #  
---
## **начало работы** ##  
для запуска сервера воспользуйтесь командой:
> npm run start


Сервер работает следующим образом:
1. на сервере хранятся шаблоны которые используются для создания отчетов;
2. для создания создания своего отчета нужно отправить POST запрос в формате JSON
3. ответом на запрос будет заполненый шаблон


Cервер работает на порту **5645**. поэтому POST запрос отправляется по следущему адресу: ***https://localhost:5645/postdata***  

---  
## **формат отпраляемого JSON запроса** ##  
>{  
>"type_name": "имя_файла.docx",  
>"json_params": { Ваш JSON }  
>}  


имя_файла.docx - имя файла, хранящегося в папке **enviroment**.  

---  
## **хранение шаблонов** ##  
Все шаблоны следует хранить в папке **enviroment**. При добавлении своего шаблона следует учитывать:  
1. в папке enviroment не должно быть двух шаблонов с одинаковыми именами;
2. все шаблоны следует хранить в формате docx;

---
## **docker** ##  
Команда для создания контейнера:  
> docker build -t my-docx-exporter .


Команда для запуска контейнера:  
> docker run -d -p 5645:5645 my-docx-exporter  
> docker run -d --network=host my-docx-template  

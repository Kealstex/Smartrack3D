# Smartrack3D
Рекламный лендинг 

## Инструкция по установке
1. Скачать репозиторий
2. Скачать Visual Code 
    1. Список плагинов для удобства: https://docs.google.com/document/d/1KXe7RcSUE5iwYqqHNNlLa6ZR96JEvAxTianqasYNWiI/edit
2. Установить ***npm*** https://nodejs.org/ru/download/
3. Инициализация npm-проекта
    1. Зайти в папку с проектом с помощью Visual Code (нужно находиться в корне папки: ***Smartrack*** )
    2. Открыть ***терминал Visual Code***
    3. Прописать ***npm init*** и прописать свойства на своё усмотрение (***enter*** оставить по умолчанию)
4. Установить ***gulp*** https://gulpjs.com (ТОЛЬК ПОСЛЕ NPM INIT)
    1. Прописать ***npm install --global gulp-cli***
    2. Прописать ***npm install --save-dev gulp***
    3. Если возникают ошибки: установить нужные пакеты. Все пакеты прописаны в ***gulpfile.js*** (первые 9 строк)
        1. Например: ***npm i gulp-sass --save-dev***
    4. Запустить в терминале команду ***gulp***. В браузере должна открыться ссылка

:thumbsup: :warning: ***gulp САМ перезагружает страницу при ЛЮБЫХ изменениях. Новые картинки, изменение html, изменение scss (с сохранением)***

## Стуктура файлов

1. Менять код, картинки, скрипты, иконки , т.е. любые данные ***нужно в папке SRC!***
2. css меняем в папке ***src/sass***, он компилируется в css сам. https://sass-scss.ru/guide/
3. ***SCSS*** разбит на используемые блоки. Файл блока с нужными стилями называется так же, как класс секции в ***index.html***. ***section class="contacts"*** - css для этой секции находится в файле _contacts.scss
4. ***index.html*** меняем в папке ***src***
5. ***VIDEO*** меняем в папке ***dist*** (dist/video/...)
6. для видео используется сторонний плеер ***https://videojs.com***
7. ***Код для публикации брать из папки dist***

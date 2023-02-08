<h1 align="center">Проект: "Велотренировки" :ferris_wheel:</h1>

<div align="center">
  <a href="https://elrouss.github.io/competitive-project-team-1/">
    <img src="https://user-images.githubusercontent.com/108838349/211172101-71356242-536a-45a5-b3b4-3423b1fa578a.gif" width="400" alt="Гиф с демонстрацией функционала приложения">
  </a>
</div>

<a name="summary">
<details>
  <summary>Оглавление</summary>
  <ol>
    <li><a href="#team">Команда</a></li>
    <li><a href="#project-description">Описание проекта</a></li>
    <li><a href="#technologies">Стек технологий</a></li>
    <li><a href="#installation">Установка и запуск проекта в локальном репозитории</a></li>
    <li><a href="#establishing">Процесс создания</a></li>
    <ul>
      <li><a href="#tasks-and-problems">Основные задачи, проблемы и их решение</a></li>
    </ul>
    <li><a href="#functionality">Функционал</a></li>
    <li><a href="#enhancement">Планы по улучшению</a></li>
  </ol>
</details>
</a>

<a name="team"><h2>:technologist: 1. Команда</h2></a>
<p>:biking_woman: <a href="https://github.com/sofiapeshekhonova">Софья Пешехонова</a></p>
<p align="center">:biking_man: <a href="https://github.com/elrouss">Борис Зашляпин</a></p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="project-description"><h2>:page_with_curl: 2. Описание проекта</h2></a>
Проектная работа выполнена в рамках командного соревнования студентов <a href="https://practicum.yandex.ru/">"Яндекс Практикума"</a>. Проект представляет собой создание одностраничного сайта по макету, описывающего различные виды велотренировок со ссылками на полезные сервисы для составления индивидуального тренировочного плана велосипедиста. Он корректно отображается на любых устройствах с разрешением экрана от <b>320px</b> до <b>1440px</b> и выше

<h4>:link: Ссылка на макет: https://www.figma.com/file/G3UWFlQmNtNs67751YiDH2/Month-of-Landings_external-link?node-id=2%3A7</h4>
<h4>:link: Ссылка на проект: https://elrouss.github.io/competitive-project-team-1/</h4>
<p><i>* - Проект не входит в основную образовательную программу и является дополнительным</i></p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>:hammer_and_wrench: 3. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>:computer: 4. Установка и запуск проекта в локальном репозитории</h2></a>
1. `git clone https://elrouss.github.io/competitive-project-team-1.git` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `Go live` - запустить команду расширения `Live Server` в `VS Code`

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>:chart_with_upwards_trend: 5. Процесс создания</h2></a>
Главной особенностью этого проекта является приобретение <b>опыта работы в команде</b>. В течение 72 часов, выделенных на конкурс, было сверстано 7 блоков на десктоп и отчасти - мобильные устройства. Уже по завершении конкурса проект был доработан в общих чертах до конца: секции доверстаны на все разрешения, часть компонентов переписана при помощи темплейтов на JS, реализован функционал страницы (см.: <a href="#functionality">п. 6</a>)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="tasks-and-problems"><h3>:exploding_head: 5.1 Основные задачи, проблемы и их решение</h3></a>
1. Вставка <b>темплейта</b> в слайдер, подключенный с помощью библиотеки <b>SplideJS</b>
<p>
  <b>Решение:</b> при вставке карточек <b>темплейтом</b> слайдер отрисовывался, но не был кликабельным. Это оказалось связано с последовательностью подключения скриптов: изначально <b>SplideJS</b> задействовал свои ресурсы, находил элементы по DOM и лишь затем происходила отрисовка карточек. Для корректной работы слайдера был изменен порядок скриптов в файле <b>html</b>, а также вынесена функция рендера карточек из <b>window.onload()</b>. Вопрос задавался на <a href="https://stackoverflow.com/questions/75009781/does-splide-work-if-i-insert-element-in-dom-with-tag-template-vanilla-js">Stack Overflow</a>, но решение проблемы было в итоге найдено нами самостоятельно
</p>

2. <b>Слайдер</b> с меняющимся текстом при клике на кнопку
<p>
  <b>Решение:</b> пожалуй, одна из самых простых задач, для которой была <a href="https://github.com/elrouss/competitive-project-team-1/commit/5a18ae4fdf847142faa57103c66545c287cf0f29#:~:text=//%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22Roads%22.%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%B8%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0%20%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%D0%B0">написана</a> логика со счетчиком, реагирующим изменением текста и векторной иконки на события клика и нажатий клавиш со стрелками влево или вправо. Так, 1 равен тексту 1-го слайда, 2 и 3 - соответственно 2-го и 3-го. При движении вправо счетчик увеличивается на единицу, при движении влево - уменьшается; в случае выхода за пределы количества слайдов он сбрасывается до 1 и начинает свой отсчет сначала. Для того чтобы логика оставалась рабочей, отключены свайпы на десктопном и мобильном разрешении
</p>

3. <b>"Дергающаяся" верстка</b> при переключении блоков карточек в галерее по табам
<p>
  <b>Решение:</b> процесс рендеринга очередного блока карточек запускался исключительно при клике на таб, что приводило к некрасивому "миганию" верстки и вставке элементов. В качестве решения реализована <b>одновременная отрисовка всех 3 блоков</b>, где 2 остаются скрытыми и та или иная группа становится активной при выборе таба и добавлении селектора модификатора, меняющего ее видимость
</p>

4. Изменение позиции переключателя светлой/темной темы на десктопных и мобильных устройствах
<p>
  <b>Решение:</b> дублирование верстки свитчера в <b>html</b> в гамбургере-меню ломало функциональность кнопки в подвале на десктопном разрешении. Это объяснялось тем, что <b>querySelector</b> находил первый селектор кнопки (CSS-свойство <b>display: none</b> только скрывает элемент в потоке документа, но <b>не исключает</b> его из <b>DOM</b>). <a href="https://github.com/elrouss/competitive-project-team-1/commit/693ef4e22a2bcc67856f05be7495b225c07a9403#:~:text=theme)%20%7B-,function%20considerStartPositionBtnTheme(theme)%20%7B,-theme%20%3D%3D%3D%20%27light">Выходом</a> из этой ситуации стал одновременный поиск селекторов обеих кнопок методом <b>querySelectorAll</b> с подключением функционала к каждой методом <b>forEach</b>
</p>

5. Отличие верстки карточек в галерее от макета при светлой теме
<p>
  <b>Решение (не реализовано!):</b> дизайнер макета использовал эффект <b>box-shadow</b>, который вступает в конфликт со свойством <b>overflow: hidden</b> при верстке макета, создавая некрасивый "сплющенный" эффект (есть несколько постов с описанием этой проблемы на <a href="https://stackoverflow.com/questions/34238094/show-box-shadow-outside-of-overflow-area">Stack Overflow</a>). Отказаться от <b>overflow: hidden</b> не представляется возможным, поскольку здесь дизайнером запланирован слайдер (который нельзя реализовать без упомянутого CSS-свойства). Предварительно найден вариант решить проблему через <b>абсолютное позиционирование</b> и <b>внутренние отступы</b> (что, однако, нерационально); возможно, следует изменить структуру <b>html-верстки</b>
</p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>:man_mechanic: 6. Функционал</h2></a>
<details>
  <summary>:white_check_mark: Адаптивный интерфейс</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217515351-dc5fec13-4bd8-4069-b0a1-8eb3dbbb882d.gif" alt="Гиф с демонстрацией адаптивного интерфейса сайта">
  </a>
</details>

<details>
  <summary>:white_check_mark: Открытие и закрытие модального окна (на мобильных устройствах)</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="250" src="https://user-images.githubusercontent.com/108838349/217513763-46ca6bcb-7d23-41ac-baca-6ec7f42ac4df.gif" alt="Гиф с демонстрацией открытия и закрытия модального окна (на мобильных устройствах)">
  </a>
</details>

<details>
  <summary>:white_check_mark: Слайдер с переключением текста</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="250" src="https://user-images.githubusercontent.com/108838349/217513799-62d333b0-969a-46a0-be63-0cfd577f9290.gif" alt="Гиф с демонстрацией слайдера с переключением текста">
  </a>
</details>

<details>
  <summary>:white_check_mark: Выпадающее меню с переключением карточек и слайдером (для мобильных устройств, планшетов и ноутбуков)</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="250" src="https://user-images.githubusercontent.com/108838349/217515328-3d057910-07b7-4bfd-aec5-e624ffde4c64.gif" alt="Гиф с демонстрацией выпадающего меню с переключением карточек и слайдером">
  </a>
</details>

<details>
  <summary>:white_check_mark: Переключатель светлой/темной темы</summary>
  <a href="https://elrouss.github.io/mesto/">
    <img width="250" src="https://user-images.githubusercontent.com/108838349/217513875-845a0fdd-1666-435c-af21-78c117750fbb.gif" alt="Гиф с демонстрацией переключателя светлой/темной темы">
  </a>
</details>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>:balance_scale: 7. Планы по улучшению</h2></a>
:o: Оптимизировать программный код<br>
:o: Оптимизировать сайт для людей с ограниченными возможностями (напр, label для поля формы)<br>
:o: Сверстать и заменить дефолтное окно выпадающего меню на мобильных устройствах и планшетах<br>
:o: Написать логику валидации формы<br>
:o: Убрать фокус у скрытых элементов и исчезновение кнопки сабмита формы при перемещении по странице клавишей Tab<br>
:o: Стилизовать фокус у элементов<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<div align="center">
  <a href="https://elrouss.github.io/competitive-project-team-1/">
    <img width="300" alt="Снимок экрана 2023-01-08 в 04 05 39" src="https://user-images.githubusercontent.com/108838349/211173460-6c9f0420-c278-4ba1-91e6-d3c7561d1fcc.png">
  </a>
  <a href="https://elrouss.github.io/competitive-project-team-1/">
    <img width="300" alt="Снимок экрана 2023-01-08 в 04 09 50" src="https://user-images.githubusercontent.com/108838349/211173559-b7801344-c8ce-4636-96da-73156e5b97bd.png">
  </a>
</div>

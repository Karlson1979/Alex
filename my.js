// const squareEl=document.querySelector('.square')
// const circleEl=document.querySelector('.circle')
// const bodyEl=document.querySelector('body')
// // console.log(bodyEl)

// circleEl.addEventListener('mousemove',()=>{
// const x=Math.round(Math.random()*window.screen.width-100)
// const y=Math.round(Math.random()*window.screen.height-100)
// circleEl.style.left=`${x}px`
// circleEl.style.top=`${y}px`

// })
// bodyEl.addEventListener('click',()=>{
//   location.reload();

// })

const timeEl = document.querySelector('.time');
const dateEl=document.querySelector('.date')

    function getTime(){
        const now=new Date()
        return{
hour:now.getHours(),
minutes:now.getMinutes(),
sec:now.getSeconds()

        }
    }

    function updateTime(){
        const time=getTime()
        const formatTime=`${String(time.hour).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.sec).padStart(2, '0')}`
        timeEl.innerHTML=formatTime
    }
    updateTime()

    setInterval(updateTime,1000)
    

    // Функция для получения текущей даты
    function getDate() {
      const nowDate = new Date();
      return {
        year: nowDate.getFullYear(), // Вызываем метод getFullYear()
        month: nowDate.getMonth() + 1, // Вызываем метод getMonth() и добавляем 1, так как месяцы в JavaScript начинаются с 0
        day: nowDate.getDate() // Вызываем метод getDate()
      };
    }

    // Создаем новый элемент span для отображения даты
    const dateElement = document.createElement('span');

    // Получаем объект с текущей датой
    const currentDate = getDate();

    // Формируем строку с датой в формате ГГГГ-ММ-ДД
    const formattedDate = `${currentDate.year}-${String(currentDate.month).padStart(2, '0')}-${String(currentDate.day).padStart(2, '0')}`;

    // Устанавливаем текст элемента span равным сформированной дате
    dateElement.textContent = formattedDate;

    // Добавляем элемент span в div с id "dateOutput"
    dateEl.appendChild(dateElement);
console.log("app.js");
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    center: true,
    dots: true
  });

  function getAllUrlParams(url) {
    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {
      // данные после знака # будут опущены
      queryString = queryString.split("#")[0];

      // разделяем параметры
      var arr = queryString.split("&");

      for (var i = 0; i < arr.length; i++) {
        // разделяем параметр на ключ => значение
        var a = arr[i].split("=");

        // обработка данных вида: list[]=thing1&list[]=thing2
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
          paramNum = v.slice(1, -1);
          return "";
        });

        // передача значения параметра ('true' если значение не задано)
        var paramValue = typeof a[1] === "undefined" ? true : a[1];

        // преобразование регистра
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();

        // если ключ параметра уже задан
        if (obj[paramName]) {
          // преобразуем текущее значение в массив
          if (typeof obj[paramName] === "string") {
            obj[paramName] = [obj[paramName]];
          }
          // если не задан индекс...
          if (typeof paramNum === "undefined") {
            // помещаем значение в конец массива
            obj[paramName].push(paramValue);
          }
          // если индекс задан...
          else {
            // размещаем элемент по заданному индексу
            obj[paramName][paramNum] = paramValue;
          }
        }
        // если параметр не задан, делаем это вручную
        else {
          obj[paramName] = paramValue;
        }
      }
    }

    return obj;
  }

  function varPage() {
    let url = window.location.href
    let getObj = getAllUrlParams(url)

    console.log('getObj.tag1st', getObj)
    // для первого пункта 
    if (getObj.tag1st === 'castration') {
        $('.tag1st1, .tag1st2').removeClass('active')
        $('.tag1st2').addClass('active')
    } else {
        $('.tag1st1, .tag1st2').removeClass('active')
        $('.tag1st1').addClass('active')
    }

    // для второго пункта
    if (getObj.tag3d === 'cat') {
        $('.tag3d1, .tag3d2').removeClass('active')
        $('.tag3d2').addClass('active')
    } else {
        $('.tag3d1, .tag3d2').removeClass('active')
        $('.tag3d1').addClass('active')
    }
  }

  varPage()
});

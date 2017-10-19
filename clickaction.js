document.addEventListener('DOMContentLoaded', function() {
  setCatGif();

  var checkImgClick = document.getElementById('mainImg');
  checkImgClick.addEventListener('click', function() {
      setCatGif();
  });
});

function setCatGif() {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var xmlInfo = this.responseXML;
      var imgUrl = xmlInfo.getElementsByTagName("url")[0];
      var imgNodeValue = imgUrl.firstChild.nodeValue;

      testImage(imgNodeValue);
    }
  });

  xhr.open("GET", "http://thecatapi.com/api/images/get?format=xml&type=png");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "6fd9c182-b1bd-6e33-34d8-72bcaa2f3264");

  xhr.send(data);
}

function testImage(url) {
    var tester = new Image();
    tester.addEventListener('load', function() {
      document.getElementById("mainImg").src = url;
      document.getElementById("mainImg").style.width = "350px";
      document.getElementById("loadError").innerHTML = "";
    });
    tester.addEventListener('error', function() {
      document.getElementById("mainImg").src = "puppucino.jpg";
      document.getElementById("loadError").innerHTML = "That image was not found. Please enjoy this puppucino picture.";
    });
    tester.src = url;
}

function parseXML(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("title")[0];
    var y = x.childNodes[0];
    document.getElementById("demo").innerHTML =
    y.nodeValue;
}
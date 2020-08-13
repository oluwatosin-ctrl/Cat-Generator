function Generatecat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-box-cat')
    var rnd = new Date().getTime();
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"+rnd
    div.append(image);
}
function Refresh(){
    location.reload();
}
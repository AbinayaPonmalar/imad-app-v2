var button = document.getElementById('counter');
button.onclick = function(){
    //create a req obj
    var request = new XMLHttpRequest();
    //capture the response n store in a value
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200) 
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
            }
        }
    };
    request.open('GET', 'http://abinayaponmalar.imad.hasura-app.io/', true);
    request.send(null);
};
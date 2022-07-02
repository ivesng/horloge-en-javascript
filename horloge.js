    function go(t){
        var intervalId = null;
        var varCounter = 0;
        var id = "compteur" + t.value

        var varName = function(){
            if(t.value != 'true'+ t.value) {
                varCounter++
                t.hidden = 'true'

                if (varCounter <= 3600 && varCounter >= 60){
                    document.getElementById(id).innerHTML = (parseInt(varCounter/60)) + ' min : ' + (parseInt(varCounter%60))+ ' s';
                }else if (varCounter >= 3600){
                    document.getElementById(id).innerHTML = (parseInt(varCounter/60)) + ' min : ' + (parseInt(varCounter%60))+ ' s';
                }else
                    document.getElementById(id).innerHTML = (varCounter) + 's';
                debut(t.value)

            } else if (t.value == 'true' + t.value) {
                document.getElementById(id).innerHTML = 'FIN';
                fin(t.value)
                t.hidden = 'true'
                clearInterval(intervalId);
            }
        };

        $(document).ready(function(){
            intervalId = setInterval(varName, 1000);
        });

    }
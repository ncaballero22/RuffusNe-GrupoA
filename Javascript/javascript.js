let num1=20;
        let num2=10;
        let suma=num1+num2;
        let multi=num1*num2;
        let div=num1/num2;
        let resta=num1-num2;
        document.write(suma);
        document.write("<br>")
        document.write(resta+"<br>");
        document.write(multi+"<br>");
        document.write(div+"<br>");

        if(num1>num2){
            document.write("El numero 1 es mayor");    
        }else{
            document.write("El numero 2 es mayor");
        }

        document.write("<br>");
        let diaSemana=3;
        switch(diaSemana){
            case 1:
                //aqui poner esta opcion
                document.write("LUNES");
                break;
            case 2:
                //aqui poner esta opcion
                document.write("MARTES");
                break;
            case 3:
                //aqui poner esta opcion
                document.write("MIERCOLES");
                break;
            case 4:
                //aqui poner esta opcion
                document.write("JUEVES");
                break;
            case 5:
                //aqui poner esta opcion
                document.write("VIERNES");
                break;
            case 1:
                //aqui poner esta opcion
                document.write("LUNES");
                break;
            default:
                document.write("YA ES FIN DE SEMANA");                      
        }

        //ciclo FOR

        for (var i = 0; i < 10; i++) {
            document.write("<h1>"+i+"</h1>");
        }
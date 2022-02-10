showWhatNumber = (numberId) => {
      const number = document.getElementById(numberId);
      number.classList.add('show');
}
closeWhatNumber = (numberId) => {
      const number = document.getElementById(numberId);
      number.classList.remove('show')
}
showMensagem = (modaId) => {
      const modal = document.getElementById(modaId);
      modal.classList.add('mostrar');
}
closeMensagem = (modalId) => {
      const modal = document.getElementById(modalId);
      const nome = document.getElementById("campo-nome").value;
      const email = document.getElementById("campo-email").value;
      modal.classList.remove('mostrar')
      alert(" Sr(a) " +nome+" recebemos sua solicitação,em breve enviaremos email para "+email);
}

tamanho = 20;
diminuirIA = () => {
      tamanho--;
      document.getElementById('intru-art').style.fontSize = tamanho + "px";
}
aumentarIA = () => {
      tamanho++;
      document.getElementById('intru-art').style.fontSize = tamanho + "px";
}

tamanho = 16;
diminuirCA = () => {
      tamanho--;
      document.getElementById('convert-art').style.fontSize = tamanho + "px";
}
aumentarCA = () => {
      tamanho++;
      document.getElementById('convert-art').style.fontSize = tamanho + "px";
}
tamanho = 16;
diminuirCLA = () => {
      tamanho--;
      document.getElementById('calc-art').style.fontSize = tamanho + "px";
}
aumentarCLA = () => {
      tamanho++;
      document.getElementById('calc-art').style.fontSize = tamanho + "px";
}
mudaFotoConvert = (foto) => {
      document.getElementById("i_convert_img").src = foto;
}
mudaFotoCalc = (foto) => {
      document.getElementById("i_calc_img").src = foto;
}
var motionH = 0;
darkMotionH = () => {
      if (motionH === 0) {
            document.getElementById('i_intru').style.cssText = `
                        background-color:black;
                        color:yellow;              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color:blue;
                        color:yellow;              
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color:black;                                  
                        `;
            document.getElementById('i_convert').style.cssText = `
                        background-color:black;                                  
                        `;
            motionH++;
            setTimeout(darkMotionH, 2000);

      } else {
            document.getElementById('i_intru').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color: rgba(25, 64, 118,1);
                        background-image: linear-gradient(to top, transparent, rgba(25, 64, 118,0.8));
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));                               
                        `;
            document.getElementById('i_convert').style.cssText = `
                        background-color: rgba(25, 64, 48,1);
                        background-image: linear-gradient(to top, transparent, rgba(25, 64, 118,0.8));                                
                        `;
            motionH = 0;
      }
}

var motionT = 0;
darkMotionT = () => {
      if (motionT === 0) {
            document.getElementById('i_intru').style.cssText = `
                        background-color:black;
                        color:yellow;              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color:blue;
                        color:yellow;              
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color:black;                                  
                        `;
            motionT++;
            setTimeout(darkMotionT, 2000);
      } else {
            document.getElementById('i_intru').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color: rgba(25, 64, 118,1);
                        background-image: linear-gradient(to top, transparent, rgba(25, 64, 118,0.8));
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));                               
                        `;
            motionT = 0;
      }
}

var motionC = 0;
darkMotionC = () => {
      if (motionC === 0) {
            document.getElementById('i_intru').style.cssText = `
                        background-color:black;
                        color:yellow;              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color:blue;
                        color:yellow;              
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color:black;                                  
                        `;
            motionC++;
            setTimeout(darkMotionC, 2000);
      } else {
            document.getElementById('i_intru').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));              
                        `;
            document.getElementById('i_sub_intru').style.cssText = `
                        background-color: rgba(25, 64, 118,1);
                        background-image: linear-gradient(to top, transparent, rgba(25, 64, 118,0.8));
                        `;
            document.getElementById('muda_layout').style.cssText = `
                        background-color: rgba(27, 59, 128,1);
                        background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 128,0.5));                               
                        `;
            motionC = 0;
      }
}

convert = () => {
      var tipo = document.querySelector('input[name="cb"]:checked').value;
      var valor = document.getElementById('convert_valor').value;
      var moeda = document.getElementById('convert_moeda').value;
      if (tipo == "compra" && moeda === 'us') {
            valorC = valor * 5.3;
            document.getElementById('convert_result').innerHTML = ` compra de             
            &#36;${valor} , total ${valorC.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`;
      }
      else if (tipo == "venda" && moeda === 'us') {
            valorV = valor * 4.7;
            document.getElementById('convert_result').innerHTML = ` venda de             
              &#36;${valor} , total ${valorV.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`;
      }
      else if (tipo == "compra" && moeda === 'eu') {
            valorC = valor * 6.4;
            document.getElementById('convert_result').innerHTML = ` compra de             
             &euro;${valor} , total ${valorC.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`;
      }
      else if (tipo == "venda" && moeda === 'eu') {
            valorV = valor * 5.9;
            document.getElementById('convert_result').innerHTML = ` venda de             
              &euro;${valor} , total ${valorV.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}`;
      }
}

convector = () => {
      var g = document.getElementById('convert_g').value;
      var valor = document.getElementById('convert_graus').value;
      if (g == "f") {
            var c = (valor - 32) / 1.8;
            document.getElementById('convert_res').innerHTML = ` ${c.toFixed(2)}° Celsius `
      } else {
            var f = (valor * 1.8) + 32;
            document.getElementById('convert_res').innerHTML = ` ${f.toFixed(2)}° Fahrenheit `
      }
}

calcular = (e) => {
      var n1 = parseFloat(document.getElementById('calc_n1').value);
      var n2 = parseFloat(document.getElementById('calc_n2').value);
      /*  if (e.id ==="calc_add" ){                      
              s = n1 + n2 ;
        }
      else if (e.id ==="calc_sub"){
              s = n1 - n2 ;
           }
     else if (e.id ==="calc_mult"){
              s = n1 * n2 ;
           }
     else if (e.id ==="calc_divi"){
              s = n1 / n2 ;
           }
     else if (e.id ==="calc_porc"){
            s = (n1 / 100) * n2 ;
           }
     else if (e.id ==="calc_pote"){
        s = Math.pow(n1, n2); 
           }
     else if (e.id ==="calc_rad"){
        s = Math.pow(n1, (1.0/n2)) ;
           } */
      switch (e.id) {
            case "calc_add":
                  s = n1 + n2;
                  break;
            case "calc_sub":
                  s = n1 - n2;
                  break;
            case "calc_mult":
                  s = n1 * n2;
                  break;
            case "calc_divi":
                  s = n1 / n2;
                  break;
            case "calc_porc":
                  s = (n1 / 100) * n2;
                  break;
            case "calc_pote":
                  s = Math.pow(n1, n2);
                  break;
            case "calc_rad":
                  s = Math.pow(n1, (1.0 / n2));
                  break;
      }
      document.getElementById('calc_result').innerHTML =
            ` ${s}`
}

limparCalc = () => {
      var numberOne = document.getElementById('calc_n1');
      var numberTwo = document.getElementById('calc_n2');
      var resultado = document.getElementById('calc_result');
      numberOne.value = " Selecione um número ";
      numberTwo.value = " Selecione um número";
      resultado.innerHTML = " ";
}

limparDados = () => {
      var valorCambio = document.getElementById('convert_valor');
      var valorGraus = document.getElementById('convert_graus');
      var resultado = document.getElementById('convert_result');
      var res = document.getElementById('convert_res');
      valorCambio.value = " ";
      valorGraus.value = "Digite aqui° ";
      resultado.innerHTML = " ";
      res.innerHTML = " ";
}




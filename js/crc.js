const btn_calcular = document.getElementById('btn_calcular');
const brn_validar = document.getElementById('enviar_validar');
const CRC = document.getElementById('CRC_input');
const D = document.getElementById('D_input');
const G = document.getElementById('G_input');
const R = document.getElementById('R_input');
const TX_input = document.getElementById('TX_input');
const CRC_label = document.getElementById('laber_crc');
const TX_label = document.getElementById('TX_label');
const mensaje_validacion = document.getElementById('mensaje_validacion');
const receptor_crc = document.getElementById('receptor_crc');
const receptor_crc_popup = document.getElementById('receptor_crc_popup');
const receptor_TX = document.getElementById('receptor_TX');
const receptor_crc_label = document.getElementById('receptor_label_crc');
const receptor_label_crc_popup = document.getElementById('receptor_label_crc_popup');
const receptor_TX_label = document.getElementById('receptor_label_TX');
const section_msn = document.getElementById('section_msn');
const generado_activar = document.getElementById('generado_activar');
const numerador_div = document.getElementById('numerador_div');
const denominador_div = document.getElementById('denominador_div');

CRC_label.classList.add('active');
TX_label.classList.add('active');

D.value = '10011110001';
G.value = '10011';

btn_calcular.addEventListener('click', () => {

    CRC_label.classList.add('active');
    TX_label.classList.add('active');
    const crcFetch = resultCrc(D.value, G.value);
    console.log(crcFetch.dataRes.residuos.length);

    console.log(crcFetch.dataRes.g.length);

   

    if(crcFetch.code === 'OK') {
        CRC.value = crcFetch.dataRes.crc;
        TX_input.value = crcFetch.dataRes.d + crcFetch.dataRes.crc;
        generado_activar.classList.add('active');
    }

    let numerador = crcFetch.dataRes.d + crcFetch.dataRes.r;
    numerador_div.innerHTML = numerador;

    denominador_div.innerHTML = crcFetch.dataRes.g;

    let numeradores = crcFetch.dataRes.residuos;

    console.log(numeradores)



  overlay.classList.add('active');
	popup.classList.add('active');
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let newContent = document.createTextNode("Hola!¿Qué tal?");
  let newContent2 = document.createTextNode("Hola!¿Qué tal?2");
  newDiv.appendChild(newContent); 
  newDiv2.appendChild(newContent2); 

  let variable = new Array();
  const prueba = numeradores;
  let cont = 0;
  let num = '';
  for(let numero of numeradores) {
    
    num = num + numero; 

    if(cont ===  5){
      variable.push(num)
      cont = 0;
      num = '';
    }

  }

  console.log(variable);

  let add = document.getElementById('container_operation');
  add.appendChild(newDiv);
  add.appendChild(newDiv2);




    
});

brn_validar.addEventListener('click', () => {

    const crcReceptor = resultReception(TX_input.value, G.value);

    receptor_crc_label.classList.add('active');
    receptor_crc.value = crcReceptor.dataRes.resultCRC;

    // receptor_label_crc_popup.classList.add('active');
    // receptor_crc_popup.value = crcReceptor.dataRes.resultCRC;

    let validado = true;


    for(let crc of receptor_crc.value) {
        if(crc !== '0') {
            validado = false;
        }
    }

    section_msn.classList.add('active');

    mensaje_validacion.innerHTML = 'Mensaje correcto';

    if(!validado) {
        mensaje_validacion.innerHTML = 'Mensaje incorrecto';
    }

    console.log(crcReceptor.dataRes.resultCRC);
});


const resultCrc = (d_fetch, g_fetch) => {
    let result;
    let settings = {
        "url": "http://localhost:8080/calcularCRC",
        "method": "POST",
        "async": false,
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "d": d_fetch,
          "g": g_fetch
        }),
    };
    
    $.ajax(settings).done(function (response) {
        result = response;
    });
    
    return result;
}

const resultReception = (tx_recep, g_recep) => {
    let result;
    let settings = {
        "url": "http://localhost:8080/calcularReceptor",
        "method": "POST",
        "async": false,
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "tx": tx_recep,
          "g": g_recep
        }),
      };
      
      $.ajax(settings).done(function (response) {
        // console.log(response);
        result = response;
      });

      return result;
}





























































// $(document).ready(() => {
//     $('#btn_calcular').bind('click', calcular);
// })
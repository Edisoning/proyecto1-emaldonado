/* eslint-disable no-undef */
import './App.css'; 
//import React, {useState, useEffect, useRef} from 'react';

export default function Crono() {  
  //console.log("Entra a CRONO");   
  //const[milli, setMilli] = useState(0);
  //const[started, setStarted] = useState(false);
  //const startRef = useRef(new Date());

  /*function iniciar(){
    console.log("iniciar")
  }*/

  function agregar (){            
    //console.log("aca");  
    const tex= document.getElementById('t1');
    const tex2= document.getElementById('t2');
    const desc= document.getElementById('desc');

    //const container= document.getElementById('container')
    const tr= document.getElementById('cr'); // CREA UN elemento
    const h1= document.createElement('h1'); //CREA UN h1
    const h5= document.createElement('h5');
    const bt= document.createElement('button');
    const btp= document.createElement("button");

    console.log("t1 : " + tex.value);
    console.log("t2 : " + tex2.value); 

    //var tex = "1234";
    var valoresAceptados = /^[0-9]+$/;
    if (tex.value.match(valoresAceptados) && tex2.value.match(valoresAceptados)){
      var momentoActual = new Date()      
      var minuto = momentoActual.getMinutes() 
      var segundo = momentoActual.getSeconds()
      console.log(minuto)
      console.log(segundo)
      //minuto + ':' + segundo; 
      h1.textContent=tex.value + ":" + tex2.value // AGREGA TEXTO AL h1

      var mayu = desc.value;
      mayu = mayu.toUpperCase();
      h5.textContent=mayu;
   
      tr.appendChild(h5)  // CREA h1 EN EL h5;
      tr.appendChild(h1)  // CREA h1 EN EL h1;
      
      bt.textContent='Iniciar';       
      btp.textContent='Pausar';
      tr.appendChild(bt)
      tr.appendChild(btp)
      bt.setAttribute('onClick', 'iniciar');
      bt.setAttribute('type', 'button')
      btp.setAttribute('onClick', 'pausar');
      //console.log("antes del txt " + tex.value )
      
      tex.value = "";
      tex2.value = "";
      desc.value = "";
     

    } else {
      alert ("Debe Ingresar Valores numérico..");
    }     
  }    
/*
  useEffect(() => {   
        if (!started) return;
    const interval = setInterval(() => {
      setMilli(+new Date() - + startRef.current);         
    },1000);
    return () => {
      clearInterval(interval);
    };
  },[started]); 
    <h3>  
      <button onClick={() => {setStarted(!started)}}>{started ? 'Pausar' :'Iniciar'}</button>      
      Cronometer : {new Date(milli).toISOString().split('T')[1].replace('Z', '')  }      
    </h3>   
    
    */

  return (
    <div className='cont'>   
    <tbody>
      <tr>
        <td><input className="input" id="t1" type="text" /></td><td> </td>
        <td><input className="input" id="t2" type="text" /></td><td> </td>
        <td><input className="inputtext" id="desc" type="text" placeholder='Descripcion' /></td>
       
      </tr>
      <tr>
        <td className='textdes'>Minutos</td><td> </td>
        <td className='textdes'>Segundos</td><td> </td>
        <td className='textdes' ></td>  
      </tr>      
      <br/>
      <tr> 
        <td><button className="btcrono" type="button" onClick={agregar}>Agregar</button> </td>
        <td></td>
        <td></td>  
      </tr>
    </tbody>        
        <tr id="cr"></tr>        
    </div>     
  );
  /*
    <h3>  
      <button onClick={() => {setStarted(!started)}}>{started ? 'Pausar' :'Iniciar'}</button>      
      Cronometer : {new Date(milli).toISOString().split('T')[1].replace('Z', '')  }      
    </h3> 
    
         function agregar (){
            
            console.log("aca");  
            const tex= document.getElementById('t1');
            const tex2= document.getElementById('t2');
            const desc= document.getElementById('desc');

            //const container= document.getElementById('container')
            const tr= document.getElementById('cr'); // CREA UN elemento
            //const h1= document.createElement('h1'); //CREA UN h1
            const h5= document.createElement('h5');
            const bt= document.createElement('button');
            const btp= document.createElement("button");

            console.log("t1 : " + tex.value);
            console.log("t2 : " + tex2.value); 

            //var tex = "1234";
            var valoresAceptados = /^[0-9]+$/;
            if (tex.value.match(valoresAceptados) && tex2.value.match(valoresAceptados)){
              h1.textContent=tex.value + ":" + tex2.value // AGREGA TEXTO AL h1
              var mayu = desc.value;
              mayu = mayu.toUpperCase();
              h5.textContent=mayu;
              //h5.textContent.toUpperCase=desc.value;
              tr.appendChild(h5)  // CREA h1 EN EL DIV;
              tr.appendChild(h1)  // CREA h1 EN EL DIV;
              
              bt.textContent='Iniciar';       
              btp.textContent='Pausar';
              tr.appendChild(bt)
              tr.appendChild(btp)
              bt.setAttribute('onClick', `{iniciar}`);
              bt.setAttribute('type', 'button')
              btp.setAttribute('onClick', `{pausar}`);
            } else {
              alert ("Debe Ingresar Valores numérico..");
            }    
            
            

        } */

  
    /*
  return (    
  <div className='cont'>
      <table>
        <tr>
          <td><input className="input" id="t1" type="text" /></td>
          <td><input className="input" id="t2" type="text" /></td>
          <td><input className="inputtext" id="desc" type="text" placeholder='Descripcion' /></td>          
        </tr>
        <tr>
          <td className='textdes'>Minutos</td>
          <td className='textdes'>Segundos</td>
          <td className='textdes' ></td>  
        </tr>
        
        <br/>
        <tr> 
          <td></td>
          <td><button className="btcrono" type="button" onClick={agregar}>Agregar</button></td>
          <td></td>  
        </tr>
      </table> 
        <table>
          <tr id="cr"></tr>
        </table>
        
      
      
  </div>      
  ); */
}


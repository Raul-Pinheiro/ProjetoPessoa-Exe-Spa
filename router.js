import {Home} from "./src/componentes/CompHome/compHome.js";
import {About} from "./src/componentes/CompAbout/compAbout.js";
import {Projetos} from "./src/componentes/CompProjetos/compProjetos.js";


const div = document.querySelector('[data-container]');

const rotas = {
    '/':Home,
    '/about':About,
    '/projetos':Projetos
}

function init(pathname){
    div.innerHTML="";    
    window.history.pushState({},window.location, window.location.origin + pathname)
    div.appendChild(rotas[window.location.pathname]()); 
   

}

window.addEventListener('load',()=>{    
    div.appendChild(rotas[window.location.pathname]());
})

window.onpopstate = ()=>{
    div.innerHTML="";        
    div.appendChild(rotas[window.location.pathname]()); 
}


window.init=init;
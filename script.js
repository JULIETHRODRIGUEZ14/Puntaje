const marcoPuntaje = document.querySelector('.puntaje');/*queryselector trae la clase del puntaje*/
let puntajeActual = 0; /*variable*/
const puntajeLimite = 5;

const html = Array.from(Array(puntajeLimite)).map((item, i) =>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;/*div construccion de las 5 diviciones*//*las clases se llaman item 5diviciones -i segun el arreglo lo va aguardar item 1-2-3-4- data indice de posicion*/
});
/*contruccion de una regla*/  /*.map dibujar en html*/ /*i es la que debe tener en cuenta la posicion */

marcoPuntaje.innerHTML = html.join('');/*inserte en el html htmlMpa lo integre*/

document.querySelectorAll(".item").forEach(item =>{/*traer todo lo de la clase item */
    item.addEventListener("mouseover", e =>{/*escuchar cuando el mouse este encima de los cuadrados grises, tenga encuenta cuando pase por encima*/
        // console.log("Funciona");
        const posicion = item.getAttribute("data-pos");

        if(puntajeActual === parseInt(posicion) + 1){ /*3 iguales es una comparcion estricta*/
                    return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => {
            if (cuadraditoGris.classList.contains("selec")){
                cuadraditoGris.classList.remove("selec");
            }
        });


        for(let i = 0; i <= posicion; i++) { /*for depende de la posicion su limite es la posiscion yq ue aumente de 1-1*/
            const cuadradito = document.querySelector(`.item-${i}`); /*guarde el indice*/
            if(!cuadradito.classList.contains("selec")){
                cuadradito.classList.add("selec");
}


}
puntajeActual = parseInt(posicion) + 1;


});

item.addEventListener("click", (e) => {
    const posicion = item.getAttribute("data-pos");
    puntajeActual = parseInt(posicion) + 1;
    console.log(puntajeActual);
});
});


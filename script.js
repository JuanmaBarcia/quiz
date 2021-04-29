const resp = {
    q5001: "pn",
    q5002: [true, false, false],
    q5003: 14,
    q5004: [false, true, false],
    q5005: "16Sem",
    q5006: ["v5006a", "v5006b"],
    q5007: "20Sem"
}

function campoVacio(arr, index) {
    if (!document.querySelector(`#${arr[index]} p`)) {
        let pElement = document.createElement("p");
        let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
        pElement.appendChild(contenido);
        document.querySelector(`#${arr[index]}`).appendChild(pElement);
        let p = document.querySelector(`#${arr[index]} p`);
        let attr = document.createAttribute("class");
        attr.value = "campo_vacio";
        p.setAttributeNode(attr);
    }
    document.getElementById(arr[index]).className = "default"
}

function campoRelleno(arr, index) {
    if (document.querySelector(`#${arr[index]} p`)) {
        document.querySelector(`#${arr[index]} p`).remove()
    }
}

document.getElementById("quiz").addEventListener("submit", function(event) {

    event.preventDefault();

    let valRespuestas = document.querySelectorAll('[name]')
    let arrNames = []

    for (let i = 1; i < valRespuestas.length - 1; i++) {
        if (!arrNames.includes(valRespuestas[i].name)) {
            arrNames.push(valRespuestas[i].name)
        }
    }
    // --------------------------- Validaciones --------------------------- //

    // console.log('arrNames:');
    // console.log(arrNames);

    for (let j = 0; j < arrNames.length; j++) {
        let valResp = document.querySelectorAll(`[name="${arrNames[j]}"]`)
        console.log('valResp:');
        console.log(valResp);

        let contadorResp = undefined
        let arrResp = []
        for (let i = 0; i < valResp.length; i++) {
            // console.log('valResp.type:');
            // console.log(valResp[i].type);

            // -------------------------------------------- RADIO -------------------------------------------- //
            if (valResp[i].type == "radio") {
                if (valResp[i].checked) {
                    contadorResp++
                    campoRelleno(arrNames, j)
                    if (valResp[i].value == resp[arrNames[j]]) {
                        document.getElementById(arrNames[j]).className = "green"
                    } else {
                        document.getElementById(arrNames[j]).className = "red"
                    }
                }

                if (contadorResp == undefined) {
                    campoVacio(arrNames, j)
                }
            }

            // -------------------------------------------- NUMBER -------------------------------------------- //

            if (valResp[i].type == "number") {
                if (!valResp[i].value) {
                    campoVacio(arrNames, j)
                } else {
                    campoRelleno(arrNames, j)
                    if (valResp[i].value == resp[arrNames[j]]) {
                        document.getElementById(arrNames[j]).className = "green"
                    } else {
                        document.getElementById(arrNames[j]).className = "red"
                    }
                }
            }

            // ------------------------------------------- CHECKBOX ------------------------------------------- //

            if (valResp[i].type == "checkbox") {
                arrResp.push(valResp[i].checked)
                if (valResp[i].checked) {
                    contadorResp++
                }

                if (arrResp.toString() == resp[arrNames[j]].toString()) {
                    contadorResp++
                    campoRelleno(arrNames, j)
                    document.getElementById(arrNames[j]).className = "green"
                } else {
                    campoRelleno(arrNames, j)
                    document.getElementById(arrNames[j]).className = "red"
                }
                if (contadorResp == undefined) {
                    campoVacio(arrNames, j)
                }
            }

            // ---------------------------------------- SELECT MULTIPLE ---------------------------------------- //

            if (valResp[i].type == "select-multiple") {
                arrResp.push(valResp[i].selected)
                for (let i = 0; i < valResp[0].length; i++) {
                    console.log(valResp[0][i].selected)
                    if (arrResp.toString() == resp[arrNames[j]].toString()) {

                        console.log(`correcto`)
                    } else {
                        console.log(`incorrecto`)

                    }


                }

                // console.log("select-multiple");
            }









            // if (valResp[i].checked) {
            //     contadorResp++
            //     if (document.querySelector("#h5001 p")) {
            //         document.querySelector("#h5001 p").remove()
            //     }
            //     if (valResp[i].defaultValue == resp.q5001) {
            //         document.querySelector(`label[for='${valResp[i].id}']`).className = "green"
            //     } else {
            //         document.querySelector(`label[for='${valResp[i].id}']`).className = "red"
            //     }
            // } else {
            //     document.querySelector(`label[for='${valResp[i].id}']`).className = "default"
            // }

            // if (contadorResp == undefined) {
            //     if (!document.querySelector("#h5001 p")) {
            //         let pElement = document.createElement("p");
            //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
            //         pElement.appendChild(contenido);
            //         document.querySelector("#h5001").appendChild(pElement);

            //         let p = document.querySelector("#h5001 p");
            //         let attr = document.createAttribute("class");
            //         attr.value = "red";
            //         p.setAttributeNode(attr);
            //     }
            //     document.querySelector(`label[for='${valResp[i].id}']`).className = "default"
            // }
        }
    }

    // let contadorResp

    // for (let i = 0; i < valResp.length; i++) {

    //     if (valResp[i].checked) {
    //         contadorResp++
    //         if (document.querySelector("#h5001 p")) {
    //             document.querySelector("#h5001 p").remove()
    //         }
    //         if (valResp[i].defaultValue == resp.q5001) {
    //             document.querySelector(`label[for='${valResp[i].id}']`).className = "green"
    //         } else {
    //             document.querySelector(`label[for='${valResp[i].id}']`).className = "red"
    //         }
    //     } else {
    //         document.querySelector(`label[for='${valResp[i].id}']`).className = "default"
    //     }

    //     if (contadorResp == undefined) {
    //         if (!document.querySelector("#h5001 p")) {
    //             let pElement = document.createElement("p");
    //             let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //             pElement.appendChild(contenido);
    //             document.querySelector("#h5001").appendChild(pElement);

    //             let p = document.querySelector("#h5001 p");
    //             let attr = document.createAttribute("class");
    //             attr.value = "red";
    //             p.setAttributeNode(attr);
    //         }
    //         document.querySelector(`label[for='${valResp[i].id}']`).className = "default"
    //     }
    // }

    // let cincoMilUno = event.target.elements["q5001"].value;

    // if (!cincoMilUno) {
    //     if (!document.querySelector("#h5001 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5001").appendChild(pElement);

    //         let p = document.querySelector("#h5001 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    //     document.querySelector("label[for='5001a']").className = "default"
    //     document.querySelector("label[for='5001b']").className = "default"
    //     document.querySelector("label[for='5001c']").className = "default"
    // } else if (cincoMilUno == resp.q5001) {
    //     if (document.querySelector("#h5001 p")) {
    //         document.querySelector("#h5001 p").remove()
    //     }
    //     document.querySelector("label[for='5001a']").className = "green"
    //     document.querySelector("label[for='5001b']").className = "default"
    //     document.querySelector("label[for='5001c']").className = "default"
    // } else if (cincoMilUno == "gc") {
    //     if (document.querySelector("#h5001 p")) {
    //         document.querySelector("#h5001 p").remove()
    //     }
    //     document.querySelector("label[for='5001a']").className = "default"
    //     document.querySelector("label[for='5001b']").className = "red"
    //     document.querySelector("label[for='5001c']").className = "default"
    // } else if (cincoMilUno == "pl") {
    //     if (document.querySelector("#h5001 p")) {
    //         document.querySelector("#h5001 p").remove()
    //     }
    //     document.querySelector("label[for='5001a']").className = "default"
    //     document.querySelector("label[for='5001b']").className = "default"
    //     document.querySelector("label[for='5001c']").className = "red"
    // }

    // --------------------------- Validacion 5002 --------------------------- //

    // let cincoMilDosA = event.target.elements["q5002a"].checked;
    // let cincoMilDosB = event.target.elements["q5002b"].checked;
    // let cincoMilDosC = event.target.elements["q5002c"].checked;

    // if (!cincoMilDosA && !cincoMilDosB && !cincoMilDosC) {
    //     if (!document.querySelector("#h5002 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5002").appendChild(pElement);

    //         let p = document.querySelector("#h5002 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    //     document.querySelector("label[for='5002a']").className = "default"
    //     document.querySelector("label[for='5002b']").className = "default"
    //     document.querySelector("label[for='5002c']").className = "default"
    // } else if (cincoMilDosA == resp.q5002a && cincoMilDosB == resp.q5002b && cincoMilDosC == resp.q5002c) {
    //     if (document.querySelector("#h5002 p")) {
    //         document.querySelector("#h5002 p").remove()
    //     }
    //     document.querySelector("label[for='5002a']").className = "green"
    //     document.querySelector("label[for='5002b']").className = "default"
    //     document.querySelector("label[for='5002c']").className = "default"
    // } else {
    //     if (document.querySelector("#h5002 p")) {
    //         document.querySelector("#h5002 p").remove()
    //     }
    //     if (cincoMilDosA == false && cincoMilDosB == true && cincoMilDosC == false) {
    //         document.querySelector("label[for='5002a']").className = "default"
    //         document.querySelector("label[for='5002b']").className = "red"
    //         document.querySelector("label[for='5002c']").className = "default"
    //     } else if (cincoMilDosA == false && cincoMilDosB == false && cincoMilDosC == true) {
    //         document.querySelector("label[for='5002a']").className = "default"
    //         document.querySelector("label[for='5002b']").className = "default"
    //         document.querySelector("label[for='5002c']").className = "red"
    //     } else if (cincoMilDosA == true && cincoMilDosB == true && cincoMilDosC == true) {
    //         document.querySelector("label[for='5002a']").className = "red"
    //         document.querySelector("label[for='5002b']").className = "red"
    //         document.querySelector("label[for='5002c']").className = "red"
    //     } else if (cincoMilDosA == true && cincoMilDosB == false && cincoMilDosC == true) {
    //         document.querySelector("label[for='5002a']").className = "red"
    //         document.querySelector("label[for='5002b']").className = "default"
    //         document.querySelector("label[for='5002c']").className = "red"
    //     } else if (cincoMilDosA == false && cincoMilDosB == true && cincoMilDosC == true) {
    //         document.querySelector("label[for='5002a']").className = "default"
    //         document.querySelector("label[for='5002b']").className = "red"
    //         document.querySelector("label[for='5002c']").className = "red"
    //     } else if (cincoMilDosA == true && cincoMilDosB == true && cincoMilDosC == false) {
    //         document.querySelector("label[for='5002a']").className = "red"
    //         document.querySelector("label[for='5002b']").className = "red"
    //         document.querySelector("label[for='5002c']").className = "default"
    //     }
    // }

    // --------------------------- Validacion 5003 --------------------------- //

    // let cincoMilTres = event.target.elements["q5003"].value;

    // if (!cincoMilTres) {
    //     if (!document.querySelector("#h5003 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5003").appendChild(pElement);

    //         let p = document.querySelector("#h5003 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    // } else if (cincoMilTres == resp.q5003) {
    //     if (document.querySelector("#h5003 p")) {
    //         document.querySelector("#h5003 p").remove()
    //     }
    //     document.getElementById('5003a').className = "green"
    // } else {
    //     if (document.querySelector("#h5003 p")) {
    //         document.querySelector("#h5003 p").remove()
    //     }
    //     document.getElementById('5003a').className = "red"
    // }

    // --------------------------- Validacion 5004 --------------------------- //

    // let cincoMilCuatroA = event.target.elements["q5004a"].checked;
    // let cincoMilCuatroB = event.target.elements["q5004b"].checked;
    // let cincoMilCuatroC = event.target.elements["q5004c"].checked;

    // if (!cincoMilCuatroA && !cincoMilCuatroB && !cincoMilCuatroC) {
    //     if (!document.querySelector("#h5004 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5004").appendChild(pElement);

    //         let p = document.querySelector("#h5004 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    //     document.querySelector("label[for='q5004a']").className = "default"
    //     document.querySelector("label[for='q5004b']").className = "default"
    //     document.querySelector("label[for='q5004c']").className = "default"
    // } else if (cincoMilCuatroA == resp.q5004a && cincoMilCuatroB == resp.q5004b && cincoMilCuatroC == resp.q5004c) {
    //     if (document.querySelector("#h5004 p")) {
    //         document.querySelector("#h5004 p").remove()
    //     }
    //     document.querySelector("label[for='q5004a']").className = "default"
    //     document.querySelector("label[for='q5004b']").className = "green"
    //     document.querySelector("label[for='q5004c']").className = "default"
    // } else {
    //     if (document.querySelector("#h5004 p")) {
    //         document.querySelector("#h5004 p").remove()
    //     }
    //     if (cincoMilCuatroA == true && cincoMilCuatroB == false && cincoMilCuatroC == false) {
    //         document.querySelector("label[for='q5004a']").className = "red"
    //         document.querySelector("label[for='q5004b']").className = "default"
    //         document.querySelector("label[for='q5004c']").className = "default"
    //     } else if (cincoMilCuatroA == false && cincoMilCuatroB == false && cincoMilCuatroC == true) {
    //         document.querySelector("label[for='q5004a']").className = "default"
    //         document.querySelector("label[for='q5004b']").className = "default"
    //         document.querySelector("label[for='q5004c']").className = "red"
    //     } else if (cincoMilCuatroA == true && cincoMilCuatroB == true && cincoMilCuatroC == true) {
    //         document.querySelector("label[for='q5004a']").className = "red"
    //         document.querySelector("label[for='q5004b']").className = "red"
    //         document.querySelector("label[for='q5004c']").className = "red"
    //     } else if (cincoMilCuatroA == true && cincoMilCuatroB == false && cincoMilCuatroC == true) {
    //         document.querySelector("label[for='q5004a']").className = "red"
    //         document.querySelector("label[for='q5004b']").className = "default"
    //         document.querySelector("label[for='q5004c']").className = "red"
    //     } else if (cincoMilCuatroA == false && cincoMilCuatroB == true && cincoMilCuatroC == true) {
    //         document.querySelector("label[for='q5004a']").className = "default"
    //         document.querySelector("label[for='q5004b']").className = "red"
    //         document.querySelector("label[for='q5004c']").className = "red"
    //     } else if (cincoMilCuatroA == true && cincoMilCuatroB == true && cincoMilCuatroC == false) {
    //         document.querySelector("label[for='q5004a']").className = "red"
    //         document.querySelector("label[for='q5004b']").className = "red"
    //         document.querySelector("label[for='q5004c']").className = "default"
    //     }
    // }

    // --------------------------- Validacion 5005 --------------------------- //

    // let cincoMilCinco = event.target.elements["q5005"].value;

    // if (!cincoMilCinco) {
    //     if (!document.querySelector("#h5005 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5005").appendChild(pElement);

    //         let p = document.querySelector("#h5005 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    //     document.querySelector("label[for='q5005a']").className = "default"
    //     document.querySelector("label[for='q5005b']").className = "default"
    //     document.querySelector("label[for='q5005c']").className = "default"
    // } else if (cincoMilCinco == resp.q5005) {
    //     if (document.querySelector("#h5005 p")) {
    //         document.querySelector("#h5005 p").remove()
    //     }
    //     document.querySelector("label[for='q5005a']").className = "default"
    //     document.querySelector("label[for='q5005b']").className = "green"
    //     document.querySelector("label[for='q5005c']").className = "default"
    // } else if (cincoMilCinco == "20Sem") {
    //     if (document.querySelector("#h5005 p")) {
    //         document.querySelector("#h5005 p").remove()
    //     }
    //     document.querySelector("label[for='q5005a']").className = "red"
    //     document.querySelector("label[for='q5005b']").className = "default"
    //     document.querySelector("label[for='q5005c']").className = "default"
    // } else if (cincoMilCinco == "18Sem") {
    //     if (document.querySelector("#h5005 p")) {
    //         document.querySelector("#h5005 p").remove()
    //     }
    //     document.querySelector("label[for='q5005a']").className = "default"
    //     document.querySelector("label[for='q5005b']").className = "default"
    //     document.querySelector("label[for='q5005c']").className = "red"
    // }

    // --------------------------- Validacion 5006 --------------------------- //

    // let arrSelected = [];
    // for (let option of document.getElementById('q5006').options) {
    //     if (option.selected) {
    //         arrSelected.push(option.value);
    //     }
    // }

    // let stringArr = arrSelected.toString()

    // if (arrSelected.length == 0) {
    //     if (!document.querySelector("#h5006 p")) {
    //         let pElement = document.createElement("p");
    //         let contenido = document.createTextNode("Por favor seleccione alguna respuesta");
    //         pElement.appendChild(contenido);
    //         document.querySelector("#h5006").appendChild(pElement);

    //         let p = document.querySelector("#h5006 p");
    //         let attr = document.createAttribute("class");
    //         attr.value = "red";
    //         p.setAttributeNode(attr);
    //     }
    //     document.querySelector("option[value='v5006a']").className = "default"
    //     document.querySelector("option[value='v5006b']").className = "default"
    //     document.querySelector("option[value='v5006c']").className = "default"
    // } else if (resp.q5006 == stringArr) {
    //     if (document.querySelector("#h5006 p")) {
    //         document.querySelector("#h5006 p").remove()
    //     }
    //     document.querySelector("option[value='v5006a']").className = "green_border"
    //     document.querySelector("option[value='v5006b']").className = "green_border"
    //     document.querySelector("option[value='v5006c']").className = "default"
    // } else {
    //     if (document.querySelector("#h5006 p")) {
    //         document.querySelector("#h5006 p").remove()
    //     }
    //     document.querySelector("option[value='v5006a']").className = "default"
    //     document.querySelector("option[value='v5006b']").className = "default"
    //     document.querySelector("option[value='v5006c']").className = "default"
    //     for (let i = 0; i < arrSelected.length; i++) {
    //         document.querySelector(`option[value='${arrSelected[i]}']`).className = "red_border"
    //     }
    // }


















    // --------------------------- Validacion 5001 --------------------------- //

    // let cincoMilUno = event.target.elements["q5001"].value;

    // if (!cincoMilUno) {
    //     alert("Por favor marque una opción")
    // } else if (cincoMilUno == "pn") {
    //     alert("correcto")
    // } else {
    //     alert("incorrecto")
    // }

    // --------------------------- Validacion 5002 --------------------------- //

    // let cincoMilDosA = event.target.elements["q5002a"].checked;
    // let cincoMilDosB = event.target.elements["q5002b"].checked;
    // let cincoMilDosC = event.target.elements["q5002c"].checked;

    // if (!cincoMilDosA && !cincoMilDosB && !cincoMilDosC) {
    //     alert("Por favor marque una opción")
    // } else if (cincoMilDosA) {
    //     alert("correcto")
    // } else {
    //     alert("incorrecto")
    // }

    // --------------------------- Validacion 5003 --------------------------- //

    // let cincoMilTres = event.target.elements["q5003"].value;

    // if (!cincoMilTres) {
    //     alert("Por favor marque una opción")
    // } else if (cincoMilTres == 14) {
    //     alert("Es correcto")
    // } else {
    //     alert("incorrecto")
    // }

    // --------------------------- Validacion 5004 --------------------------- //

    // let cincoMilCuatroA = event.target.elements["q5004a"].checked;
    // let cincoMilCuatroB = event.target.elements["q5004b"].checked;
    // let cincoMilCuatroC = event.target.elements["q5004c"].checked;

    // if (!cincoMilCuatroA && !cincoMilCuatroB && !cincoMilCuatroC) {
    //     alert("Por favor marque una opción")
    // } else if (cincoMilCuatroB && !cincoMilCuatroA && !cincoMilCuatroC) {
    //     alert("correcto")
    // } else {
    //     alert("incorrecto")
    // }

    // --------------------------- Validacion 5005 --------------------------- //

    // let cincoMilCinco = event.target.elements["q5005"].value;

    // if (!cincoMilCinco) {
    //     alert("Por favor marque una opción")
    // } else if (cincoMilCinco == "16Sem") {
    //     alert("correcto")
    //     contador++
    //     console.log(contador);
    // } else {
    //     alert("incorrecto")
    // }

    // --------------------------- Validacion 5006 --------------------------- //

    // let corrects = ["v5006a", "v5006b"].toString();

    // let arrSelected = [];
    // for (let option of document.getElementById('q5006').options) {
    //     if (option.selected) {
    //         arrSelected.push(option.value);
    //     }
    // }

    // let stringArr = arrSelected.toString()

    // if (arrSelected.length == 0) {
    //     console.log("Vacio")
    // } else if (corrects == stringArr) {
    //     console.log("correcto")
    // } else {
    //     console.log("incorrecto")
    // }
    // console.log(resp);
})
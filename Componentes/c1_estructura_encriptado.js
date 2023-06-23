export default{
    data(){
        return {
            claro: false,
            oscuro: false,

            //variables tipo null porque los valores los determina el input
            texto: null, 
            txt_encriptado: null,
            txt_desencriptado: null,
        }
    },
    
    methods:{ 

        //función para encriptar texto que se activa al dar click en el botón encriptar.
        encriptar(){ 
            
            if(this.texto === null){
                alert("DEBES ESCRIBIR UN TEXTO O ALMENOS UNA LETRA PARA ENCRIPTAR Y/O DESENCRIPTAR.");
            }else{

                console.log("Texto a encriptar: " + this.texto);

                this.texto = this.texto 

                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");
                
                console.log("Text encriptado : " + this.texto);
            }
            
        },

        desencriptar(){ 
            if(this.texto === null){
                alert("DEBES ESCRIBIR UN TEXTO O ALMENOS UNA LETRA PARA ENCRIPTAR Y/O DESENCRIPTAR.");
            }else{
                
                console.log("Texto a encriptar: " + this.texto);
                

                this.texto = this.texto 

                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");
                
                console.log("Text encriptado : " + this.texto);
            }
        },

        limpiar(){
            this.texto = null,    
            
            console.log("Función limpiar correcta");
        },

       
    }
}
    
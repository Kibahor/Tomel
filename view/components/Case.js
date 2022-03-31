export default {
    props: {
        totalLetter: Number,
        indice: Number,
        essai: Number
    },
    methods: {        
        bindValue(indice, essai, event){
                event.preventDefault();
                let div = document.querySelectorAll('div.essai');
                let test = div[essai-1];
                let input = test.querySelectorAll('input');
                this.deleteMsg();
                if(event.code==='Enter'){
                    this.valid();
                    return;
                }
                else if(input[indice-1].value=='' || input[indice-1].value==' '){
                    input[indice-1].value='';
                    return this;
                }
                else if(indice===this.totalLetter){
                    this.addMsg();
                }
                else{
                    let suivant = input[indice]; //0-n input et l'id des input est de 1-n+1
                    suivant.focus();
                }
            
        },
        deleteMsg(){
            if(document.querySelector('p')){
                let p = document.querySelector('p');
                p.parentElement.removeChild(p);
            }
        },
        addMsg(){
            let div = document.querySelectorAll('div.essai');
            let test = div[this.essai-1];
            let p = document.createElement('p');
            p.classList.add('msg');
            p.innerHTML = 'appuyez sur entré !';
            test.append(p);
        },
        valid(){
            let word = '';
            let input = document.querySelectorAll('div.essai');
            input = input[this.essai-1].querySelectorAll('input');
            try{
                input.forEach(function(elt){
                    if(elt.value===''){
                        word = '';
                        throw 'Veuillez renseigner tout les champs';
                    }
                    word += elt.value;
                });
                console.log('le mot est '+word);
                this.disableLine();
                let newLine = document.querySelectorAll('div.essai');
                newLine = newLine[this.essai].querySelector('input');//changement de ligne
                this.openLine();
                newLine.focus();
                
            }
            catch(e){
                alert(e);
            }
            
        },
        openLine(){
            let essai = document.querySelectorAll('.essai');
            let input = essai[this.essai].querySelectorAll('input');
            try{
                input.forEach(function(element){
                    element.removeAttribute('disabled'); 
                });

            }catch(e){
                alert(e);
            }
        }
        ,
        disableLine(){
            let essai = document.querySelectorAll('.essai');
            let input = essai[this.essai-1].querySelectorAll('input');
            try{
                input.forEach(function(element){
                    if(element.value === ''){
                        throw 'Veuillez remplire toutes les lettres du mot';
                    }
                });
            
            
                input.forEach(function(element){
                    element.setAttribute('disabled','');                    
                });

            }catch(e){
                alert(e);
            }
        }
    },
    template: `
        <input v-if="essai!=1" maxlength="1" class="sf m-2" v-bind:id=indice @keyup=bindValue(indice,essai,$event) disabled></input>
        <input v-if="essai==1" maxlength="1" class="sf m-2" v-bind:id=indice @keyup=bindValue(indice,essai,$event)></input>
        `
}

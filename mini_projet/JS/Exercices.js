//indicatif
var presentdelindicatif="<p>Je verb<b>e</b></p><p>Tu verb<b>es</b></p><p>Il, elle verb<b>e</b></p><p>Nous verb<b>ons</b></p><p>Vous verb<b>ez</b></p>Ils, elles verb<b>ent</b></p>";
var futurdelindicatif="<p>Je verb<b>rai</b></p><p>Tu verb<b>ras</b></p><p>Il, elle verb<b>ra</b></p><p>Nous verb<b>rons</b></p><p>Vous verb<b>rez</b></p>Ils, elles verb<b>ront</b></p>";
var passeedelindicatif="<p>Je verb<b>ai</b></p><p>Tu verb<b>as</b></p><p>Il, elle verb<b>a</b></p><p>Nous verb<b>âmes</b></p><p>Vous verb<b>âtes</b></p>Ils, elles verb<b>èrent</b></p>";
var imparfaitdelindicatif="<p>Je verb<b>ais</b></p><p>Tu verb<b>ais</b></p><p>Il, elle verb<b>ait</b></p><p>Nous verb<b>ions</b></p><p>Vous verb<b>iez</b></p>Ils, elles verb<b>aient</b></p>";
//subjonctif
var presentdusubjonctif="<p>Que je verb<b>e</b></p><p>Que tu verb<b>es</b></p><p>(Qu') il, elle verb<b>e</b></p><p>Que nous verb<b>ions</b></p><p>Que vous verb<b>iez</b></p>(Qu') ils, elles verb<b>ent</b></p>";
var futurdusubjonctif="<p>Que je verb<b>e</b></p><p>Que tu verb<b>es</b></p><p>(Qu') il, elle verb<b>e</b></p><p>Que nous verb<b>ons</b></p><p>Que vous verb<b>ez</b></p>(Qu') ils, elles verb<b>ent</b></p>";
/*var passeedusubjonctif="<p>Que je verb<b>e</b></p><p>Que tu verb<b>es</b></p><p>(Qu') il, elle verb<b>e</b></p><p>Que nous verb<b>assions</b></p><p>Que vous verb<b>assiez</b></p>(Qu') ils, elles verb<b>ent</b></p>";*/
var imparfaitdusubjonctif="<p>Que je verb<b>asse</b></p><p>Que tu verb<b>asses</b></p><p>(Qu') il, elle verb<b>ât</b></p><p>Que nous verb<b>assions</b></p><p>Que vous verb<b>assiez</b></p>(Qu') ils, elles verb<b>assent</b></p>";
// Même chose pour les autres groupes et sous-groupes
 function conjugue(){var vrb=document.getElementById('npt').value;
    // test surr la nature du verbe
    if (vrb.substr(-2)=="er") {
        document.getElementById('pre').innerHTML='Présent\n'+presentdelindicatif.replace(/verb/g,vrb.substr(0,vrb.length-2));
        document.getElementById('fut').innerHTML='Futur Simple\n'+futurdelindicatif.replace(/verb/g,vrb.substr(0,vrb.length-1));
        document.getElementById('pas').innerHTML='Passée Simple\n'+passeedelindicatif.replace(/verb/g,vrb.substr(0,vrb.length-2));
        document.getElementById('imp').innerHTML='Imparfait\n'+imparfaitdelindicatif.replace(/verb/g,vrb.substr(0,vrb.length-2));
    }
    else alert("Je ne sais pas conjuguer ce verbe\n qui n'appartient pas au 1er groupe !");
}

window.addEventListener("load",()=>{
        const tab=[0,1,2,1,0,0,2,0,1,3];
        document.getElementById("form1").addEventListener("submit",(e)=>{
                e.preventDefault();
                let tot=0;
                for(i=0;i<tab.length;i++){
                        if(e.target.elements["choix"+i].value==tab[i]){
                                tot+=2
                        }
                }
                document.getElementById("res").textContent="Vous avez obtenu " + tot + " sur 20."
                alert("Vous avez obtenu " + tot + " sur 20.");
        },false)
},false)
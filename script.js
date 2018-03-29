window.onload=function () {

    var addbtn = document.getElementById('plus-btn');
    var minbtn = document.getElementById('minus-btn');
    var btntot=document.getElementById('but-tot')
    var formm = document.getElementById('formm');
    var btnCart1=document.getElementById('btn1');
    var f1=document.getElementById('formm');
    var f2=document.getElementById('totall')
    var total=1;
    var totalVal=1;
    var g1;
    var g2;


    addbtn.onclick = function (ev) {
        //var a;
        total++;


        document.getElementById('formm').setAttribute('value',total);

        localStorage.setItem('formm',f1.value);
         g1=localStorage.getItem('formm');
        console.log(g1);

       // console.log(localStorage.getItem(a))
       // totalVal=totalVal*total;
        //document.getElementById('totall').setAttribute('value',totalVal);

    }


    minbtn.onclick = function (ev) {

        total--;
       var v= +document.getElementById('formm').getAttribute('value')

        if(v>1){
           v=v-1;

        }
        else {
           v=0;

        }
       // var b1=localStorage.getItem(value);
        document.getElementById('formm').setAttribute('value',total);
        localStorage.setItem('formm',f1.value);
         g1=localStorage.getItem('formm');
        console.log(g1);

    }





    btntot.onclick=function (ev) {

        totalVal=1000*total;
        //var a1=localStorage.getItem(totalVal)
        document.getElementById('totall').setAttribute('value',totalVal);
        localStorage.setItem('totall',totalVal.value);
        //g1=localStorage.getItem('totall');
        console.log(totalVal);
        console.log(g2);

    }


    btnCart1.onclick=function (ev) {
        totalVal=1000*total;
        document.getElementById('totall').setAttribute('value',totalVal);
        console.log(totalVal);

    }
    function init() {
        if(localStorage['formm']){
        var x=document.getElementById('formm').setAttribute('value',localStorage['formm'])
        formm.value=x.val();
             }
        if(localStorage['totall']){

            var y=document.getElementById('totall').setAttribute('value',localStorage['totall'])
            totall.value=y.val();
        }
    }
    init();




}
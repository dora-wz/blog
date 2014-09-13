/**
 * Created by wz on 2014/8/23.
 */



function jundge(){

       var user1=document.getElementById('usr').value;
       var password1=document.getElementById('pwd').value;


    var user=["admin","wz","tiger"];
    var password=["admin","wz","tiger"];


    if(user1 === user[0] && password1 === password[0]){

        window.location.href="/home";

    }else{

        window.location.href="/login";

    }


};
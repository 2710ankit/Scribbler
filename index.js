var signIn= document.getElementById('signIn');
var signIn= document.getElementById('signUp');
var signInModel=document.getElementById('model2');
var signUpModel=document.getElementById('model1');
var mainModel=document.getElementById('myModal');
var closeBtn= document.getElementById('modelCloseBtn');
var postsModel=document.getElementById('model3');
function signInfun(){
  signInModel.style.display="block";
  mainModel.style.display="block";
  signUpModel.style.display="none";
  postsModel.style.display="none";
}
function signUpfun(){
    signUpModel.style.display="block";
    mainModel.style.display="block";
    signInModel.style.display="none";
    postsModel.style.display="none";
}
  
function closeModelfun(){
    mainModel.style.display="none";
}
function postfun(){
  postsModel.style.display="block";
  mainModel.style.display="block";
  signUpModel.style.display="none";
  signInModel.style.display="none";

}
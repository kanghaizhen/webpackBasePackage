var state = {
  pageName: 'pageA'
}
var init = function(){
  if(state.pageName == 'pageA'){
    import(/* webpackChunkName: 'pageA'*/ "./pages/pageA").then(({pageA}) => {
      var myClass = new pageA();
      myClass.load();
    });
  }else{
    import(/* webpackChunkName: 'pageB'*/ "./pages/pageB").then(function(pageB) {
      console.log(pageB);
    });
  }
}
init();
window.state = state;
window.init = init;

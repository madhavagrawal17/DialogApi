# This addin is a sample of the Two way Messaging for Dialog Api for Office Add-in

Parent Side code:

Office.context.ui.displayDialogAsync("https://madhavagrawal17.github.io/DialogApi/Dialog.html",
      {height:80, width:50, requireHTTPS: true, promptBeforeOpen:false}, launchDialogCallback);

function launchDialogCallback(asyncResult){
  if(asyncResult.status=="succeeded"){
      _dialog = asyncResult.value;
      _dialog.messageChild(“Hello”);
  } else{
    console.log(asyncResult.error.message);
  }
}

Child Side Code:

Office.context.ui.addHandlerAsync(Office.EventType.DialogParentMessageReceived, onMessageFromParent);

function onMessageFromParent(event) {
    Value =  event.message;
}              

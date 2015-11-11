$(document).ready(function(){
  var uniqueId = Cookies.get('observer_id') || guid();

  Cookies.set('observer_id', uniqueId, {expires: 365 * 1000});

  $('a').click(function(evt){
    sendInformation(uniqueId, evt)
  });

  $('body *').mousestop(function(evt){
    sendInformation(uniqueId, evt)
  });
});

function sendInformation(id, evt){

  $.ajax({
        type: "POST",
        url: "http://localhost:8000",
        data: markers(id, evt),
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
};

function markers(id, evt) {
  JSON.stringify({
    "current_url": window.location.toString(),
    "session_id": id,
    "timestamp": evt.timeStamp,
    "javacript_event": evt.type,
    "target_element": evt.target.id,
    "link_url": evt.target.href,
  });
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

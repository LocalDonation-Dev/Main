const { websiteLink } = process.env;

async function forgetEmailBody(data) {
  return (
    `
    <p>You have requested to update the password. Here is the verification link its only valid for only 15 minutes. Be quick</p>
    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;verification link:</p>
    <p>` +
    data.uniquelink +
    `</p>
    <p><br></p>
   
    `
  );
}

async function verifyEmailBody(data) {
  return (
    `
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>Hi, ` +
    data.fname +
    `<br>&nbsp;welcome to API service . Please open that link in your browser for verification of your account.&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>Verification Link :&nbsp;</p>

<p style="text-align: center;"><strong><span style="color: rgb(209, 72, 65);">` +
    data.uniquelink +
    `</span></strong></p>
    
`
  );
}

async function welcomeEmailBody(data) {
  return (
    `

    <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'>Hi,` +
    data.fname +
    `<br>&nbsp;welcome to API service 
    
    
    `
  );
}

const ThanksEmailBody = `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body class="jumbotron text-center">
    <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        <p class="lead"><strong>Your Email is now verified </strong>Please login to your Account
        </p>
        <hr>

        <p class="lead">
            <a class="btn btn-primary btn-sm" href="${websiteLink}signin" role="button">Continue to
                LOGIN</a>
        </p>
    </div>
</body>

</html>`;

async function Report_Email_Body(data) {
  return `

    <p>Here is post to see : ${data.post} &nbsp;</p>
    
    
    `;
}

async function testFacebook(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
    <meta property="og:description"        content="How much does culture influence creative thinking?" />
    <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
    </head>
    <body>
    
    <p>All meta information goes inside the head section.</p>
    
    </body>
    </html>
  
    
    
    `;
}

module.exports = {
  forgetEmailBody,
  verifyEmailBody,
  welcomeEmailBody,
  ThanksEmailBody,
  Report_Email_Body,
  testFacebook,
};
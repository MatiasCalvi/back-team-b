const { createTransport } = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const {
  GOOGLE_ID,
  GOOGLE_REFRESH,
  GOOGLE_SECRET,
  GOOGLE_URL,
  GOOGLE_USER,
  BACK_URL,
} = process.env;

function createClient() {
  return new OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
}

function getTransport(client) {
  const accessToken = client.getAccessToken();
  return createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_USER,
      type: "OAuth2",
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_REFRESH,
      accessToken: accessToken,
    },
    tls: { rejectUnauthorized: false },
  });
}

function getEmailBody({ email, host, code }) {
  return `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
    <head>
      <!--[if gte mso 9]><xml>
       <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
      </xml><![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-- -->
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
      <!--<![endif]-->
  
      <style type="text/css" id="media-query">
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        .ie-browser table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
       
        
        a[x-apple-data-detectors=true] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        [owa] .img-container div,
        [owa] .img-container button {
          display: block !important;
        }
        
        [owa] .fullwidth button {
          width: 100% !important;
        }
        
        [owa] .block-grid .col {
          display: table-cell;
          float: none !important;
          vertical-align: top;
        }
        
        .ie-browser .num12,
        .ie-browser .block-grid,
        [owa] .num12,
        [owa] .block-grid {
          width: 600px !important;
        }
        
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        
        .ie-browser .mixed-two-up .num4,
        [owa] .mixed-two-up .num4 {
          width: 200px !important;
        }
        
        .ie-browser .mixed-two-up .num8,
        [owa] .mixed-two-up .num8 {
          width: 400px !important;
        }
        
        .ie-browser .block-grid.two-up .col,
        [owa] .block-grid.two-up .col {
          width: 300px !important;
        }
        
        .ie-browser .block-grid.three-up .col,
        [owa] .block-grid.three-up .col {
          width: 200px !important;
        }
        
        .ie-browser .block-grid.four-up .col,
        [owa] .block-grid.four-up .col {
          width: 150px !important;
        }
        
        .ie-browser .block-grid.five-up .col,
        [owa] .block-grid.five-up .col {
          width: 120px !important;
        }
        
        .ie-browser .block-grid.six-up .col,
        [owa] .block-grid.six-up .col {
          width: 100px !important;
        }
        
        .ie-browser .block-grid.seven-up .col,
        [owa] .block-grid.seven-up .col {
          width: 85px !important;
        }
        
        .ie-browser .block-grid.eight-up .col,
        [owa] .block-grid.eight-up .col {
          width: 75px !important;
        }
        
        .ie-browser .block-grid.nine-up .col,
        [owa] .block-grid.nine-up .col {
          width: 66px !important;
        }
        
        .ie-browser .block-grid.ten-up .col,
        [owa] .block-grid.ten-up .col {
          width: 60px !important;
        }
        
        .ie-browser .block-grid.eleven-up .col,
        [owa] .block-grid.eleven-up .col {
          width: 54px !important;
        }
        
        .ie-browser .block-grid.twelve-up .col,
        [owa] .block-grid.twelve-up .col {
          width: 50px !important;
        }
        
        @media only screen and (min-width: 620px) {
          .block-grid {
            width: 600px !important;
          }
          .block-grid .col {
            vertical-align: top;
          }
          .block-grid .col.num12 {
            width: 600px !important;
          }
          .block-grid.mixed-two-up .col.num4 {
            width: 200px !important;
          }
          .block-grid.mixed-two-up .col.num8 {
            width: 400px !important;
          }
          .block-grid.two-up .col {
            width: 300px !important;
          }
          .block-grid.three-up .col {
            width: 200px !important;
          }
          .block-grid.four-up .col {
            width: 150px !important;
          }
          .block-grid.five-up .col {
            width: 120px !important;
          }
          .block-grid.six-up .col {
            width: 100px !important;
          }
          .block-grid.seven-up .col {
            width: 85px !important;
          }
          .block-grid.eight-up .col {
            width: 75px !important;
          }
          .block-grid.nine-up .col {
            width: 66px !important;
          }
          .block-grid.ten-up .col {
            width: 60px !important;
          }
          .block-grid.eleven-up .col {
            width: 54px !important;
          }
          .block-grid.twelve-up .col {
            width: 50px !important;
          }
        }
        
        @media (max-width: 620px) {
          .block-grid,
          .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .block-grid {
            width: calc(100% - 40px) !important;
          }
          .col {
            width: 100% !important;
          }
          .col>div {
            margin: 0 auto;
          }
          img.fullwidth,
          img.fullwidthOnMobile {
            max-width: 100% !important;
          }
          .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
          }
          .no-stack.two-up .col {
            width: 50% !important;
          }
          .no-stack.mixed-two-up .col.num4 {
            width: 33% !important;
          }
          .no-stack.mixed-two-up .col.num8 {
            width: 66% !important;
          }
          .no-stack.three-up .col.num4 {
            width: 33% !important;
          }
          .no-stack.four-up .col.num3 {
            width: 25% !important;
          }
        }
  
      </style>
    </head>
  
    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #525252">
      <style type="text/css" id="media-query-bodytag">
        @media (max-width: 520px) {
          .block-grid {
            min-width: 320px!important;
            max-width: 100%!important;
            width: 100%!important;
            display: block!important;
          }
          .col {
            min-width: 320px!important;
            max-width: 100%!important;
            width: 100%!important;
            display: block!important;
          }
          .col>div {
            margin: 0 auto;
          }
          img.fullwidth {
            max-width: 100%!important;
          }
          img.fullwidthOnMobile {
            max-width: 100%!important;
          }
          .no-stack .col {
            min-width: 0!important;
            display: table-cell!important;
          }
          .no-stack.two-up .col {
            width: 50%!important;
          }
          .no-stack.mixed-two-up .col.num4 {
            width: 33%!important;
          }
          .no-stack.mixed-two-up .col.num8 {
            width: 66%!important;
          }
          .no-stack.three-up .col.num4 {
            width: 33%!important
          }
          .no-stack.four-up .col.num3 {
            width: 25%!important
          }
        }
         .setmanheight {
          height: 80px;
           padding:10px;
        }
      </style>
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #525252;width: 100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #525252;"><![endif]-->
  
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style=" width:600px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px;">
                            <!--[if (mso)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px;padding-left: 30px; padding-top: 30px; padding-bottom: 30px;"><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                            <div align="center">
                              <div style="border-top: 0px solid transparent; width:100%; line-height:0px; height:0px; font-size:0px;">&#160;</div>
                            </div>
                            <!--[if (mso)]></td></tr></table></td></tr></table><![endif]-->
                          </div>
  
  
  
                          <div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px;">
                            <!--[if (mso)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px;padding-left: 30px; padding-top: 30px; padding-bottom: 30px;"><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                            <div align="center">
                              <div style="border-top: 0px solid transparent; width:100%; line-height:0px; height:0px; font-size:0px;">&#160;</div>
                            </div>
                            <!--[if (mso)]></td></tr></table></td></tr></table><![endif]-->
                          </div>
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #D53128;" class="block-grid mixed-two-up no-stack">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#D53128;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:#D53128;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="200" style=" width:200px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num4" style="display: table-cell;vertical-align: top;max-width: 320px;min-width: 200px;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <div align="left" class="img-container right  autowidth  fullwidth" style="padding-right: 0px;  padding-left: 0px;">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px;" align="right"><![endif]-->
                            
                              <img class="right  autowidth setmanheight fullwidth" align="right" border="0" src="https://www.premiercustomtravel.com/theitinerary/itinerarycentered.jpg" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;float: none;width: auto;max-width: 200px"
                              width="200">
                     
                            <!--[if mso]></td></tr></table><![endif]-->
                          </div>
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><td align="center" width="400" style=" width:400px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num8" style="display: table-cell;vertical-align: top;min-width: 320px;max-width: 400px;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;color:#ffffff; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                            <div style="font-size:12px;line-height:14px;color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 12px;line-height: 14px">
                                <br data-mce-bogus="1">
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;color:#ffffff; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                            <div style="line-height:14px;font-size:12px;color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;line-height: 14px;text-align: center;font-size: 12px">
                                <span style="font-size: 28px; line-height: 33px;">
                                <strong>Email Confirmation</strong>
                              </span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3f3f3;" class="block-grid ">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f3f3f3;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:#f3f3f3;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style=" width:600px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:150%;color:#555555; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                            <div style="font-size:12px;line-height:18px;color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">
                                <strong>
                                <span style="font-size: 22px; line-height: 33px;">Hi, ${email}!</span>
                              </strong>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:150%;color:#555555; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                            <div style="font-size:12px;line-height:18px;color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">You are almost ready for My itinerary, the best experiences await you! </p> <p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">To complete email verification, please input the below code into our app!</p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f3f3f3;" class="block-grid ">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f3f3f3;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:#f3f3f3;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style=" width:600px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:150%;color:#555555; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">
                            <div style="font-size:12px;line-height:18px;color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">
                                <span style="color: rgb(162, 0, 0); font-size: 14px; line-height: 21px;">
                                <a href="${host}auth/verify/${code}">Verify your Account now!<strong></strong></a>
                              </span>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:180%;color:#0D0D0D; padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px;">
                            <div style="font-size:12px;line-height:22px;color:#0D0D0D;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 14px;line-height: 25px;text-align: center">If you did not create an account using this address,</p>
                              <p style="margin: 0;font-size: 14px;line-height: 25px;text-align: center">
                                please ignore this email
                                <br>
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
  
                          <div style="padding-right: 10px; padding-left: 10px; padding-top: 30px; padding-bottom: 10px;">
                            <!--[if (mso)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px;padding-left: 10px; padding-top: 30px; padding-bottom: 10px;"><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                            <div align="center">
                              <div style="border-top: 0px solid transparent; width:100%; line-height:0px; height:0px; font-size:0px;">&#160;</div>
                            </div>
                            <!--[if (mso)]></td></tr></table></td></tr></table><![endif]-->
                          </div>
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #D53128;" class="block-grid three-up no-stack">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#D53128;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:#D53128;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="200" style=" width:200px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num4" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 20px; padding-bottom: 0px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;color:#a8bf6f; padding-right: 0px; padding-left: 0px; padding-top: 20px; padding-bottom: 0px;">
                            <div style="font-size:12px;line-height:14px;color:#a8bf6f;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 12px;line-height: 14px;text-align: center">
                              </p>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><td align="center" width="200" style=" width:200px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num4" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 20px; padding-bottom: 0px;"><![endif]-->
                          <div style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;color:#a8bf6f; padding-right: 0px; padding-left: 0px; padding-top: 20px; padding-bottom: 0px;">
                            <div style="font-size:12px;line-height:14px;color:#a8bf6f;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;">
                              <p style="margin: 0;font-size: 12px;line-height: 14px">&#160;
                                <br>
                              </p>
                              <br>
                            </div>
                          </div>
                          <!--[if mso]></td></tr></table><![endif]-->
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><td align="center" width="200" style=" width:200px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num4" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
  
                          <div align="center" style="padding-right: 0px; padding-left: 0px; padding-bottom: 0px;">
                            <div style="line-height:5px;font-size:1px">&#160;</div>
                            <div style="display: table; max-width:168px;">
                              <!--[if (mso)|(IE)]><table width="168" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse; padding-right: 0px; padding-left: 0px; padding-bottom: 0px;"  align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:168px;"><tr><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
                              <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                      <div style="line-height:5px;font-size:1px">&#160;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
                              <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                      <div style="line-height:5px;font-size:1px">&#160;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
                              <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                      <div style="line-height:5px;font-size:1px">&#160;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 0;" valign="top"><![endif]-->
                              <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 0">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                      <div style="line-height:5px;font-size:1px">&#160;</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                            </div>
                          </div>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 600px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style=" width:600px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                      <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                          <!--<![endif]-->
  
  
  
  
                          <div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px;">
                            <!--[if (mso)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px;padding-left: 30px; padding-top: 30px; padding-bottom: 30px;"><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                            <div align="center">
                              <div style="border-top: 0px solid transparent; width:100%; line-height:0px; height:0px; font-size:0px;">&#160;</div>
                            </div>
                            <!--[if (mso)]></td></tr></table></td></tr></table><![endif]-->
                          </div>
  
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if (mso)|(IE)]></div><![endif]-->
  
  
    </body>
  
  </html>
        

    `;
}

const accountVerificationEmail = async (
  mailDelNuevoUsuario,
  codigoCalculadoConCrypto
) => {
  const client = createClient();

  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });

  const transport = getTransport(client);

  const mailOptions = {
    from: GOOGLE_USER,
    to: mailDelNuevoUsuario,
    subject: "Verify your new account in Amazing Events", //asunto del mail
    html: getEmailBody({
      email: mailDelNuevoUsuario,
      code: codigoCalculadoConCrypto,
      host: BACK_URL,
    }), //invoco la funcion que retorna el template string
  };

  await transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Email sent!");
  });
};

module.exports = accountVerificationEmail;

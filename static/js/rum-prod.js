(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})(
  'cwr',
  'd8f7a9b3-b333-4755-9670-77a087374d99',
  '1.0.0',
  'us-east-1',
  'https://client.rum.us-east-1.amazonaws.com/1.5.x/cwr.js',
  {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::319696901745:role/RUM-Monitor-us-east-1-319696901745-3240971059561-Unauth",
    identityPoolId: "us-east-1:e95b0a79-72ac-4f90-82ed-f0d117eda06f",
    endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: false,
    enableXRay: false
  }
);

(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})(
  'cwr',
  'ef17afe1-4277-4d21-86a5-9c1f6cb27e26',
  '1.0.0',
  'us-east-1',
  'https://client.rum.us-east-1.amazonaws.com/1.5.x/cwr.js',
  {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::319696901745:role/RUM-Monitor-us-east-1-319696901745-6033071059561-Unauth",
    identityPoolId: "us-east-1:7bfe35c4-4ccb-4dca-907b-a08e2c953f84",
    endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: false,
    enableXRay: false
  }
);

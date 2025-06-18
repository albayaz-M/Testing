fetch("https://stagingintranet.syncfusion.com/enterpriseportal/changeadmin", { 
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({
      portalId: "12851",
      oldAdminEmail: "website08may01@gmail.com",
      newAdminEmail: "albayaz.m@syncfusion.com"
    })
  })
  .then(response => response.text())
  .then(result => console.log("Success:", result))
  .catch(error => console.error("Error:", error));

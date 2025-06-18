fetch("https://stagingintranet.syncfusion.com/enterpriseportal/changeadmin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: {"portalId":"12952","oldAdminEmail":"albayaz.m@syncfusion.com","newAdminEmail":"website08may01@gmail.com"}
})
.then(response => response.text())
.then(result => console.log("Success:", result))
.catch(error => console.error("Error:", error));

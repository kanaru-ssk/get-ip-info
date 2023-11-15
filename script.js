fetch("https://ipinfo.io?callback")
  .then((response) => response.json())
  .then((ipInfo) => {
    console.log(ipInfo);

    document.getElementById("ip").innerText = ipInfo.ip;
    document.getElementById("hostname").innerText = ipInfo.hostname;
    document.getElementById("city").innerText = ipInfo.city;
    document.getElementById("region").innerText = ipInfo.region;
    document.getElementById("country").innerText = ipInfo.country;
    document.getElementById("loc").innerText = ipInfo.loc;
    document.getElementById("org").innerText = ipInfo.org;
    document.getElementById("postal").innerText = ipInfo.postal;
    document.getElementById("timezone").innerText = ipInfo.timezone;
    document.getElementById("json").innerText = JSON.stringify(
      ipInfo,
      null,
      `\t`
    );
  });

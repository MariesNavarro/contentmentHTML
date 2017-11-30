 var donations = document.getElementById("donations"),
    closeDonations = document.getElementById("closeDonations"),
    btndonate = document.getElementById("btndonate");

    donations.style.display = "none";
    donations.style.opacity = "0";


    btndonate.addEventListener('click', function(){
      donations.style.display = "block";
      setTimeout(function(){
        donations.style.opacity = "1";
      },700);
    });

    closeDonations.addEventListener('click', function(){
      donations.style.opacity = "0";
      setTimeout(function(){
        donations.style.display = "none";
      },700);
    });

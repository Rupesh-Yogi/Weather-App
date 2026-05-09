fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => {

        document.querySelector(".aboutHeader").innerHTML = data;
    } );


fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
        document.querySelector(".aboutFooter").innerHTML = data;
    });
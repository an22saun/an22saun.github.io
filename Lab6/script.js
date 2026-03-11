document.getElementById("sienaForm").addEventListener("submit", function (e){
    e.preventDefault(); //stops form from submitting automatically

    //get form values
    const email = document.getElementById("emailAddress").value;
    const sienaID = document.getElementById("sienaID").value;

    //log to console
    console.log("Form submitted successfully!");
    console.log("Email:", email);
    console.log("Siena ID:", sienaID);
});
function detDate(){
    let day = new Date();
    let d = document.querySelector("#day");
    let m = document.querySelector("#month");
    d.innerHTML = day.getDate();
    m.innerHTML = day.getMonth();
    setTimeout(detDate, 1000);
}

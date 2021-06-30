function toggleMenu() {
    document.getElementById("principalNav").classList.toggle("hide");

    let changeSize = document.getElementById("principalNav").classList.value;
    
    if (changeSize!=='hide') {
        document.getElementById('head-id').style.gridTemplate = '60px / 80% 20%';
    } else {
        document.getElementById('head-id').style.gridTemplate = '80px / 70% 30%';
    }
   
}

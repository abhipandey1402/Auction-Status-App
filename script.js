let contentContainer = document.getElementById('gridContainer');


fetch(`https://gauravgitacc.github.io/postAppData/auctionData.json`).then((response) => {
    return response.json();
}).then((dataArray) => {
    for (let i = 0; i < dataArray.length; i++) {
        contentContainer.innerHTML += `
        <div class="grid">
        <div id="gridHeader">
            <div id="gridHeader1">
                <button>${dataArray[i].status}</button>
                <span>${dataArray[i].caseNumber}</span>
            </div>
            <span>${dataArray[i].date}</span>
        </div>
        <hr>
        <div id="gridContent">
            <p><b>${dataArray[i].fromLocation}</b></p>
            <span>${dataArray[i].toLocation}</span>
        </div>
        <span id="cost"><b>${dataArray[i].fare}</b></span>
    </div>`

        let state = document.getElementsByTagName('button');
        if (dataArray[i].status === "APPROVED") {
            state[i].style.backgroundColor = '#24ABE6';
        } else if (dataArray[i].status === "PENDING") {
            state[i].style.backgroundColor = '#FFEF00';
        } else if (dataArray[i].status === "CANCELLED") {
            state[i].style.backgroundColor = '#FF3245';
        } else if (dataArray[i].status === "COMPLETED") {
            state[i].style.backgroundColor = '#018001';
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const result = document.getElementById('result');
    const prizeList = document.getElementById('prizeList');

    // 示例奖品数据
    const prizes = [
        { name: 'iPhone 15', quantity: 2 },
        { name: 'iPad Mini', quantity: 3 },
        { name: 'AirPods Pro', quantity: 5 },
        { name: '50元代金券', quantity: 10 }
    ];

    // 初始化奖品列表
    function updatePrizeList() {
        prizeList.innerHTML = '';
        prizes.forEach(prize => {
            const li = document.createElement('li');
            li.textContent = `${prize.name} - 剩余 ${prize.quantity}`;
            prizeList.appendChild(li);
        });
    }

    // 抽奖逻辑
    function drawPrize() {
        const availablePrizes = prizes.filter(prize => prize.quantity > 0);
        if (availablePrizes.length === 0) {
            result.textContent = '所有奖品已抽完！';
            return;
        }

        const randomIndex = Math.floor(Math.random() * availablePrizes.length);
        const selectedPrize = availablePrizes[randomIndex];
        selectedPrize.quantity -= 1;
        result.textContent = `恭喜你抽中了：${selectedPrize.name}！`;

        updatePrizeList();
    }

    drawButton.addEventListener('click', drawPrize);
    updatePrizeList();
});

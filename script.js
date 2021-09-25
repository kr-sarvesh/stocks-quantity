var initialPrice = document.querySelector('#initial-price');
var stocksQty = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var outputBox = document.querySelector('#output-box');
var submitBtn = document.querySelector('#submit-btn');
var form = document.querySelector('.form-handler');

form.addEventListener('submit', calculateProfitAndLoss);

var submitHandler = (e) => {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQty.value);
  var curr = Number(currentPrice.value);
  if (
    (ip == null || ip == '',
    qty == null || qty == '' || curr == null || curr == '')
  ) {
    showOutputMessage('please enter all details');
  } else if (curr < 0) {
    showOutputMessage('Enter positive value');
  } else {
    calculateProfitAndLoss(ip, qty, curr);
  }
};

submitBtn.addEventListener('click', submitHandler);

//ex-05
var calculateProfitAndLoss = (initial, quantity, current) => {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercent = (loss / initial) * 100;
    showOutputMessage(
      `Hey the loss is ${lossPercent.toFixed(
        2
      )} and the percent is ${lossPercent.toFixed(2)} %`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercent = (profit / initial) * 100;
    showOutputMessage(
      `Hey the profit is ${profit.toFixed(
        2
      )} and the profit percentage is ${profitPercent.toFixed(2)} %`
    );
  } else {
    showOutputMessage('No pain no gain and no gain and no pain');
  }
};

var showOutputMessage = (str) => {
  outputBox.innerText = str;
};

const input = document.getElementById("amountInput");
const fromCurrencySelect = document.getElementById("from-currency-select");
const toCurrencySelect = document.getElementById("to-currency-select");
const convertBtn = document.querySelector(".btn");


const result = document.querySelector(".resulBox");
result.innerHTML =`<h2>Result</h2>`;
conversionRates={
      "USD":1,
      "AED":3.6725,
      "AFN":83.0597,
      "ALL":101.3813,
      "AMD":386.0756,
      "ANG":1.7900,
      "AOA":833.5233,
      "ARS":349.9800,
      "AUD":1.5473,
      "AWG":1.7900,
      "AZN":1.6992,
      "BAM":1.8029,
      "BBD":2.0000,
      "BDT":109.4057,
      "BGN":1.8037,
      "BHD":0.3760,
      "BIF":2820.3222,
      "BMD":1.0000,
      "BND":1.3520,
      "BOB":6.9159,
      "BRL":4.8741,
      "BSD":1.0000,
      "BTN":82.6733,
      "BWP":13.4920,
      "BYN":2.8556,
      "BZD":2.0000,
      "CAD":1.3579,
      "CDF":2390.6273,
      "CHF":0.8799,
      "CLP":853.3340,
      "CNY":7.2862,
      "COP":4110.9453,
      "CRC":540.2341,
      "CUP":24.0000,
      "CVE":101.6427,
      "CZK":22.2593,
      "DJF":177.7210,
      "DKK":6.8661,
      "DOP":56.7718,
      "DZD":136.7742,
      "EGP":30.9309,
      "ERN":15.0000,
      "ETB":55.1723,
      "EUR":0.9219,
      "FJD":2.2655,
      "FKP":0.7919,
      "FOK":6.8770,
      "GBP":0.7920,
      "GEL":2.6222,
      "GGP":0.7919,
      "GHS":11.4565,
      "GIP":0.7919,
      "GMD":63.9937,
      "GNF":8557.0405,
      "GTQ":7.8550,
      "GYD":209.4004,
      "HKD":7.8468,
      "HNL":24.6215,
      "HRK":6.9453,
      "HTG":135.5230,
      "HUF":351.7135,
      "IDR":15250.0460,
      "ILS":3.7972,
      "IMP":0.7919,
      "INR":82.6699,
      "IQD":1310.7606,
      "IRR":41985.8310,
      "ISK":131.4579,
      "JEP":0.7919,
      "JMD":154.6725,
      "JOD":0.7090,
      "JPY":146.0865,
      "KES":145.5458,
      "KGS":88.2062,
      "KHR":4162.3313,
      "KID":1.5472,
      "KMF":453.4977,
      "KRW":1321.7694,
      "KWD":0.3083,
      "KYD":0.8333,
      "KZT":462.7771,
      "LAK":19373.2740,
      "LBP":15000.0000,
      "LKR":320.8212,
      "LRD":188.6152,
      "LSL":18.4851,
      "LYD":4.8337,
      "MAD":10.1249,
      "MDL":17.8360,
      "MGA":4502.6048,
      "MKD":56.8487,
      "MMK":2098.2220,
      "MNT":3471.7433,
      "MOP":8.0823,
      "MRU":37.9720,
      "MUR":45.4542,
      "MVR":15.4397,
      "MWK":1087.4781,
      "MXN":16.7974,
      "MYR":4.6444,
      "MZN":63.8776,
      "NAD":18.4851,
      "NGN":767.5518,
      "NIO":36.5949,
      "NOK":10.6406,
      "NPR":132.2774,
      "NZD":1.6821,
      "OMR":0.3845,
      "PAB":1.0000,
      "PEN":3.6944,
      "PGK":3.6381,
      "PHP":56.7219,
      "PKR":304.0871,
      "PLN":4.1245,
      "PYG":7309.7667,
      "QAR":3.6400,
      "RON":4.5704,
      "RSD":108.1302,
      "RUB":95.6407,
      "RWF":1229.8175,
      "SAR":3.7500,
      "SBD":8.4610,
      "SCR":13.6485,
      "SDG":504.5431,
      "SEK":10.9143,
      "SGD":1.3520,
      "SHP":0.7919,
      "SLE":21.7131,
      "SLL":21713.1112,
      "SOS":569.3770,
      "SRD":38.1610,
      "SSP":1005.2601,
      "STN":22.5842,
      "SYP":12921.0444,
      "SZL":18.4851,
      "THB":35.0865,
      "TJS":10.9305,
      "TMT":3.4999,
      "TND":3.1145,
      "TOP":2.3499,
      "TRY":26.5813,
      "TTD":6.7722,
      "TVD":1.5472,
      "TWD":31.8191,
      "TZS":2505.2789,
      "UAH":36.9337,
      "UGX":3714.2707,
      "UYU":37.7061,
      "UZS":12063.7103,
      "VES":32.4284,
      "VND":24181.7197,
      "VUV":121.6625,
      "WST":2.7781,
      "XAF":604.6636,
      "XCD":2.7000,
      "XDR":0.7539,
      "XOF":604.6636,
      "XPF":110.0007,
      "YER":250.2978,
      "ZAR":18.4850,
      "ZMW":19.9365,
      "ZWL":4575.8817
   };

    let arr = Array.from(Object.keys(conversionRates));
    


//    For From Select Menu
    arr.forEach((element)=>{
        const option = document.createElement('option');
        option.value = element;
        option.text = element
        fromCurrencySelect.add(option)
    })

    // For To Select Menu
    arr.forEach((element)=>{
        const option = document.createElement('option');
        option.value = element;
        option.text = element
        toCurrencySelect.add(option)
    })


    fromCurrencySelect.value = "USD";
    toCurrencySelect.value = "PKR";

const Convert =()=>{
    if(input.value.length>0)
    {
        setURl();
    }
    else{
        result.innerHTML =`<h2>Enter Amounts</h2>`
    }
    
   
}

const setURl = ()=>{
    const apiKey = "0e8aeb77ab27b051547b422a";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    getData(url);
}


const getData = async(url)=>{
        const response = await fetch(url);
        const data = await response.json();
       showData(data);
}

const showData = (data)=>{
    let amount = input.value;
    // conversion_rates is obeject
    let From = data.conversion_rates[fromCurrencySelect.value];
    let To = data.conversion_rates[toCurrencySelect.value];
    let conversion = (amount/From)*To;
    

    result.innerHTML= `<h2>${amount}  ${fromCurrencySelect.value} 
    = ${(conversion).toFixed(2)}  ${toCurrencySelect.value}</h2>`
    input.value= "";
    
}
convertBtn.addEventListener("click", Convert)
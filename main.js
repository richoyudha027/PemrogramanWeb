async function currency() {
    const response = await fetch(`http://apilayer.net/api/live?access_key=67dd3bc0d2ad989e75df15800be5a437&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR`)
    var data = await response.json()
  
    console.log(data)

    document.getElementById('USDEUR').innerHTML = data.quotes.USDEUR
    document.getElementById('USDGBP').innerHTML = data.quotes.USDGBP
    document.getElementById('USDJPY').innerHTML = data.quotes.USDJPY
    document.getElementById('USDCHF').innerHTML = data.quotes.USDCHF
    document.getElementById('USDCAD').innerHTML = data.quotes.USDCAD
    document.getElementById('USDZAR').innerHTML = data.quotes.USDZAR
    document.getElementById('USDAUD').innerHTML = data.quotes.USDAUD
    document.getElementById('USDNZD').innerHTML = data.quotes.USDNZD
}

currency()
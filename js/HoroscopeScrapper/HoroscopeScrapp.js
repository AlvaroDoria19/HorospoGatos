import puppeteer  from "puppeteer"

async function ObtenerHoroscopoMain(tipo,dia,signo){
    console.log("SCRIPT FUNCIONANDO")
    const navegador = await puppeteer.launch({
    })
    const pagina = await navegador.newPage()
    await pagina.goto(`https://www.horoscope.com/us/horoscopes/${tipo}/horoscope-${tipo}-daily-${dia}.aspx?sign=${signo}`)
    const resultado = await pagina.evaluate(()=>{
        const horoscopo = document.querySelector('.main-horoscope p').textContent;
        return horoscopo
    })
    console.log(resultado)
    await navegador.close()
}

ObtenerHoroscopoMain("love","tomorrow",6);

let ruleGoroskop = {
    'Aquarius': ['21.01', '19.02'],
    'Pisces': ['20.02', '20.03'],
    'Aries': ['21.03', '20.04'],
    'Taurus': ['21.04', '21.05'],
    'Gemini': ['22.05', '22.06'],
    'Cancer': ['22.06', '22.07'],
    'Leo': ['23.07', '23.08'],
    'Virgo': ['24.08', '23.09'],
    'Libra': ['24.09', '23.10'],
    'Scorpio': ['24.10', '22.11'],
    'Sagittarius': ['23.11', '21.12'],
    'Capricorn': ['22.12', '20.01'],
}
function starSign(date) {
    console.log(date)
    let res = ''
    let dateDay = date.getDate()
    let dateMonth = date.getMonth() + 1
    let dateYaar = date.getFullYear()
    // console.log(dateDay, dateMonth, dateYaar)
    let nwDate = new Date(`${dateYaar} ${dateMonth} ${dateDay}`)
    console.log(nwDate)
    console.log(date)
    switch(true){
        case (+nwDate >= +new Date(`${dateYaar} 01 21`)  && +nwDate <= +new Date(`${dateYaar} 02 19`)):
            res = 'Aquarius'
            break
        case (+nwDate >= +new Date(`${dateYaar} 02 20`)  && +nwDate <= +new Date(`${dateYaar} 03 20`)):
            res = 'Pisces'
            break  
        case (nwDate >= new Date(`${dateYaar} 03 21`)  && nwDate <= new Date(`${dateYaar} 04 20`)):
            res = 'Aries'
            break   
        case (nwDate >= new Date(`${dateYaar} 04 21`)  && nwDate <= new Date(`${dateYaar} 05 21`)):
            res = 'Taurus'
            break   
        case (nwDate >= new Date(`${dateYaar} 05 22`)  && nwDate <= new Date(`${dateYaar} 06 22`)):
            res = 'Gemini'
            break   
        case (nwDate >= new Date(`${dateYaar} 06 22`)  && nwDate <= new Date(`${dateYaar} 07 22`)):
            res = 'Cancer'
            break   
        case (nwDate >= new Date(`${dateYaar} 07 23`)  && nwDate <= new Date(`${dateYaar} 08 23`)):
            res = 'Leo'
            break   
        case (nwDate >= new Date(`${dateYaar} 08 24`)  && nwDate <= new Date(`${dateYaar} 09 23`)):
            res = 'Virgo'
            break   
        case (nwDate >= new Date(`${dateYaar} 09 24`)  && nwDate <= new Date(`${dateYaar} 10 23`)):
            res = 'Libra'
            break   
        case (nwDate >= new Date(`${dateYaar} 10 24`)  && nwDate <= new Date(`${dateYaar} 11 22`)):
            res = 'Scorpio'
            break
        case (nwDate >= new Date(`${dateYaar} 11 23`)  && nwDate <= new Date(`${dateYaar} 12 21`)):
            res = 'Sagittarius'
            break
        default:
            res = 'Capricorn'   
        }
    return res
}
console.log(starSign(new Date(1943, 1, 3)))
console.log(starSign(new Date(1970, 5, 5)))
console.log(starSign(new Date(1987, 7, 23)))
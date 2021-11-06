//Asal Sayı Bul
function asal(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1) {
            console.log("Geçersiz Sayı Girdiniz! : " + numbers[i])
        }
        else if (numbers[i] == 1) {
            console.log(numbers[i] + " Asal Değildir.")
        }
        else {
            for (let j = 2; j < numbers[i]; j++) {
                let kalan = numbers[i] % j
                if (kalan == 0) {
                    let kontrol = true
                }
            }
            if (kontrol) {
                console.log(numbers[i] + " Asal Değildir.")
                kontrol = false
            }
            else {
                console.log(numbers[i] + " Sayısı Asaldır.")
            }
        }
    }
}
asal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)

//Arkadaş Sayılar
function arkadasSayilar(sayi1, sayi2) {
    let toplam1 = 0
    let toplam2 = 0
    for (let j = 1; j < sayi1; j++) {
        if (sayi1 % j == 0) {
            toplam1 = toplam1 + j
        }
    }
    for (let j = 1; j < sayi2; j++) {
        if (sayi2 % j == 0) {
            toplam2 = toplam2 + j
        }
    }
    if (toplam2 == sayi1 && toplam1 == sayi2) {
        console.log("Girdiğiniz sayılar \" Arkadaş Sayılardır \"")
    }
    else {
        console.log("Girdiğiniz sayılar \" Arkadaş Sayılar Değildir\"")
    }
}
arkadasSayilar(220, 284)

//Mükemmel Sayılar
for (let i = 1; i < 1000; i++) {
    let toplam = 0;
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            toplam = toplam + j
        }
    }
    if (toplam == i) {
        console.log("Bu sayı mükemmel sayıdır : " + i)
    }
}

//0 ile 1000 arasındaki asal sayıların listesi
for (let i = 2; i < 1000; i++) {
    for (let j = 2; j < i; j++) {
        let kalan = i % j
        if (kalan == 0) {
            let kontrol = true
        }
    }
    if (kontrol) {
        kontrol = false
    }
    else {
        console.log(i + " Sayısı Asaldır.")
    }
}
Bridge.merge(new System.Globalization.CultureInfo("lv-LV", true), {
    englishName: "Latvian (Latvia)",
    nativeName: "latviešu (Latvija)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "nav skaitlis",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [2],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Sv","Pr","Ot","Tr","Ce","Pk","Se"],
        abbreviatedMonthGenitiveNames: ["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec.",""],
        abbreviatedMonthNames: ["Janv.","Febr.","Marts","Apr.","Maijs","Jūn.","Jūl.","Aug.","Sept.","Okt.","Nov.","Dec.",""],
        amDesignator: "AM",
        dateSeparator: ".",
        dayNames: ["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, yyyy. 'gada' d. MMMM HH:mm:ss",
        longDatePattern: "dddd, yyyy. 'gada' d. MMMM",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris",""],
        monthNames: ["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["Sv","Pr","Ot","Tr","Ce","Pk","Se"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy. 'g'. MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

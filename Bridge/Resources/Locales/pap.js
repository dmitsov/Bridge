Bridge.merge(new System.Globalization.CultureInfo("pap", true), {
    englishName: "Papiamento",
    nativeName: "Papiamentu",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 0,
        currencySymbol: "$",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dom","lun","mar","web","raz","bie","sab"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""],
        amDesignator: "",
        dateSeparator: "-",
        dayNames: ["diadomingo","dialuna","diamars","diawebs","diarazon","diabierna","diasabra"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy H:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
        monthNames: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d-M-yyyy",
        shortestDayNames: ["do","lu","ma","we","ra","bi","sa"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

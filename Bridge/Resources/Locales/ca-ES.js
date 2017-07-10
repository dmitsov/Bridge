Bridge.merge(new System.Globalization.CultureInfo("ca-ES", true), {
    englishName: "Catalan (Catalan)",
    nativeName: "català (català)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
        abbreviatedMonthGenitiveNames: ["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des.",""],
        abbreviatedMonthNames: ["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des.",""],
        amDesignator: "a. m.",
        dateSeparator: "/",
        dayNames: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM 'de' yyyy H:mm:ss",
        longDatePattern: "dddd, d MMMM 'de' yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["de gener","de febrer","de març","d’abril","de maig","de juny","de juliol","d’agost","de setembre","d’octubre","de novembre","de desembre",""],
        monthNames: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],
        pmDesignator: "p. m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM 'de' yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});

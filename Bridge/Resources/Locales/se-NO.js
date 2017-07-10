Bridge.merge(new System.Globalization.CultureInfo("se-NO", true), {
    englishName: "Sami, Northern (Norway)",
    nativeName: "davvisámegiella (Norga)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "¤¤¤",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "kr",
        currencyGroupSizes: [3],
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
        abbreviatedDayNames: ["sotn","vuos","maŋ","gask","duor","bear","láv"],
        abbreviatedMonthGenitiveNames: ["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""],
        abbreviatedMonthNames: ["ođđj","guov","njuk","cuo","mies","geas","suoi","borg","čakč","golg","skáb","juov",""],
        amDesignator: "i.b.",
        dateSeparator: "-",
        dayNames: ["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorasdat","bearjadat","lávvardat"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy MMMM d, dddd HH:mm:ss",
        longDatePattern: "yyyy MMMM d, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],
        monthNames: ["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],
        pmDesignator: "e.b.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["sotn","vuos","maŋ","gask","duor","bear","láv"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
